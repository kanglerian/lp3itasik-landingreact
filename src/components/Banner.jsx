import React, { useEffect, useState } from 'react'
import axios from 'axios'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const Banner = () => {
  const [banners, setBanner] = useState([])

  const getBanners = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/banners`)
      .then((response) => {
        let banners = response.data.filter(banner => banner.status == '1')
        setBanner(banners)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  useEffect(() => {
    getBanners()
  }, []);

  
  return (
    <section className="container mx-auto mt-5 px-4">
      <div className="relative z-0">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-[550px]">
          {banners.length > 0 &&
            <OwlCarousel className='owl-theme' items={1} loop margin={10} autoplay>
              {banners.map((banner, i) =>
                <div className="item" key={i}>
                  <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + banner.image} alt={banner.title} className="rounded-lg shadow-lg" />
                </div>
              )}
            </OwlCarousel>
          }
        </div>
      </div>
    </section>
  )
}

export default Banner