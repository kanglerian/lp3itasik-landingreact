import React, { useEffect, useState } from 'react'
import axios from 'axios'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import logoKampusMerdeka from '../assets/partnert/kampus-merdeka.png';
import logoMsib from '../assets/partnert/msib.png';
import logoTut from '../assets/partnert/tutwuridhandayani.png'

const Companies = () => {

  const currentLanguage = localStorage.getItem('language') || 'id';
  const [companies, setCompany] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const options = {
    responsive: {
      0: {
        items: 3
      },
      992: {
        items: 5
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
    <div className="item flex items-center justify-center" key={i} data-aos-delay={i * 5}>
      <a href={`${company.link}`} target='_blank'><img loading="lazy" src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + company.image} alt={company.title} className="w-10 rounded-lg" /></a>
    </div>
  )

  useEffect(() => {
    getCompanies()
  }, []);

  return (
    <section className="my-10">
      <div className="container mx-auto px-4">
        <div className="py-3 mb-8 md:px-20 text-center rounded-lg">
          <h5 className="font-bold text-3xl">{currentLanguage == 'en' ? 'Cooperation' : 'Kerjasama'}</h5>
          <p className="text-gray-600 text-sm md:text-base mt-2">{currentLanguage == 'en' ? 'LP3I collaborates with hundreds of companies in Indonesia for student work placements even before graduation to ensure that we give them the opportunity for a better future' : 'LP3I berkolaborasi dengan ratusan perusahaan di Indonesia untuk penempatan kerja mahasiswa bahkan sebelum lulus untuk memastikan bahwa kami memberikan mereka kesempatan untuk masa depan yang lebih baik'}.</p>
        </div>
        <div className="text-center space-x-10">
          <img loading="lazy" data-aos-delay="10" src={logoKampusMerdeka} alt="Kampus Merdeka" className="inline w-32" />
          <img loading="lazy" data-aos-delay="20" src={logoMsib} alt="MSIB" className="inline w-32" />
          <img loading="lazy" data-aos-delay="30" src={logoTut} alt="Tut Wuri Handayani" className="inline w-32" />
        </div>
        {isLoaded ? (
          <div className="mt-10 flex items-center justify-center">
            <OwlCarousel className='owl-theme flex items-center justify-center' {...options} loop margin={10} autoplay dots={true}>
              {listCompanies}
            </OwlCarousel>
          </div>
        ) : (
          <div className="mt-10 flex justify-center" data-aos="fade-up">
            <div className="w-full md:w-1/3 flex items-center justify-center h-56 md:h-72 bg-gray-100 rounded-lg animate-pulse">
              <i className="fa-regular fa-images fa-3x text-gray-200 animate-pulse"></i>
            </div>
          </div>
        )}

      </div >
    </section >

  )
}

export default Companies