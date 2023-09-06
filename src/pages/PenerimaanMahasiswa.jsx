import React, { useEffect } from 'react'
import Logo from '../assets/lp3i.svg'
import Lottie from 'lottie-react'

import LoadingAnimation from '../assets/animations/loading.json'

const PenerimaanMahasiswa = () => {
  let phoneNUmber = '6281313608558';
  let text = "Halo, saya ingin menanyakan tentang penerimaan mahasiswa baru. Apakah pendaftaran masih dibuka?"
  useEffect(() => {
    setTimeout(() => {
      window.location.href=`https://api.whatsapp.com/send/?phone=${phoneNUmber}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
    }, 2000);
  }, []);
  return (
    <div className='bg-gray-100'>
      <div className='container px-4 max-w-lg mx-auto flex flex-col h-screen justify-center items-center space-y-5'>
        <img src={Logo} width={300} alt="Logo Politeknik LP3I Kampus Tasikmalaya" loading='lazy' />
        <div className='flex flex-col justify-center items-center text-center' style={{ marginTop: '-50px' }}>
          <Lottie animationData={LoadingAnimation} style={{ width: 220, height: 220 }} loading='lazy' />
          <p className='text-base' style={{ marginTop: '-50px' }}>Hey! Kami sedang menyiapkan jalur langsung ke pesan WhatsApp. Kami akan segera menyambut Anda. Mohon tunggu sebentar!</p>
        </div>
      </div>
    </div>
  )
}

export default PenerimaanMahasiswa