import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import imageFlyer from '../assets/flyer.jpeg'

const Flyer = () => {
  const [isVisible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!isVisible);
  }

  const loadingModal = () => {
    setVisible(!isVisible);
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
    AOS.refresh();
    setTimeout(loadingModal, 3000);
  }, []);

  return (
    <>
      {isVisible &&
        <div id="myModal" className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-75 flex items-center justify-center h-screen w-full px-5">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" className="w-3/3 md:w-2/3 bg-slate-100 rounded-xl p-5 max-h-screen overflow-y-auto">
              <div className='relative flex justify-center items-center flex-col md:flex-row gap-5'>
                <button onClick={handleVisible} className='absolute top-0 right-0'><i class="fa-solid fa-circle-xmark fa-1x"></i></button>
                <div className="w-full md:w-1/2 bg-cover bg-center h-[200px] md:h-[450px] rounded-xl" style={{ backgroundImage: `url(${imageFlyer})` }}></div>
                <div className='w-full md:w-1/2 space-y-2'>
                  <h4 className='text-sm' data-aos="fade-up" data-aos-delay="1100">MASIH BINGUNG CARI KAMPUS?</h4>
                  <h1 className='text-2xl font-bold' data-aos="fade-up" data-aos-delay="1200">Daftar di Politeknik LP3I Kampus Tasikmalaya Sekarang, Dapatkan Beasiswa hingga Rp5.000.000.</h1>
                  <p data-aos="fade-up" data-aos-delay="1300">Jangan lewatkan penawaran terbatas ya sahabat.</p>
                  <input data-aos="fade-up" data-aos-delay="1400" type='email' placeholder='Enter your full name' className='w-full border text-sm border-gray-200 rounded-lg' />
                  <input data-aos="fade-up" data-aos-delay="1500" type='text' placeholder='No whatsapp' className='w-full border text-sm border-gray-200 rounded-lg' />
                  <input data-aos="fade-up" data-aos-delay="1600" type='text' placeholder='Enter your school' className='w-full border text-sm border-gray-200 rounded-lg' />
                  <button data-aos="fade-up" data-aos-delay="1700" className='w-full text-sm bg-red-500 text-white px-4 py-2 rounded-lg'>Dapatkan Beasiswa</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Flyer