import React, { useEffect, useState } from 'react'
import axios from 'axios'
import bannerDefault from '../assets/img/banner-default.jpg'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const Banner = ({ locate }) => {
  const [banners, setBanner] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);

  const getBanners = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/banners`)
      .then((response) => {
        let banners = response.data.filter(banner => banner.status == '1' && banner.locate == locate)
        setBanner(banners)
        setIsLoaded(true)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  useEffect(() => {
    getBanners()
  }, []);


  return (
    <section className="container mx-auto my-4 px-4">
      {isLoaded ? (
        <div className="relative z-0">
          {banners.length > 0 ? (
            <div className="flex items-center justify-center relative overflow-hidden rounded-xl">
              <OwlCarousel className='owl-theme' items={1} dots={true} loop margin={10} autoplay>
                {banners.map((banner, i) =>
                  <div className="item" key={i}>
                    <img loading="lazy" src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + banner.image} alt={banner.title} className="rounded-lg shadow-lg aspect-w-16 aspect-h-9" />
                  </div>
                )}
              </OwlCarousel>
            </div>
          ) : (
            <div className="flex items-center justify-center relative h-56 overflow-hidden rounded-lg md:h-[550px]">
              <img loading="lazy" src={bannerDefault} alt="Beasiswa LP3I" className="rounded-lg shadow-lg" />
            </div>
          )}
        </div>
      ) : (
        <div className="relative z-0">
          <div role="status" className="flex items-center justify-center h-56 md:h-[700px] bg-gray-100 rounded-lg animate-pulse">
            <i className="fa-regular fa-images fa-3x text-gray-200 animate-pulse"></i>
          </div>
        </div>
      )}

    </section>
  )
}

export default Banner