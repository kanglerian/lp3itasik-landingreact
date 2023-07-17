import React, { useState, useEffect, Suspense } from 'react'
import lp3i from '../assets/lp3i-white.svg'
import complaintCover from '../assets/complaint-cover.jpg'
import axios from 'axios'

import AOS from 'aos'
import 'aos/dist/aos.css'

const renderLoader = () =>
  <div role="status" className='flex justify-center items-center h-screen'>
    <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>;

const Program = () => {

  const currentLanguage = localStorage.getItem('language') || 'id';

  const [nim, setNim] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState(0);

  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleCategories = async (id) => {
    setCategories(id);
  }

  const handleWhatsapp = async () => {
    console.log(categories);
    await axios.post(`https://api.politekniklp3i-tasikmalaya.ac.id/complaint/report`, {
      target: '120363144296540927@g.us',
      nim: nim,
      name: name,
      title: title,
      categories: categories,
      message: message,
    })
      .then((res) => {
        setNim('');
        setName('');
        setTitle('');
        setMessage('');
        setSuccess(true);
        setFailed(false);
      })
      .catch((err) => {
        setFailed(true);
        setSuccess(false);
      });
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
  }, []);

  return (
    <Suspense fallback={renderLoader()}>
      <section className='bg-[#fcfcfc] static'>
        <header style={{ backgroundImage: `url(${complaintCover})`, backgroundSize: 'cover' }} className="py-10 md:pt-24 md:pb-14 px-4">
          <div className='flex flex-col justify-center items-center text-center space-y-5'>
            <a href={'/'}><img src={lp3i} alt="Politeknik LP3I Kampus Tasikmalaya" className='w-44' /></a>
            <div className='space-y-3'>
              <h1 className="text-3xl font-bold text-white">
                {currentLanguage == 'en' ? "Criticism and Suggestions" : "Kritik dan Saran"}
              </h1>
              <p className="text-base text-white">Silahkan berikan masukan dan saran anda dengan jelas.</p>
            </div>
          </div>
        </header>
        <section>
          <div className='max-w-md mx-auto text-base py-10 px-4'>
            {
              success && (
                <div className='bg-emerald-500 py-3 px-3 text-white rounded-lg mb-6'>
                  <h2 className='text-sm'><i className="fa-solid fa-circle-check"></i> Pengaduan terkirim!</h2>
                </div>
              )
            }
            {
              failed && (
                <div className='bg-red-500 py-3 px-3 text-white rounded-lg mb-6'>
                  <h2 className='text-sm'><i className="fa-solid fa-circle-xmark"></i> Mohon maaf Server sedang Maintenance.</h2>
                </div>
              )
            }

            <ul className="flex flex-wrap text-sm font-medium justify-center text-center text-gray-500 mb-6">
              <li className="mr-2">
                <button onClick={() => handleCategories(0)} className={`inline-block px-4 py-3 rounded-lg ${categories === 0 ? 'bg-blue-600 text-white' : 'hover:text-gray-900 hover:bg-gray-100'}`}>Mahasiswa</button>
              </li>
              <li className="mr-2">
                <button onClick={() => handleCategories(1)} className={`inline-block px-4 py-3 rounded-lg ${categories === 1 ? 'bg-blue-600 text-white' : 'hover:text-gray-900 hover:bg-gray-100'}`}>Alumni</button>
              </li>
              <li className="mr-2">
                <button onClick={() => handleCategories(2)} className={`inline-block px-4 py-3 rounded-lg ${categories === 2 ? 'bg-blue-600 text-white' : 'hover:text-gray-900 hover:bg-gray-100'}`}>Dosen</button>
              </li>
              <li className="mr-2">
                <button onClick={() => handleCategories(3)} className={`inline-block px-4 py-3 rounded-lg ${categories === 3 ? 'bg-blue-600 text-white' : 'hover:text-gray-900 hover:bg-gray-100'}`}>Umum</button>
              </li>
            </ul>

            <div>
              <div className='space-y-4' id='mahasiswa'>
                {
                  categories == 2 &&
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Nama Dosen</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Tulis nama anda disini disini..." required />
                  </div>
                }
                {
                  categories == 3 &&
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Nama Lengkap</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Tulis nama anda disini disini..." required />
                  </div>
                }
                {
                  categories != 2 && categories != 3 && 
                    <>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900">Tuliskan NIM</label>
                      <input type="text" value={nim} onChange={(e) => setNim(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Tulis nomor induk mahasiswa disini..." required />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900">Judul Masukan</label>
                      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Tulis judul masukan disini..." required />
                    </div>
                  </>
                  
                }
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Isi Masukan dan Solusi</label>
                  <textarea onChange={(e) => setMessage(e.target.value)} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis isi masukan dan solusi anda disini..." value={message} />
                </div>
              </div>
              <button onClick={handleWhatsapp} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center mt-3"><i className="fa-solid fa-paper-plane"></i> Kirim sekarang!</button>
            </div>

          </div>
        </section>
        <footer className='container mx-auto pb-3 px-4'>
          <p className='text-xs text-center text-gray-800'>Kami berkomitmen untuk melindungi kerahasiaan data Anda dan memastikan bahwa informasi yang Anda sampaikan akan ditangani dengan penuh keamanan.<br />Anda dapat memiliki keyakinan bahwa laporan Anda akan diperlakukan secara rahasia dan sesuai dengan ketentuan yang berlaku.<br />
            Terima kasih atas kepercayaan Anda dalam menggunakan layanan kami. Kami siap untuk melayani Anda dan menangani setiap pengaduan atau pertanyaan yang Anda miliki.</p>
          <hr className='my-2' />
          <div className="bg-white text-gray-400 text-xs text-center">
            <p>Copyright © 2023 Politeknik LP3I Kampus Tasikmalaya</p>
          </div>
        </footer>
      </section>
    </Suspense>
  )
}

export default Program