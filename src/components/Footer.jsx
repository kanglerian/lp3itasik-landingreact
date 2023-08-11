import React from 'react'
import logoLP3I from '../assets/lp3i.svg'

const Footer = () => {
  const currentLanguage = localStorage.getItem('language') || 'id';
  return (
    <footer className="mt-5 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex md:flex-row flex-col justify-between gap-5">
          <div>
            <img src={logoLP3I} alt="Politeknik LP3I Kampus Tasikmalaya" className="w-52" />
            <a role="button" target="_blank" href="https://goo.gl/maps/1dxJCzGBDvgNje8cA" className="block text-sm text-gray-700 my-3" rel="noreferrer">Jl. Ir. H. Juanda No.106, Panglayungan, Kec. Cipedes<br />Kota Tasikmalaya, Jawa Barat 46151</a>
            <div className="flex gap-4 justify-start text-gray-600">
              <a target="_blank" href="https://www.facebook.com/lp3itasik" rel="noreferrer"><i className="fa-brands fa-facebook-f" /></a>
              <a target="_blank" href="https://www.instagram.com/lp3i.tasik/" rel="noreferrer"><i className="fa-brands fa-instagram" /></a>
              <a target="_blank" href="https://www.youtube.com/channel/UCX7vz8wEj4lHlVSbpYwC_nQ" rel="noreferrer"><i className="fa-brands fa-youtube" /></a>
              <a target="_blank" href="https://www.tiktok.com/@lp3i.tasik" rel="noreferrer"><i className="fa-brands fa-tiktok" /></a>
            </div>
          </div>
          <div>
            <h5 className="text-gray-700 font-bold text-left md:text-right text-xl">{currentLanguage == 'en' ? 'Service' : 'Layanan'}</h5>
            <ul className="text-gray-500 mt-4 text-xs text-left md:text-right space-y-2">
              <li><a href="#">{currentLanguage == 'en' ? 'Academic' : 'Akademik'}</a></li>
              <li><a href={`/career`}>Career Center</a></li>
              <li><a href={`/suggestion`}>{currentLanguage == 'en' ? 'Criticism and Suggestions' : 'Kritik dan Saran'}</a></li>
              <li><a href="https://siakad.plb.ac.id/">{currentLanguage == 'en' ? 'Academic System' : 'Sistem Akademik'} (SIAKAD)</a></li>
              <li><a href="https://lms.plb.ac.id/">Learning Management System (LMS)</a></li>
              <li><a href="https://schoolarship.politekniklp3i-tasikmalaya.ac.id/" role="button" target="_blank" rel="noreferrer">{currentLanguage == 'en' ? 'Schoolarship Check' : 'Cek Beasiswa'}</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-gray-700 font-bold text-left md:text-right text-xl">{currentLanguage == 'en' ? 'About Campus' : 'Tentang Kampus'}</h5>
            <ul className="text-gray-500 mt-4 text-xs text-left md:text-right space-y-2">
              <li><a href="https://brosur.politekniklp3i-tasikmalaya.ac.id/">{currentLanguage == 'en' ? 'Digital Brochure' : 'Brosur Digital'}</a></li>
              <li><a href={`/about`}>{currentLanguage == 'en' ? 'Get to know LP3I' : 'Mengenal LP3I'}</a></li>
              <li><a href={`/about`}>{currentLanguage == 'en' ? 'History of LP3I' : 'Sejarah LP3I'}</a></li>
              <li><a href={`/about`}>{currentLanguage == 'en' ? 'Vision & Mission' : 'Visi & Misi'}</a></li>
              <li><a href={`/about`}>{currentLanguage == 'en' ? 'Organizational Structure' : 'Struktur Organisasi'}</a></li>
              <li><a href={`/about`}>{currentLanguage == 'en' ? 'Campus Facilities' : 'Fasilitas Kampus'}</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-gray-700 font-bold text-left md:text-right text-xl">{currentLanguage == 'en' ? 'Student Organizations' : 'Organisasi Mahasiswa'}</h5>
            <ul className="text-gray-500 mt-4 text-xs text-left md:text-right space-y-2">
              <li><a href="#">Badan Eksekutif Mahasiswa</a></li>
              <li><a href="#">Himpunan Mahasiswa Manajemen Keuangan Perbankan</a></li>
              <li><a href="#">Himpunan Mahasiswa Manajemen Pemasaran</a></li>
              <li><a href="#">Unit Kegiatan Mahasiswa LP3I Sport Club</a></li>
              {/* <li><a href="#">Unit Kegiatan Mahasiswa LP3I Computer Club</a></li> */}
              <li><a href="#">Unit Kegiatan Mahasiswa LP3I Moslem Association</a></li>
              <li><a href="#">Unit Kegiatan Mahasiswa LP3I Innovation Art Club</a></li>
              <li><a href="#">Unit Kegiatan Mahasiswa Student English Association of LP3I</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="bg-white text-gray-400 text-xs text-center py-3">
        <p>Copyright © 2023 Politeknik LP3I Kampus Tasikmalaya</p>
      </div>
    </footer>

  )
}

export default Footer