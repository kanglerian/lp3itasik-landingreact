import React, { useEffect, useState } from 'react'
import axios from 'axios'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import logoKampusMerdeka from '../assets/partnert/kampus-merdeka.png';
import logoMsib from '../assets/partnert/msib.png';
import logoTut from '../assets/partnert/tutwuridhandayani.png'

const Companies = () => {
  const [companies, setCompany] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const options = {
    responsive: {
      0: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  }
  const getCompanies = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/companies`)
      .then((response) => {
        let companies = response.data.filter(company => company.status == '1')
        setCompany(companies)
        setIsLoaded(true)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const listCompanies = companies.map((company, i) =>
    <div className="item" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
      <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + company.image} alt={company.title} className="w-10 rounded-lg" />
    </div>
  )

  useEffect(() => {
    getCompanies()
  }, []);

  return (
    <section className="my-10">
      <div className="container mx-auto px-4">
        <div className="py-3 mb-8 md:px-20 text-center rounded-lg">
          <h5 className="font-bold text-3xl" data-aos="fade-up">Kerjasama</h5>
          <p className="text-gray-600 text-sm mt-2" data-aos="fade-up" data-aos-delay="100">LP3I berkolaborasi dengan ratusan perusahaan di Indonesia untuk penempatan kerja mahasiswa bahkan sebelum lulus untuk memastikan bahwa kami memberikan mereka kesempatan untuk masa depan yang lebih baik.</p>
        </div>
        <div className="text-center space-x-10">
          <img data-aos="fade-up" data-aos-delay="150" src={logoKampusMerdeka} alt="Kampus Merdeka" className="inline w-32" />
          <img data-aos="fade-up" data-aos-delay="200" src={logoMsib} alt="MSIB" className="inline w-32" />
          <img data-aos="fade-up" data-aos-delay="250" src={logoTut} alt="Tut Wuri Handayani" className="inline w-32" />
        </div>
        {isLoaded ? (
          <div className="mt-10 flex justify-center">
            <OwlCarousel className='owl-theme' {...options} loop margin={10} autoplay dots={true}>
              {listCompanies}
            </OwlCarousel>
          </div>
        ) : (
          <div className="mt-10 flex justify-center">
            <div className="w-full md:w-1/3 flex items-center justify-center h-56 md:h-72 bg-gray-100 rounded-lg animate-pulse">
              <i className="fa-regular fa-images fa-3x text-gray-200"></i>
            </div>
          </div>
        )}

      </div >
    </section >

  )
}

export default Companies