import React, { useState, useEffect, lazy, Suspense } from 'react'
import axios from 'axios'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import pdfBrosur from '../assets/pdf/brosur.pdf';

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
    <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <div className="w-1/2 md:w-1/6 p-4 item" key={i} data-aos-delay={i * 5}>
      <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + company.image} alt={company.title} className="rounded-lg" />
    </div>
  )

  const listDocumentation = documentations.map((doc, i) =>
    <div className="item" key={i} data-aos-delay={i * 5}>
      <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + doc.image} alt={doc.title}
        className="rounded-lg" />
    </div>
  )

  const hiddenSection = (content) => {
    let data = content.target.dataset.name;
    switch (data) {
      case 'penelitian':
        $('#penelitian').show();
        $('#pkm').hide();
        $('#kkn').hide();
        break;
      case 'pkm':
        $('#penelitian').hide();
        $('#pkm').show();
        $('#kkn').hide();
        break;
      case 'kkn':
        $('#penelitian').hide();
        $('#pkm').hide();
        $('#kkn').show();
        break;
      default:
        $('#penelitian').show();
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
      <section className="container mx-auto my-8">
        <Banner locate="C" />
        <nav className="my-5 mx-4 bg-slate-100 border border-slate-200 py-3 rounded-xl" data-aos-delay="100">
          <ul className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 text-sm text-center px-4">
            <li onClick={hiddenSection} data-name="penelitian" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">Penelitian</li>
            <li onClick={hiddenSection} data-name="pkm" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">PKM</li>
            <li onClick={hiddenSection} data-name="kkn" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">KKN</li>
          </ul>
        </nav>

        {/* Penelitian */}
        <section id="penelitian" className="container mx-auto px-4 my-8">
          <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
            <div className='w-full md:w-1/2'>
              <iframe
                title="Embedded PDF"
                width="100%"
                height="550px"
                src={pdfBrosur}
                className='rounded-xl'
              ></iframe>
            </div>
            <div className='w-full md:w-1/2 space-y-3'>
              <h2 className='font-bold text-2xl text-gray-800'>Panduan Penelitian Sopyan</h2>
              <p className='text-sm text-gray-700'>Selamat datang di bagian Panduan Penelitian kami! Kami mengundang Anda untuk menjelajahi panduan yang berisi panduan langkah demi langkah yang berharga untuk memulai penelitian Anda. Langkah pertama adalah membaca dan mengunduh berkas ini, yang akan membantu Anda memahami proses penelitian secara mendalam. Panduan kami dirancang untuk memandu Anda melalui setiap tahap, dari perumusan pertanyaan penelitian hingga analisis hasil yang akurat. Jangan lewatkan kesempatan ini untuk memanfaatkan panduan yang telah kami siapkan dengan cermat guna membantu Anda mencapai kesuksesan dalam perjalanan penelitian Anda. Selamat membaca dan mengeksplorasi!</p>
            </div>
          </div>
        </section>

        {/* PKM */}
        <section id="pkm" className="hidden container mx-auto px-4 my-8">
          <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
            <div className='w-full md:w-1/2'>
              <iframe
                title="Embedded PDF"
                width="100%"
                height="550px"
                src={pdfBrosur}
                className='rounded-xl'
              ></iframe>
            </div>
            <div className='w-full md:w-1/2 space-y-3'>
              <h2 className='font-bold text-2xl text-gray-800'>Panduan PKM</h2>
              <p className='text-sm text-gray-700'>Selamat datang di bagian Panduan PKM Pengabdian kepada Masyarakat kami! Kami dengan hangat mengundang Anda untuk menjelajahi panduan komprehensif ini yang akan membantu Anda memulai perjalanan berharga dalam pengabdian kepada masyarakat. Langkah pertama yang kami anjurkan adalah membaca dan mengunduh berkas yang telah kami sediakan di sini. Berkas ini berisi informasi penting mengenai tahapan-tahapan yang perlu Anda lalui dalam merencanakan dan melaksanakan proyek pengabdian Anda. Kami telah merangkum strategi sukses, tips kolaborasi yang efektif, serta cara mengukur dampak positif pada masyarakat yang Anda layani. Jangan sia-siakan kesempatan ini untuk memberikan kontribusi nyata pada masyarakat melalui proyek PKM Anda. Selamat membaca dan menginspirasi masyarakat!</p>
            </div>
          </div>
        </section>

        {/* KKN */}
        <section id="kkn" className="hidden container mx-auto px-4 my-8">
          <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
            <div className='w-full md:w-1/2'>
              <iframe
                title="Embedded PDF"
                width="100%"
                height="550px"
                src={pdfBrosur}
                className='rounded-xl'
              ></iframe>
            </div>
            <div className='w-full md:w-1/2 space-y-3'>
              <h2 className='font-bold text-2xl text-gray-800'>Panduan KKN</h2>
              <p className='text-sm text-gray-700'>Selamat datang di Panduan KKN (Kuliah Kerja Nyata) kami! Kami dengan antusias mengajak Anda untuk menjelajahi panduan komprehensif ini, yang akan membimbing Anda melalui perjalanan bermakna dalam Kuliah Kerja Nyata. Tahap awal yang sangat kami sarankan adalah membaca dan mengunduh berkas yang telah kami sediakan di sini. Berkas ini berfungsi sebagai kunci untuk memahami seluk-beluk pelaksanaan KKN dengan lebih baik. Kami telah menyusun panduan langkah demi langkah, mulai dari perencanaan hingga pelaksanaan proyek, serta panduan bagaimana menjalin interaksi yang positif dengan komunitas yang Anda layani. Jangan lewatkan kesempatan berharga ini untuk memberikan dampak positif pada lingkungan melalui KKN Anda. Selamat membaca dan melangkah dalam pengalaman KKN yang penuh inspirasi!</p>
            </div>
          </div>
        </section>

      </section>
      <Footer />
    </Suspense>
  )
}

export default CareerCenter