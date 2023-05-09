import React from 'react'

const Link = () => {
  return (
    <section className="mt-3 md:mt-5">
      <div className="container mx-auto text-sm md:text-base px-4">
        <div className="flex flex-col md:flex-row gap-2	md:gap-4 justify-center">
          <a role="button" href="https://api.whatsapp.com/send?phone=6281313608558&text=Hallo%20Kak,%20Boleh%20minta%20informasi%20Pendaftaran%20Mahasiswa%20Politeknik%20LP3I%20Kampus%20Tasikmalaya%3F" target="_blank" className="transition ease-in-out duration-300 inline py-2 px-8 text-center text-white bg-cyan-700 hover:bg-cyan-800 rounded"><i className="fa-solid fa-circle-info mr-1" />
            Informasi Pendaftaran
          </a>
          <a role="button" href="https://brosur.politekniklp3i-tasikmalaya.ac.id/" target="_blank" className="transition text-center ease-in-out duration-300 inline py-2 px-8 text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-700 rounded"><i className="fa-solid fa-book-open mr-1" />
            Brosur Digital
          </a>
          <a href="https://virtualkampus.politekniklp3i-tasikmalaya.ac.id/" role="button" target="_blank" className="transition ease-in-out duration-300 inline py-2 px-8 text-cyan-700 text-center hover:text-white border border-cyan-700 hover:bg-cyan-700 rounded"><i className="fa-solid fa-map-location-dot mr-1" />
            Virtual Kampus
          </a>
          <a href="https://schoolarship.politekniklp3i-tasikmalaya.ac.id/" role="button" target="_blank" className="transition ease-in-out duration-300 inline py-2 px-8 text-cyan-700 text-center hover:text-white border border-cyan-700 hover:bg-cyan-700 rounded"><i className="fa-solid fa-qrcode mr-1" />
            Cek Beasiswa
          </a>
        </div>
      </div>
    </section>
  )
}

export default Link