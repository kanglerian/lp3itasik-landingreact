import React, { useState, useEffect } from 'react'
import IDFlag from '../assets/flag/id.gif'
import ENFlag from '../assets/flag/en.gif'
import lp3i from '../assets/lp3i.svg'

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const [isLanguage, setIsLanguage] = useState(() => {
    const language = localStorage.getItem('language');
    return language;
  })

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  useEffect(() => {
    localStorage.setItem('language', isLanguage)
  }, [isLanguage]);

  const idLanguage = () => {
    setIsLanguage(true);
  };

  const enLanguage = () => {
    setIsLanguage(false);
  };

  const getCoba = () => {
    const isi = localStorage.getItem('language');
    console.log(isi);
  }

  return (
    <>
      <div>
        <nav onClick={getCoba} className="bg-cyan-700 text-white text-xs py-3">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <button id="dropdownNavbarLink" data-dropdown-toggle="language" className="flex items-center justify-start w-auto py-2 text-white rounded">
                  <img src={IDFlag} alt="Indonesia" className="inline-block w-6 rounded mr-2" />Indonesia
                  <i className="ml-2 fa-solid fa-chevron-down" /></button>
                <div id="language" className="z-10 hidden font-normal bg-white rounded-lg shadow w-44">
                  <ul className="py-3 text-xs text-gray-900 px-4 space-y-2">
                    <li>
                      <button onClick={enLanguage}><img src={ENFlag} alt="Inggris" className="inline-block w-10 rounded mr-2 shadow" />English</button>
                    </li>
                    <li>
                      <button onClick={idLanguage}><img src={IDFlag} alt="Indonesia" className="inline-block w-10 rounded mr-2 shadow" />Indonesia</button>
                    </li>
                  </ul>
                </div>
                |
                <span className="hidden md:inline"><i className="fa-solid fa-phone" /> (0265)311766</span>
                <a href="https://bit.ly/InfoPMBLP3ITasik" target="_blank"><i className="fa-brands fa-whatsapp" /> 0813-1360-8558</a>
              </div>
              <div className="flex gap-3">
                <a href="#" className="hidden lg:inline">Career Center</a>
                <a href="https://brosur.politekniklp3i-tasikmalaya.ac.id/" target="_blank">Brosur Digital</a>
                <a href="https://virtualkampus.politekniklp3i-tasikmalaya.ac.id/" target="_blank" className=" md:inline">Virtual Kampus</a>
              </div>
            </div>
          </div>
        </nav>
        <header className="container mt-4 px-4 mx-auto text-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:flex-wrap">
            <div className="flex justify-between items-center">
              <span>
                <a href={`/`}><img src={lp3i} width="200px" alt="Politeknik LP3I Kampus Tasikmalaya" /></a>
              </span>
              <span className="text-3xl cursor-pointer mx-2 md:hidden block">
                <button id="navbarMenu" onClick={toggleNavbar} type="button" className="p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                  <i className="fa-solid fa-bars" />
                </button>
              </span>
            </div>
            {isNavbarOpen && (
              <div className="w-full md:w-auto transition duration-200 ease-in-out" data-attribute={0} id="navbar-dropdown">
                <ul className="flex flex-col mt-4 p-3 border border-gray-100 rounded-lg md:flex-row md:items-center md:flex-wrap md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                  <li>
                    {isLanguage && (
                      <a href={`/`} className="block md:inline py-2 pr-4 text-gray-900 md:hover:text-cyan-700 md:p-0">
                        Beranda
                      </a>
                    )}
                  </li>
                  <li>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="about" className="flex items-center justify-between w-full py-2 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-800 md:p-0 md:w-auto">
                      Tentang Kampus
                      <i className="ml-2 fa-solid fa-chevron-down" /></button>
                    {/* Dropdown menu */}
                    <div id="about" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                      <ul className="py-2 text-sm text-gray-900">
                        <li>
                          <a href={`/about`} className="block px-4 py-2 hover:bg-gray-100">
                            Apa itu LP3I?
                          </a>
                        </li>
                        <li>
                          <a href={`/branding`} className="block px-4 py-2 hover:bg-gray-100">
                            Logo dan Warna
                          </a>
                        </li>
                        <li>
                          <a href={`/organization`} className="block px-4 py-2 hover:bg-gray-100">
                            Struktur Organisasi
                          </a>
                        </li>
                        <li>
                          <a href={`/facilities`} className="block px-4 py-2 hover:bg-gray-100">
                            Fasilitas Kampus
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href={`/programs`} className="block md:inline py-2 pr-4 text-gray-900 md:hover:text-cyan-800 md:p-0">
                      Program Studi
                    </a>
                  </li>
                  <li>
                    <a href={`/students`} className="block md:inline py-2 pr-4 text-gray-900 md:hover:text-cyan-800 md:p-0">
                      Organisasi Mahasiswa
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block md:inline py-2 pr-4 text-gray-900  md:hover:text-cyan-800 md:p-0">
                      Blog
                    </a>
                  </li>
                  <li>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="service" className="flex items-center justify-between w-full py-2 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 md:w-auto">
                      Layanan
                      <i className="ml-2 fa-solid fa-chevron-down" /></button>
                    {/* Dropdown menu */}
                    <div id="service" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                      <ul className="py-2 text-sm text-gray-900">
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                            Akademik
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                            SIAKAD
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                            LMS
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                            Career Center
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <div className="py-2 md:p-0">
                    <a role="button" target="_blank" href="https://pmb.politekniklp3i-tasikmalaya.ac.id/" className="transition ease-in-out duration-300 block md:inline-block py-2 px-4 text-white bg-cyan-700 hover:bg-cyan-800 rounded"><i className="fa-solid fa-headset mr-1" /> PMB Online</a>
                  </div>
                </ul>
              </div>
            )}
          </div>
        </header>

      </div>
    </>
  )
}

export default Navbar