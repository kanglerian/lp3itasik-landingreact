import React, { useState, useEffect } from 'react'
import lp3i from '../assets/lp3i.svg'
import axios from 'axios'

const NavbarKaryawan = () => {
  const currentLanguage = localStorage.getItem('language') || 'id';

  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const getPrograms = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/programs`)
      .then((response) => {
        let programs = response.data;
        let foundUtama = programs.filter(program => program.campus == 'Kampus Utama' && program.status == "1");
        let foundTasik = programs.filter(program => program.campus == 'Politeknik LP3I Kampus Tasikmalaya' && program.status == "1");
        let foundVokasi = programs.filter(program => program.campus == 'LP3I Tasikmalaya' && program.status == "1");
        setUtama(foundUtama);
        setTasik(foundTasik);
        setVokasi(foundVokasi);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  useEffect(() => {
    getPrograms();
  }, []);

  return (
    <>
      <div id='header'>
        <header className="container py-3 px-4 mx-auto text-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:flex-wrap">
            <div className="flex justify-between items-center">
              <span>
                <a href={`/`}><img loading="lazy" src={lp3i} width="200px" alt="Politeknik LP3I Kampus Tasikmalaya" /></a>
              </span>
              <span className="text-3xl cursor-pointer mx-2 md:hidden block">
                <button id="navbarMenu" onClick={toggleNavbar} type="button" className="p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                  <i className="fa-solid fa-bars" />
                </button>
              </span>
            </div>
            {isNavbarOpen && (
              <div className="w-full md:w-auto transition duration-200 ease-in-out" data-attribute={0} id="navbar-dropdown">
                <ul className="flex flex-col mt-3 p-3 border border-gray-100 rounded-lg md:flex-row md:items-center md:flex-wrap md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                  <li>
                    <a href={`/`} className="block md:inline py-2 px-4 text-gray-900 md:hover:text-cyan-700 md:p-0">
                      {currentLanguage == 'en' ? 'Home' : 'Beranda'}
                    </a>
                  </li>
                  <li>
                    <a href='#time' className="block md:inline py-2 px-4 text-gray-900 md:hover:text-cyan-700 md:p-0">
                      Waktu Kuliah
                    </a>
                  </li>
                  <li>
                    <a href='#why' className="block md:inline py-2 px-4 text-gray-900 md:hover:text-cyan-700 md:p-0">
                      Kenapa Harus LP3I?
                    </a>
                  </li>
                  <li>
                    <a href='#programs' className="block md:inline py-2 px-4 text-gray-900 md:hover:text-cyan-700 md:p-0">
                      Program Studi
                    </a>
                  </li>
                  <li>
                    <a href='#docs' className="block md:inline py-2 px-4 text-gray-900 md:hover:text-cyan-700 md:p-0">
                      Dokumentasi
                    </a>
                  </li>
                  <div className="py-2 md:p-0">
                    <a role="button" target="_blank" href="https://pmb.politekniklp3i-tasikmalaya.ac.id/" className="transition ease-in-out duration-300 block md:inline-block py-2 px-4 text-white bg-cyan-700 hover:bg-cyan-800 rounded" rel="noreferrer"><i className="fa-solid fa-headset mr-1" /> PMB Online</a>
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

export default NavbarKaryawan