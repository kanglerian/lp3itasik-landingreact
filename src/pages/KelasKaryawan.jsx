import React, { useState, useEffect, lazy, Suspense } from 'react'
import axios from 'axios'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import imageKaryawan from '../assets/img/image.png'

import onlineTeach from '../assets/icons/online-training.png'
import offlineTeach from '../assets/icons/lecture.png'

import documentIcon from '../assets/icons/documents.png'
import budgetIcon from '../assets/icons/budget.png'


import logoLP3I from '../assets/lp3i.svg'

const NavbarKaryawan = lazy(() => import('../components/NavbarKaryawan'))
const FlyerKaryawan = lazy(() => import('../components/FlyerKaryawan'))
const Whatsapp = lazy(() => import('../components/Whatsapp'))

const renderLoader = () =>
  <div role="status" className='flex justify-center items-center h-screen'>
    <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>;

const CareerCenter = () => {
  const currentLanguage = localStorage.getItem('language') || 'id';
  const [tasikPrograms, setTasik] = useState([]);

  const [documentations, setDocumentation] = useState([])
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

  const getPrograms = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/programs`)
      .then((response) => {
        let programs = response.data;
        let foundTasik = programs.filter(program => program.campus == 'Politeknik LP3I Kampus Tasikmalaya' && program.status == "1");
        setTasik(foundTasik);
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

  const listDocumentation = documentations.map((doc, i) =>
    <div className="item" key={i} data-aos-delay={i * 5}>
      <img loading="lazy" src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + doc.image} alt={doc.title}
        className="rounded-lg" />
    </div>
  )

  useEffect(() => {
    getPrograms();
    getDocumentation();
  }, []);

  return (
    <Suspense fallback={renderLoader()}>
      <Whatsapp />
      <FlyerKaryawan />
      <NavbarKaryawan />
      <style dangerouslySetInnerHTML={{ __html: "\n\t#media p a {\n\t\tcolor: #0284c7;\n\t\ttext-decoration: underline;\n\t}\n" }} />

      <section className="flex flex-col md:flex-row items-center justify-between bg-white container mx-auto px-4 py-12 gap-5">
        <div className="w-full md:w-3/6">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">LP3I: Kuliah Sambil Bekerja, Sukses Karir Terjamin!</h1>
          <p className="mb-8 text-base md:text-lg font-normal text-gray-500">LP3I hadir dengan kuliah mendukungmu untuk kuliah sambil bekerja, karir unggul, impian terwujud. Bergabunglah dan raih kesuksesan bersama kami sekarang!</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a href="https://api.whatsapp.com/send?phone=6281313608558&text=Hallo%20Kak,%20Boleh%20minta%20informasi%20Pendaftaran%20Mahasiswa%20Politeknik%20LP3I%20Kampus%20Tasikmalaya%3F" className="inline-flex justify-center items-center py-3 px-5 text-sm md:text-base font-medium text-center text-white rounded-lg bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 ">
              Hubungi Kami!
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/6">
          <img loading="lazy" src={imageKaryawan} alt="" />
        </div>
      </section>
      {/* 
      <section id='time' className='container mx-auto px-4 py-3'>
        <div className='flex flex-col md:flex-row bg-slate-800 rounded-xl p-10 gap-5'>
          <div className='w-full md:w-1/3 text-white space-y-2'>
            <h2 className='font-bold text-xl'>Pilihan Waktu Kuliah</h2>
            <p className='text-sm font-light text-slate-200'>Pilih waktu kuliah sesuai jadwal Anda dengan fleksibilitas dan kemudahan dalam mengatur waktu belajar.</p>
          </div>
          <div className='flex flex-col md:flex-row w-full md:w-2/3 text-white gap-5 md:gap-3'>
            <div className='w-full md:w-1/2 flex gap-2'>
              <div className='w-1/3 flex flex-col items-center'>
                <img loading="lazy" src={onlineTeach} alt="" className='w-16 h-16' />
                <span className='text-xs text-center bg-emerald-500 px-2 py-0.5 rounded'>Online</span>
              </div>
              <div className='w-full md:w-auto space-y-1'>
                <h3>Kelas Online</h3>
                <p className='text-sm font-light text-slate-200'>Kelas Online memudahkan belajar dari mana saja dengan fleksibilitas waktu.</p>
              </div>
            </div>
            <div className='w-full md:w-1/2 flex gap-2'>
              <div className='w-1/3 flex flex-col items-center'>
                <img loading="lazy" src={offlineTeach} alt="" className='w-16 h-16' />
                <span className='text-xs text-center bg-red-500 px-2 py-0.5 rounded'>Offline</span>
              </div>
              <div className='w-full md:w-auto space-y-1'>
                <h3>Kelas Offline</h3>
                <p className='text-sm font-light text-slate-200'>Kelas Offline, interaksi langsung, pembelajaran praktis, lingkungan belajar nyaman.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
       */}

      <section id='why' className='container mx-auto px-4 py-10'>
        <div className='text-center space-y-1'>
          <h2 className='font-bold text-xl md:text-2xl text-gray-900'>Kenapa Harus LP3I?</h2>
          <p className='text-sm md:text-base font-normal text-gray-700'>Berikut ini adalah beberapa alasan kenapa harus LP3I.</p>
        </div>
        <div className='flex flex-col md:flex-row mt-10 gap-5'>
          <div className='w-full md:w-1/3 flex flex-col items-center text-center'>
            <img loading="lazy" src={onlineTeach} alt="" className='w-14 h-14 mb-2' />
            <h4 className='text-lg font-bold text-gray-800'>Bisa Sambil Bekerja</h4>
            <p className='text-sm font-light text-gray-700'>Nikmati Waktu kuliah sambil bekerja, atur belajar sesuai kebutuhan Anda.</p>
          </div>
          <div className='w-full md:w-1/3 flex flex-col items-center text-center'>
            <img loading="lazy" src={budgetIcon} alt="" className='w-14 h-14 mb-2' />
            <h4 className='text-lg font-bold text-gray-800'>Biaya Terjangkau</h4>
            <p className='text-sm font-light text-gray-700'>Hanya Rp600.000/bulan. Akses pendidikan berkualitas tanpa beban finansial berlebih.</p>
          </div>
          <div className='w-full md:w-1/3 flex flex-col items-center text-center'>
            <img loading="lazy" src={documentIcon} alt="" className='w-14 h-14 mb-2' />
            <h4 className='text-lg font-bold text-gray-800'>Kuota Terbatas</h4>
            <p className='text-sm font-light text-gray-700'>Kuota Terbatas, hanya 30 orang. Segera daftar untuk mendapatkan kursi!</p>
          </div>
        </div>
      </section>

      <section id="programs" className='bg-lp3i-500 px-4 py-10'>
        <div className='container mx-auto text-white'>
          {tasikPrograms.length > 0 &&
            <>
              <div className='text-center space-y-1'>
                <h2 className='font-bold text-xl md:text-2xl'>Program <span className="text-merah-100">Pendidikan Diploma 3</span></h2>
                <p className='text-sm md:text-base font-normal'>Berikut adalah daftar program studi jenjang D3 di Politeknik LP3I Kampus Tasikmalaya.</p>
              </div>
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
        </div>
      </section>

      <div id='docs' className="container mx-auto px-4 py-8">
        <div className='space-y-6'>
          <div className='text-center space-y-1'>
            <h2 className='font-bold text-xl md:text-2xl text-gray-900'>Dokumentasi Perkuliahan</h2>
            <p className='text-sm md:text-base font-normal text-gray-700'>Kumpulan foto-foto mahasiswa dalam perjalanan akademik.</p>
          </div>
          {docLoaded ? (
            <div className="flex justify-center">
              <OwlCarousel className='owl-theme' {...options} loop margin={10} autoplay dots={true}>
                {listDocumentation}
              </OwlCarousel>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-full md:w-1/3 flex items-center justify-center h-56 md:h-68 bg-gray-100 rounded-lg animate-pulse">
                <i className="fa-regular fa-images fa-3x text-gray-200"></i>
              </div>
            </div>
          )}
        </div>
      </div>

      <hr />

      <section className='container mx-auto px-4 py-8'>
        <div className='text-center space-y-1'>
          <h2 className='font-bold text-xl md:text-2xl text-gray-900'>PROMO PENDAFTARAN!!</h2>
          <p className='text-sm md:text-base font-normal text-gray-700'>Daftar sekarang, kuota terbatas! Amankan tempat Anda untuk kesempatan berharga ini sebelum habis!</p>
        </div>
        <div className='mt-6 text-center'>
          <div className='space-y-1 mb-3'>
            <h5 className='text-lg md:text-2xl line-through text-gray-800'>Rp350.000</h5>
            <h3 className='text-2xl md:text-5xl font-bold text-red-500'>Rp250.000</h3>
          </div>
          <a href='https://api.whatsapp.com/send?phone=6281313608558&text=Hallo%20Kak,%20Boleh%20minta%20informasi%20Pendaftaran%20Mahasiswa%20Politeknik%20LP3I%20Kampus%20Tasikmalaya%3F' target='_blank' className='inline-block bg-green-500 px-8 py-2 rounded-lg text-white mt-3' rel="noreferrer"><i className="fa-brands fa-whatsapp mr-1" /> Daftar Sekarang</a>
        </div>
      </section>

      <hr />

      <footer className="mt-5 bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-10">
            <div className='space-y-4'>
              <div className='text-left space-y-1'>
                <h5 className="text-gray-700 font-bold text-xl">Syarat Pendaftaran</h5>
                <p className='text-sm font-normal text-gray-700'>Lengkapi dokumen dan persyaratan untuk proses pendaftaran.</p>
              </div>
              <ul className='space-y-2 text-sm text-gray-700'>
                <li><i className="fa-regular fa-circle-dot mr-1" /> Photocopy KTP</li>
                <li><i className="fa-regular fa-circle-dot mr-1" />Photocopy Ijazah</li>
                <li><i className="fa-regular fa-circle-dot mr-1" />Pas Photo 3x4</li>
                <li><i className="fa-regular fa-circle-dot mr-1" />Photocopy Akta Kelahiran</li>
                <li><i className="fa-regular fa-circle-dot mr-1" />Photocopy Kartu Keluarga</li>
                <li><i className="fa-regular fa-circle-dot mr-1" />Materai 10.000</li>
              </ul>
            </div>
            <div className='flex flex-col md:items-end md:text-right'>
              <img loading="lazy" src={logoLP3I} alt="Politeknik LP3I Kampus Tasikmalaya" className="w-52" />
              <a role="button" target="_blank" href="https://goo.gl/maps/1dxJCzGBDvgNje8cA" className="block text-sm text-gray-700 my-3" rel="noreferrer">Jl. Ir. H. Juanda No.106, Panglayungan, Kec. Cipedes<br />Kota Tasikmalaya, Jawa Barat 46151</a>
              <div className="flex gap-4 justify-start text-gray-600">
                <a target="_blank" href="https://www.facebook.com/lp3itasik" rel="noreferrer"><i className="fa-brands fa-facebook-f" /></a>
                <a target="_blank" href="https://www.instagram.com/lp3i.tasik/" rel="noreferrer"><i className="fa-brands fa-instagram" /></a>
                <a target="_blank" href="https://www.youtube.com/channel/UCX7vz8wEj4lHlVSbpYwC_nQ" rel="noreferrer"><i className="fa-brands fa-youtube" /></a>
                <a target="_blank" href="https://www.tiktok.com/@lp3i.tasik" rel="noreferrer"><i className="fa-brands fa-tiktok" /></a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="bg-white text-gray-400 text-xs text-center py-3">
          <p>Copyright © 2023 Politeknik LP3I Kampus Tasikmalaya</p>
        </div>
      </footer>
    </Suspense>
  )
}

export default CareerCenter