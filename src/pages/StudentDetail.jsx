import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import emptyAnimate from '../assets/empty.json'

const StudentDetail = () => {
  const { uuid } = useParams();

  const [student, setStudent] = useState({})

  const getStudent = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/ormawas/${uuid}`)
      .then((response) => {
        console.log('cek')
        setStudent(response.data)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const hiddenSection = (content) => {
    let data = content.target.dataset.name;
    switch (data) {
      case 'struktur':
        $('#struktur').show();
        $('#program').hide();
        $('#dokumentasi').hide();
        break;
      case 'program':
        $('#struktur').hide();
        $('#program').show();
        $('#dokumentasi').hide();
        break;
      case 'dokumentasi':
        $('#struktur').hide();
        $('#program').hide();
        $('#dokumentasi').show();
        break;
      default:
        $('#struktur').hide();
    }
  }

  useEffect(() => {
    getStudent()
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
  }, []);

  return (
    <>
      <Navbar />
      <style dangerouslySetInnerHTML={{ __html: "\n\t#media p a {\n\t\tcolor: #0284c7;\n\t\ttext-decoration: underline;\n\t}\n" }} />
      <section className="my-8">
        <div className="container mx-auto px-4">
          <header data-aos="fade-up">
            <div className="group relative">
              <img className="w-full object-cover rounded-xl h-80" alt={student.title} src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + student.image} />
              <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-lp3i-200 rounded-xl opacity-90 h-full">
                <div className="space-y-3 text-center text-white px-3">
                  <h1 className="text-4xl">{student.title}</h1>
                  <span className="inline-block rounded-lg text-sm bg-lp3i-100 px-4 py-2">{student.description}</span>
                </div>
              </div>
            </div>
          </header>
          <nav className="my-5 bg-slate-100 border border-slate-200 py-3 rounded-xl" data-aos="fade-up" data-aos-delay="100">
            <ul className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 text-sm text-center px-4">
              <li onClick={hiddenSection} data-name="struktur" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">Struktur Organisasi</li>
              <li onClick={hiddenSection} data-name="program" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">Program Kerja</li>
              <li onClick={hiddenSection} data-name="dokumentasi" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">Dokumentasi</li>
            </ul>
          </nav>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default StudentDetail