import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Link = () => {
  const currentLanguage = localStorage.getItem('language') || 'id';

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
    AOS.refresh();
  }, []);

  return (
    <section>
      <div className="container mx-auto text-sm md:text-base px-4">
        <div className="flex flex-col md:flex-row gap-2	md:gap-4 justify-center">
          <a data-aos="fade-up" data-aos-delay="10" role="button" href="https://api.whatsapp.com/send?phone=6281313608558&text=Hallo%20Kak,%20Boleh%20minta%20informasi%20Pendaftaran%20Mahasiswa%20Politeknik%20LP3I%20Kampus%20Tasikmalaya%3F" target="_blank" className="transition ease-in-out duration-300 inline py-2 px-8 text-center text-white bg-cyan-700 hover:bg-cyan-800 rounded"><i className="fa-solid fa-circle-info mr-1" />
            {currentLanguage == 'en' ? 'Registration Information' : 'Informasi Pendaftaran'}
          </a>
          <a data-aos="fade-up" data-aos-delay="20" role="button" href={`/career`} className="transition text-center ease-in-out duration-300 inline py-2 px-8 text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-700 rounded">
            <i class="fa-solid fa-briefcase mr-1"></i>
            {currentLanguage == 'en' ? 'Career Center' : 'Pusat Karir'}
          </a>
          <a data-aos="fade-up" data-aos-delay="20" role="button" href="https://brosur.politekniklp3i-tasikmalaya.ac.id/" target="_blank" className="transition text-center ease-in-out duration-300 inline py-2 px-8 text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-700 rounded"><i className="fa-solid fa-book-open mr-1" />
            {currentLanguage == 'en' ? 'Digital Brochure' : 'Brosur Digital'}
          </a>
          <a data-aos="fade-up" data-aos-delay="30" href="https://virtualkampus.politekniklp3i-tasikmalaya.ac.id/" role="button" target="_blank" className="transition ease-in-out duration-300 inline py-2 px-8 text-cyan-700 text-center hover:text-white border border-cyan-700 hover:bg-cyan-700 rounded"><i className="fa-solid fa-map-location-dot mr-1" />
            {currentLanguage == 'en' ? 'Virtual Campus' : 'Virtual Kampus'}
          </a>
          <a data-aos="fade-up" data-aos-delay="40" href="https://schoolarship.politekniklp3i-tasikmalaya.ac.id/" role="button" target="_blank" className="transition ease-in-out duration-300 inline py-2 px-8 text-cyan-700 text-center hover:text-white border border-cyan-700 hover:bg-cyan-700 rounded"><i className="fa-solid fa-qrcode mr-1" />
            {currentLanguage == 'en' ? 'Scholarship Check' : 'Cek Beasiswa'}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Link