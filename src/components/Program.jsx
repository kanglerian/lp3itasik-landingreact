import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Program = () => {
  const currentLanguage = localStorage.getItem('language') || 'id';
  const [utamaPrograms, setUtama] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [tasikPrograms, setTasik] = useState([])
  const [vokasiPrograms, setVokasi] = useState([])

  const getPrograms = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/programs`)
      .then((response) => {
        let programs = response.data;
        let foundUtama = programs.filter(program => program.campus == 'Kampus Utama' && program.status == "1");
        let foundTasik = programs.filter(program => program.campus == 'Politeknik LP3I Kampus Tasikmalaya' && program.status == "1");
        let foundVokasi = programs.filter(program => program.campus == 'LP3I Tasikmalaya' && program.status == "1");
        setUtama(foundUtama);
        setTasik(foundTasik);
        setVokasi(foundVokasi);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  useEffect(() => {
    getPrograms();
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
  }, []);

  return (
    <section className="bg-lp3i-500 py-8">
      {isLoaded ? (
        <div className="container mx-auto text-center text-white px-4">
          {tasikPrograms.length > 0 && vokasiPrograms.length > 0 && (
            <div className="bg-lp3i-100 py-3 mb-8 rounded-lg">
              <h5 className="font-bold text-xl md:text-2xl">{currentLanguage == 'en' ? 'Tasikmalaya Campus' : 'Kampus Tasikmalaya'}</h5>
            </div>
          )}

          {tasikPrograms.length > 0 &&
            <>
              {currentLanguage == 'en' ? (
                <h5 className="font-bold text-xl md:text-2xl my-3"><span className="text-merah-100">3 Year Diploma</span> Education Program
                </h5>
              ) : (
                <h5 className="font-bold text-xl md:text-2xl my-3">Program <span className="text-merah-100">Pendidikan Diploma 3</span></h5>
              )}
              <p className='text-base'>{currentLanguage == 'en' ? 'The following is a list of D3 level study programs at the LP3I Polytechnic, Tasikmalaya Campus' : 'Berikut adalah daftar program studi jenjang D3 di Politeknik LP3I Kampus Tasikmalaya'}</p>
              <div className="flex flex-wrap flex-col md:flex-row justify-center gap-5 my-8">
                {tasikPrograms.map((tasik, i) =>
                  <div className="bg-lp3i-400 rounded-xl p-4 relative w-1/1 md:w-1/3" key={i} data-aos-delay={i * 5}>
                    <img loading="lazy" className="w-full rounded-lg" alt={tasik.title} src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + tasik.image} />
                    <div className="pt-4 text-left">
                      <h5 className="font-bold text-sm mb-1 text-left text-white">{tasik.level} {tasik.title}</h5>
                      <span className="inline-block bg-lp3i-200 text-white text-xs py-1 px-3 rounded-md mb-3">{tasik.campus}</span>
                      <div className="flex justify-between items-start">
                        <a href={`/programs/` + tasik.uuid} role="button" className="bg-cyan-600 text-white text-xs py-2 px-3 rounded-md">
                          {currentLanguage == 'en' ? 'View more' : 'Lihat selengkapnya'}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          }

          {vokasiPrograms.length > 0 && (
            <>
              {currentLanguage == 'en' ? (
                <h5 className="font-bold text-xl md:text-2xl my-3"><span className="text-merah-100">2 Year Vocational</span> Education Program
                </h5>
              ) : (
                <h5 className="font-bold text-xl md:text-2xl my-3">Program Pendidikan <span className="text-merah-100">Vokasi 2 Tahun</span>
                </h5>
              )}
              <p className='text-base'>{currentLanguage == 'en' ? 'The following is a list of 2-year Vocational level study programs at LP3I Tasikmalaya' : 'Berikut adalah daftar program studi jenjang Vokasi 2 Tahun di LP3I Tasikmalaya'}</p>
              <div className="flex flex-col md:flex-row justify-center gap-5 my-8">
                {vokasiPrograms.map((vokasi, i) =>
                  <div className="bg-lp3i-400 rounded-xl p-4 relative w-1/1 md:w-1/3" key={i} data-aos-delay={i * 5}>
                    <img loading="lazy" className="w-full rounded-lg" alt={vokasi.title} src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + vokasi.image} />
                    <div className="pt-4 text-left">
                      <h5 className="font-bold text-sm mb-1 text-left text-white">{vokasi.level} {vokasi.title}</h5>
                      <span className="inline-block bg-lp3i-200 text-white text-xs py-1 px-3 rounded-md mb-3">{vokasi.campus}</span>
                      <div className="flex justify-between items-start">
                        <a href={`/programs/` + vokasi.uuid} role="button" className="bg-cyan-600 text-white text-xs py-2 px-3 rounded-md">
                          {currentLanguage == 'en' ? 'View more' : 'Lihat selengkapnya'}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {utamaPrograms.length > 0 && (
            <>
              <div className="bg-lp3i-200 py-3 mb-8 rounded-lg">
                <h5 className="font-bold text-xl md:text-2xl">
                  {currentLanguage == 'en' ? 'Main Campus' : 'Kampus Utama'}
                </h5>
              </div>
              {currentLanguage == 'en' ? (
                <h5 className="font-bold text-xl md:text-2xl my-3"><span className="text-merah-100">3 Year Diploma</span> Education Program
                </h5>
              ) : (
                <h5 className="font-bold text-xl md:text-2xl my-3">Program Pendidikan <span className="text-merah-100">Diploma 3</span></h5>
              )}
              <p className='text-base'>
                {currentLanguage == 'en' ? 'The following is a list of D3 level study programs at the LP3I Polytechnic' : 'Berikut adalah daftar program studi jenjang D3 di Politeknik LP3I'}</p>
              <div className="flex flex-wrap flex-col md:flex-row justify-center gap-5 my-8">
                {utamaPrograms.map((utama, i) =>
                  <div className="bg-lp3i-400 rounded-xl p-4 relative w-1/1 md:w-1/3" key={i} data-aos-delay={i * 5}>
                  <img loading="lazy" className="w-full rounded-lg" alt={utama.title} src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + utama.image} />
                  <div className="pt-4 text-left">
                    <h5 className="font-bold text-sm mb-1 text-left text-white">{utama.level} {utama.title}</h5>
                    <span className="inline-block bg-lp3i-200 text-white text-xs py-1 px-3 rounded-md mb-3">{utama.campus}</span>
                    <div className="flex justify-between items-start">
                      <a href={`/programs/` + utama.uuid} role="button" className="bg-cyan-600 text-white text-xs py-2 px-3 rounded-md">
                        {currentLanguage == 'en' ? 'View more' : 'Lihat selengkapnya'}
                      </a>
                    </div>
                  </div>
                </div>
                )}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="container mx-auto text-center text-white px-4">
          <div role="status" className="flex items-center justify-center h-56 md:h-58 bg-lp3i-100 rounded-lg animate-pulse">
            <i className="fa-regular fa-images fa-3x text-gray-200 animate-pulse"></i>
          </div>
        </div>
      )}
    </section>

  )
}

export default Program