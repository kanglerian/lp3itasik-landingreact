import React, { useState, useEffect, lazy, Suspense } from 'react'
import axios from 'axios'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import biniPhoto from '../assets/cnp/bini.jpg'
import asdanPhoto from '../assets/cnp/asdan.jpg'
import ginaPhoto from '../assets/cnp/gina.jpg'

const Navbar = lazy(() => import('../components/Navbar'))
const Footer = lazy(() => import('../components/Footer'))
const Banner = lazy(() => import('../components/Banner'))
const Information = lazy(() => import('../components/Information'))

import AOS from 'aos'
import 'aos/dist/aos.css'

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import emptyAnimate from '../assets/empty.json'

const renderLoader = () =>
  <div role="status" className='flex justify-center items-center h-screen'>
    <svg aria-hidden="true" class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <span class="sr-only">Loading...</span>
  </div>;

const CareerCenter = () => {
  const currentLanguage = localStorage.getItem('language') || 'id';

  const [alumnis, setAlumni] = useState([])
  const [documentations, setDocumentation] = useState([])
  const [companies, setCompany] = useState([])

  const [compLoaded, setCompLoaded] = useState(false)
  const [docLoaded, setDocLoaded] = useState(false)

  const options = {
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 3
      }
    }
  }

  const getAlumni = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/programalumnis`)
      .then((response) => {
        let data = response.data.filter(dat => dat.status == '1')
        setAlumni(data)
        setIsLoaded(false)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const getDocumentation = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/documentations`)
      .then((response) => {
        let docs = response.data.filter(doc => doc.status == '1')
        setDocumentation(docs)
        setDocLoaded(true)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const getCompanies = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/companies`)
      .then((response) => {
        let companies = response.data.filter(company => company.status == '1')
        setCompany(companies)
        setCompLoaded(true)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const listCompanies = companies.map((company, i) =>
    <div className="w-1/2 md:w-1/6 p-4 item" key={i} data-aos="fade-up" data-aos-delay={i * 5}>
      <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + company.image} alt={company.title} className="rounded-lg" />
    </div>
  )

  const listDocumentation = documentations.map((doc, i) =>
    <div className="item" key={i} data-aos="fade-up" data-aos-delay={i * 5}>
      <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + doc.image} alt={doc.title}
        className="rounded-lg" />
    </div>
  )

  const hiddenSection = (content) => {
    let data = content.target.dataset.name;
    switch (data) {
      case 'about':
        $('#about').show();
        $('#kki').hide();
        $('#testimoni').hide();
        break;
      case 'kki':
        $('#about').hide();
        $('#kki').show();
        $('#testimoni').hide();
        break;
      case 'testimoni':
        $('#about').hide();
        $('#kki').hide();
        $('#testimoni').show();
        break;
      default:
        $('#about').show();
    }
  }

  useEffect(() => {
    getAlumni()
    getDocumentation()
    getCompanies()
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
  }, []);

  return (
    <Suspense fallback={renderLoader()}>
      <Navbar />
      <style dangerouslySetInnerHTML={{ __html: "\n\t#media p a {\n\t\tcolor: #0284c7;\n\t\ttext-decoration: underline;\n\t}\n" }} />
      <section className="container mx-auto my-8" data-aos="fade-up">
        <Banner locate="C" />
        <nav className="my-5 mx-4 bg-slate-100 border border-slate-200 py-3 rounded-xl" data-aos="fade-up" data-aos-delay="100">
          <ul className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 text-sm text-center px-4">
            <li onClick={hiddenSection} data-name="about" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">{currentLanguage == 'en' ? 'About C&P' : 'Tentang C&P'}</li>
            <li onClick={hiddenSection} data-name="kki" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">{currentLanguage == 'en' ? 'KKI Students' : 'Mahasiswa KKI'}</li>
            <li onClick={hiddenSection} data-name="testimoni" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">{currentLanguage == 'en' ? 'Testimonials' : 'Testimoni'}</li>
          </ul>
        </nav>
        <section id="about">
          <Information doc={false} locate="C" />
          <div className='flex flex-col md:flex-row items-center gap-5 mx-4'>
            <div className='w-full md:w-2/6 order-2 md:order-none space-y-4'>
              <div className='space-y-1'>
                <h1 className='text-2xl md:text-4xl font-bold' data-aos="fade-up">C&P Team</h1>
                <h5 className='text-base' data-aos="fade-up" data-aos-delay="10">Bidang Kerjasama dan Penempatan</h5>
              </div>
              <ul className='space-y-1'>
                <li className='text-base flex items-center gap-2' data-aos="fade-up" data-aos-delay="20"><i class="fa-brands fa-whatsapp fa-2x"></i><span>0853-3702-0801</span></li>
                <li className='text-base flex items-center gap-2' data-aos="fade-up" data-aos-delay="30"><i class="fa-solid fa-envelope fa-2x"></i><span>cnptasik@gmail.com</span></li>
              </ul>
            </div>
            <div className='w-full md:w-4/6 order-1 md:order-none flex gap-3 justify-center px-2'>
              <img src={asdanPhoto} alt="Asdan" data-aos="fade-up" data-aos-delay="10" className='block w-1/3 rounded-lg' />
              <img src={biniPhoto} alt="Bini" data-aos="fade-up" data-aos-delay="20" className='block w-1/3 rounded-lg' />
              <img src={ginaPhoto} alt="Gina" data-aos="fade-up" data-aos-delay="30" className='block w-1/3 rounded-lg' />
            </div>
          </div>
          <div className='space-y-6 px-4 mt-10'>
            <div className='text-center space-y-2'>
              <h1 className='font-bold text-2xl md:text-3xl' data-aos="fade-up">Dokumentasi Penempatan Kerja</h1>
              <p className='text-gray-700 text-sm md:text-base' data-aos="fade-up" data-aos-delay="20">Berikut ini adalah dokumentasi penempatan kerja mahasiswa/i Politeknik LP3I Kampus Tasikmalaya</p>
            </div>
            {docLoaded ? (
              <div className="flex justify-center">
                <OwlCarousel className='owl-theme' {...options} loop margin={10} autoplay dots={true}>
                  {listDocumentation}
                </OwlCarousel>
              </div>
            ) : (
              <div className="flex justify-center" data-aos="fade-up">
                <div className="w-full md:w-1/3 flex items-center justify-center h-56 md:h-68 bg-gray-100 rounded-lg animate-pulse">
                  <i className="fa-regular fa-images fa-3x text-gray-200"></i>
                </div>
              </div>
            )}
          </div>
          <div className='space-y-6 px-4 mt-10'>
            <div className='text-center space-y-2'>
              <h1 className='font-bold text-2xl md:text-3xl' data-aos="fade-up">Perusahaan Relasi</h1>
              <p className='text-gray-700 text-sm md:text-base' data-aos="fade-up" data-aos-delay="20">Menjalin relasi dengan lebih dari 100 Perusahaan di Jabodetabek.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center">
              {
                compLoaded ? (
                  listCompanies
                ) : (
                  <>
                    <div className='w-1/2 md:w-1/3 p-4'>
                      <div className="flex items-center justify-center h-56 md:h-32 bg-gray-100 rounded-lg animate-pulse">
                        <i className="fa-regular fa-images fa-2x text-gray-200"></i>
                      </div>
                    </div>
                    <div className='w-1/2 md:w-1/3 p-4'>
                      <div className="flex items-center justify-center h-56 md:h-32 bg-gray-100 rounded-lg animate-pulse">
                        <i className="fa-regular fa-images fa-2x text-gray-200"></i>
                      </div>
                    </div>
                    <div className='w-1/2 md:w-1/3 p-4'>
                      <div className="flex items-center justify-center h-56 md:h-32 bg-gray-100 rounded-lg animate-pulse">
                        <i className="fa-regular fa-images fa-2x text-gray-200"></i>
                      </div>
                    </div>
                  </>
                )
              }
            </div>
          </div>
        </section>
        <section className="hidden py-3" id="kki">
          {alumnis.length > 0 ? (
            <>
              {
                alumnis.filter(item => item.career == 'M').length > 0 ? (
                  <>
                    <div>
                      <div className='space-y-1 mb-3'>
                        <h2 className='text-center font-bold text-3xl'>Mahasiswa Kuliah Kerja Industri</h2>
                        <p className='text-center text-sm md:text-base text-gray-700'>Berikut ini adalah daftar testimoni alumni angkatan tersebut.</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row justify-center items-center">
                      {alumnis.filter(item => item.career == 'M').map((alumni) =>
                        <div className="w-full md:w-1/4 p-2 transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-300">
                          <div className="text-center bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                            <div className='flex justify-center items-center'>
                              <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + alumni.image} alt={alumni.title} className="text-center rounded-full h-20" />
                            </div>
                            <hr />
                            <h3 className="text-lg">{alumni.name}</h3>
                            <ul className="text-sm text-slate-800 space-y-1">
                              <li><span className="font-bold">Alumni</span> {alumni.school}</li>
                              <li><span className="font-bold">Bekerja</span> {alumni.work}</li>
                              <li><span className="font-bold">Sebagai</span> {alumni.profession}</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    <hr className='my-5' />
                  </>
                ) : (
                  <div className="h-[500px] text-center flex justify-center items-center overflow-x-hidden">
                    <Player
                      autoplay
                      loop
                      src={emptyAnimate}
                      style={{ height: 500, width: 500 }}
                    >
                      <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                  </div>
                )
              }
            </>
          ) : (
            <div className="h-[500px] text-center flex justify-center items-center overflow-x-hidden">
              <Player
                autoplay
                loop
                src={emptyAnimate}
                style={{ height: 500, width: 500 }}
              >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
              </Player>
            </div>
          )}
        </section>

        <section className="hidden py-3" id="testimoni">
          {alumnis.length > 0 ? (
            <>
              {
                alumnis.filter(item => item.testimoni == 1).length > 0 && (
                  <>
                    <div>
                      <div className='space-y-1 mb-3'>
                        <h2 className='text-center font-bold text-3xl'>Testimoni Alumni</h2>
                        <p className='text-center text-sm md:text-base text-gray-700'>Berikut ini adalah daftar testimoni alumni angkatan tersebut.</p>
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
                              <li><span className="font-bold">Asal sekolah</span> {alumni.school}</li>
                              <li><span className="font-bold">Bekerja</span> {alumni.work}</li>
                              <li><span className="font-bold">Sebagai</span> {alumni.profession}</li>
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

              {
                alumnis.filter(item => item.career == 'K').length > 0 && (
                  <>
                  <hr className='my-5' />
                    <div>
                      <div className='space-y-1 mb-3'>
                        <h2 className='text-center font-bold text-3xl'>Mahasiswa Bekerja</h2>
                        <p className='text-center text-sm md:text-base text-gray-700'>Berikut ini adalah daftar testimoni alumni angkatan tersebut.</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row justify-center items-center">
                      {alumnis.filter(item => item.career == 'K').map((alumni) =>
                        <div className="w-full md:w-1/4 p-2 transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-300">
                          <div className="text-center bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                            <div className='flex justify-center items-center'>
                              <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + alumni.image} alt={alumni.title} className="text-center rounded-full h-20" />
                            </div>
                            <hr />
                            <h3 className="text-lg">{alumni.name}</h3>
                            <ul className="text-sm text-slate-800 space-y-1">
                              <li><span className="font-bold">Asal sekolah</span> {alumni.school}</li>
                              <li><span className="font-bold">Bekerja</span> {alumni.work}</li>
                              <li><span className="font-bold">Sebagai</span> {alumni.profession}</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )
              }

              {
                alumnis.filter(item => item.career == 'W').length > 0 && (
                  <>
                  <hr className='my-5' />
                    <div>
                      <div className='space-y-1 mb-3'>
                        <h2 className='text-center font-bold text-3xl'>Mahasiswa Berwirausaha</h2>
                        <p className='text-center text-sm md:text-base text-gray-700'>Berikut ini adalah daftar testimoni alumni angkatan tersebut.</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row justify-center items-center">
                      {alumnis.filter(item => item.career == 'W').map((alumni) =>
                        <div className="w-full md:w-1/4 p-2 transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-300">
                          <div className="text-center bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                            <div className='flex justify-center items-center'>
                              <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + alumni.image} alt={alumni.title} className="text-center rounded-full h-20" />
                            </div>
                            <hr />
                            <h3 className="text-lg">{alumni.name}</h3>
                            <ul className="text-sm text-slate-800 space-y-1">
                              <li><span className="font-bold">Asal sekolah</span> {alumni.school}</li>
                              <li><span className="font-bold">Bekerja</span> {alumni.work}</li>
                              <li><span className="font-bold">Sebagai</span> {alumni.profession}</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )
              }
            </>
          ) : (
            <div className="h-[500px] text-center flex justify-center items-center overflow-x-hidden">
              <Player
                autoplay
                loop
                src={emptyAnimate}
                style={{ height: 500, width: 500 }}
              >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
              </Player>
            </div>
          )}

        </section>
      </section>
      <Footer />
    </Suspense>
  )
}

export default CareerCenter