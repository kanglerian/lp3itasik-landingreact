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
    <section className="container mx-auto my-5 px-4">
      {isLoaded ? (
        <div className="relative z-0">
          {banners.length > 0 ? (
            <div className="flex items-center justify-center relative h-56 overflow-hidden rounded-xl md:h-[550px]">
              <OwlCarousel className='owl-theme' items={1} dots={true} loop margin={10} autoplay>
                {banners.map((banner, i) =>
                  <div className="item" key={i}>
                    <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + banner.image} alt={banner.title} className="rounded-lg shadow-lg" />
                  </div>
                )}
              </OwlCarousel>
            </div>
          ) : (
            <div className="flex items-center justify-center relative h-56 overflow-hidden rounded-lg md:h-[550px]">
              <img src={bannerDefault} alt="Beasiswa LP3I" className="rounded-lg shadow-lg" />
            </div>
          )}
        </div>
      ) : (
        <div className="relative z-0">
          <div role="status" className="flex items-center justify-center h-56 md:h-[550px] bg-gray-100 rounded-lg animate-pulse">
            <i className="fa-regular fa-images fa-3x text-gray-200"></i>
          </div>
        </div>
      )}

    </section>
  )
}

export default Banner