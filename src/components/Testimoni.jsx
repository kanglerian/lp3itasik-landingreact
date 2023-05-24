import React, { useState, useEffect } from 'react'
import axios from 'axios'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Testimoni = () => {
  const currentLanguage = localStorage.getItem('language') || 'id';

  const [alumnis, setAlumni] = useState([])

  const getAlumni = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/programalumnis`)
      .then((response) => {
        let data = response.data.filter(dat => dat.status == '1')
        setAlumni(data)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  useEffect(() => {
    getAlumni()
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
  }, []);

  return (
    <>
      {alumnis.length > 0 &&
        <section className="container mx-auto text-sm md:text-base px-4">
          {
            alumnis.filter(item => item.testimoni == 1).length > 0 && (
              <>
                <div>
                  <div className='space-y-1 mb-3'>
                    <h2 className='text-center font-bold text-3xl'>{currentLanguage == 'en' ? 'Alumni and Student Testimonials' : 'Testimoni Alumni & Mahasiswa'}</h2>
                    <p className='text-center text-sm md:text-base text-gray-700'>{currentLanguage == 'en' ? 'The following is a list of testimonials from alumni and students of this generation' : 'Berikut ini adalah daftar testimoni alumni dan mahasiswa angkatan tersebut'}.</p>
                  </div>
                </div>
                <div className="flex flex-wrap flex-row justify-center items-center">
                  {alumnis.filter(item => item.testimoni == 1).map((alumni) =>
                    <div className="w-full md:w-1/3 p-2 transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-300">
                      <div className="text-center bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                        <div className='flex justify-center items-center'>
                          <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + alumni.image} alt={alumni.title} className="text-center rounded-full h-20" />
                        </div>
                        <h3 className="text-lg">{alumni.name}</h3>
                        <hr />
                        <ul className="text-sm text-slate-800">
                          <li><span className="font-bold">{currentLanguage == 'en' ? 'School' : 'Asal Sekolah'}</span> {alumni.school}</li>
                          <li><span className="font-bold">{currentLanguage == 'en' ? 'Work' : 'Bekerja'}</span> {alumni.work}</li>
                          <li><span className="font-bold">{currentLanguage == 'en' ? 'Position' : 'Sebagai'}</span> {alumni.profession}</li>
                        </ul>
                        <hr />
                        <p className="text-slate-800"><i>"{alumni.quote}"</i></p>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )
          }
        </section>
      }
    </>
  )
}

export default Testimoni