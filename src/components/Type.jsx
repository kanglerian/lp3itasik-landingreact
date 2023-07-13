import React from 'react'

const Type = () => {
  return (
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
                  <h3 className='font-bold text-2xl text-gray-900'>Kelas Reguler</h3>
                </div>
                <p className='text-sm text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ipsam fugit nesciunt excepturi, perferendis sapiente veritatis delectus ab at nostrum asperiores voluptate ut voluptates quaerat modi ducimus cum incidunt earum iusto. Harum magnam laborum delectus a facere eaque eos laboriosam dolor odio temporibus ut et dolore dignissimos quibusdam autem quae quidem officia voluptates amet.</p>
                <a href="https://api.whatsapp.com/send?phone=6281313608558" target='_blank' className='inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md'>Daftar sekarang!</a>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 p-5' data-aos-delay="300">
            <div className='flex justify-center gap-3 bg-white border border-gray-100 rounded-xl p-5'>
              <div className='space-y-5'>
                <div className='flex items-center gap-3'>
                  <i class="fa-solid fa-cloud-moon fa-2x text-gray-900"></i>
                  <h3 className='font-bold text-2xl text-gray-900'>Kelas Non Reguler / Malam</h3>
                </div>
                <p className='text-sm text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ipsam fugit nesciunt excepturi, perferendis sapiente veritatis delectus ab at nostrum asperiores voluptate ut voluptates quaerat modi ducimus cum incidunt earum iusto. Harum magnam laborum delectus a facere eaque eos laboriosam dolor odio temporibus ut et dolore dignissimos quibusdam autem quae quidem officia voluptates amet.</p>
                <a href="https://api.whatsapp.com/send?phone=6281313608558" target='_blank' className='inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md'>Daftar sekarang!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Type