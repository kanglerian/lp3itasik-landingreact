import React, { useState } from 'react'
import lp3i from '../assets/lp3i.svg'

import LanguageSwitcher from '../setting/LanguageSwitcher'

const Navbar = () => {
  const currentLanguage = localStorage.getItem('language') || 'id';

  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const [showAbout, setAbout] = useState(false);
  const [showService, setService] = useState(false);

  const toggleAbout = () => {
    setAbout(!showAbout)
  }

  const toggleService = () => {
    setService(!showService)
  }

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <>
      <div>
        <nav className="bg-cyan-700 text-white text-xs py-3">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <LanguageSwitcher />
                <span className="hidden md:inline"><i className="fa-solid fa-phone" /> (0265)311766</span>
                <a href="https://bit.ly/InfoPMBLP3ITasik" target="_blank"><i className="fa-brands fa-whatsapp" /> 0813-1360-8558</a>
              </div>
              <div className="flex gap-3">
                <a href="https://brosur.politekniklp3i-tasikmalaya.ac.id/" target="_blank">{currentLanguage == 'en' ? 'Digital Brochure' : 'Brosur Digital'}</a>
                <a href="https://virtualkampus.politekniklp3i-tasikmalaya.ac.id/" target="_blank" className=" md:inline">{currentLanguage == 'en' ? 'Virtual Kampus' : 'Virtual Campus'}</a>
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
                    <a href={`/`} className="block md:inline py-2 px-4 text-gray-900 md:hover:text-cyan-700 md:p-0">
                      {currentLanguage == 'en' ? 'Home' : 'Beranda'}
                    </a>
                  </li>
                  <li>
                    <button onClick={toggleAbout} className="flex relative items-center justify-between w-full py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-800 md:p-0 md:w-auto">
                      {currentLanguage == 'en' ? 'About Campus' : 'Tentang Kampus'}
                      {showAbout ? (
                        <i className="ml-2 fa-solid fa-chevron-up" />
                      ) : (
                        <i className="ml-2 fa-solid fa-chevron-down" />
                      )}
                    </button>
                    {showAbout &&
                      <div className="z-10 absolute mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                        <ul className="py-2 text-sm text-gray-900">
                          <li>
                            <a href={`/about`} className="block px-4 py-2 hover:bg-gray-100">
                              {currentLanguage == 'en' ? 'What is LP3I?' : 'Apa itu LP3I?'}
                            </a>
                          </li>
                          <li>
                            <a href={`/branding`} className="block px-4 py-2 hover:bg-gray-100">
                              {currentLanguage == 'en' ? 'Logos and Colors' : 'Logo dan Warna'}
                            </a>
                          </li>
                          <li>
                            <a href={`/organization`} className="block px-4 py-2 hover:bg-gray-100">
                              {currentLanguage == 'en' ? 'Organizational Structure' : 'Struktur Organisasi'}
                            </a>
                          </li>
                          <li>
                            <a href={`/facilities`} className="block px-4 py-2 hover:bg-gray-100">
                              {currentLanguage == 'en' ? 'Campus Facilities' : 'Fasilitas Kampus'}
                            </a>
                          </li>
                        </ul>
                      </div>
                    }
                  </li>
                  <li>
                    <a href={`/programs`} className="block md:inline py-2 px-4 text-gray-900 md:hover:text-cyan-800 md:p-0">
                      {currentLanguage == 'en' ? 'Study program' : 'Program Studi'}
                    </a>
                  </li>
                  <li>
                    <a href={`/students`} className="block md:inline py-2 px-4 text-gray-900 md:hover:text-cyan-800 md:p-0">
                      {currentLanguage == 'en' ? 'Student Organizations' : 'Organisasi Mahasiswa'}
                    </a>
                  </li>
                  <li>
                    <a href={`/career`} className="block md:inline py-2 px-4 text-gray-900 md:hover:text-cyan-800 md:p-0">
                      {currentLanguage == 'en' ? 'Career Center' : 'Pusat Karir'}
                    </a>
                  </li>
                  <li>
                    <button onClick={toggleService} className="flex items-center justify-between w-full py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 md:w-auto">
                      {currentLanguage == 'en' ? 'Service' : 'Layanan'}
                      {showService ? (
                        <i className="ml-2 fa-solid fa-chevron-up" />
                      ) : (
                        <i className="ml-2 fa-solid fa-chevron-down" />
                      )}
                    </button>
                    {showService &&
                      <div className="z-10 absolute mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                        <ul className="py-2 text-sm text-gray-900">
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                              {currentLanguage == 'en' ? 'Academic' : 'Akademik'}
                            </a>
                          </li>
                          <li>
                            <a href="https://siakad.plb.ac.id/" className="block px-4 py-2 hover:bg-gray-100">
                              SIAKAD
                            </a>
                          </li>
                          <li>
                            <a href="https://lms.plb.ac.id/" className="block px-4 py-2 hover:bg-gray-100">
                              LMS
                            </a>
                          </li>
                          <li>
                            <a href="https://karyawan.politekniklp3i-tasikmalaya.ac.id/" className="block px-4 py-2 hover:bg-gray-100">
                              {currentLanguage == 'en' ? 'Employee class' : 'Kelas karyawan'}
                            </a>
                          </li>
                        </ul>
                      </div>
                    }
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