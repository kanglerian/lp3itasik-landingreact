import React from 'react'

const Type = () => {
  return (
    <>
      <section className="my-10">
        <div className="container mx-auto text-sm px-4">
          <header className='text-center space-y-1 mb-4'>
            <h1 className='text-2xl font-bold text-gray-900'>Informasi Penerimaan Mahasiswa Baru</h1>
            <p className='text-gray-700' data-aos-delay="100">Politeknik LP3I Kampus Tasikmalaya juga menerima mahasiswa:</p>
          </header>
          <div className="flex flex-wrap justify-center items-center">
            <div className='w-1/2 md:w-1/4 p-5' data-aos-delay="200">
              <div className='bg-white border border-gray-100 rounded-xl p-5'>
                <div className='space-y-5'>
                  <div className='flex flex-col items-center gap-3'>
                    <i class="fa-solid fa-repeat fa-2x text-gray-900"></i>
                    <h3 className='font-bold text-2xl text-gray-900'>Transfer Kredit</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-1/2 md:w-1/4 p-5' data-aos-delay="200">
              <div className='bg-white border border-gray-100 rounded-xl p-5'>
                <div className='space-y-5'>
                  <div className='flex flex-col items-center gap-3'>
                    <i class="fa-solid fa-wheelchair fa-2x text-gray-900"></i>
                    <h3 className='font-bold text-2xl text-gray-900'>Disabilitas</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-1/2 md:w-1/4 p-5' data-aos-delay="200">
              <div className='bg-white border border-gray-100 rounded-xl p-5'>
                <div className='space-y-5'>
                  <div className='flex flex-col items-center gap-3'>
                    <i class="fa-regular fa-building fa-2x text-gray-900"></i>
                    <h3 className='font-bold text-2xl text-gray-900'>Mahasiswa Pindahan</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-1/2 md:w-1/4 p-5' data-aos-delay="200">
              <div className='bg-white border border-gray-100 rounded-xl p-5'>
                <div className='space-y-5'>
                  <div className='flex flex-col items-center gap-3'>
                    <i class="fa-solid fa-earth-asia fa-2x text-gray-900"></i>
                    <h3 className='font-bold text-2xl text-gray-900'>Warga Negara Asing</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="my-10">
        <div className="container mx-auto text-sm px-4">
          <header className='text-center space-y-1 mb-4'>
            <h1 className='text-2xl font-bold text-gray-900'>Program Perkuliahan</h1>
            <p className='text-gray-700' data-aos-delay="100">Berikut ini adalah program perkuliahan yang dibuka di Politeknik LP3I Kampus Tasikmalaya.</p>
          </header>
          <div className="flex flex-wrap justify-center items-center">
            <div className='w-full md:w-1/2 p-5' data-aos-delay="200">
              <div className='bg-white border border-gray-100 rounded-xl p-5'>
                <div className='space-y-5'>
                  <div className='flex items-center gap-3'>
                    <i class="fa-solid fa-cloud-sun fa-2x text-gray-900"></i>
                    <h3 className='font-bold text-2xl text-gray-900'>Reguler Pagi</h3>
                  </div>
                  <p className='text-sm text-gray-700'>Jadwal kuliah yang dimulai dari hari Senin sampai dengan Jum'at dari jam 08.00 WIB s.d 16.00 WIB. Aktif di organisasi membuatmu menjadi lebih banyak relasi!</p>
                  <a href="https://api.whatsapp.com/send?phone=6281313608558" target='_blank' className='inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md'>Daftar sekarang!</a>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 p-5' data-aos-delay="300">
              <div className='flex justify-center gap-3 bg-white border border-gray-100 rounded-xl p-5'>
                <div className='space-y-5'>
                  <div className='flex items-center gap-3'>
                    <i class="fa-solid fa-cloud-moon fa-2x text-gray-900"></i>
                    <h3 className='font-bold text-2xl text-gray-900'>Reguler Sore</h3>
                  </div>
                  <p className='text-sm text-gray-700'>Jadwal kuliah yang dimulai dari hari Senin sampai dengan Jum'at dari jam 16.00 WIB s.d 20.30 WIB. Cocok buat kamu yang ingin kuliah sambil bekerja.</p>
                  <a href="https://api.whatsapp.com/send?phone=6281313608558" target='_blank' className='inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md'>Daftar sekarang!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Type