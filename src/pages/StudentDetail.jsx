import React, { useState, useEffect, lazy, Suspense } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Navbar = lazy(() => import('../components/Navbar'))
const Footer = lazy(() => import('../components/Footer'))

import AOS from 'aos'
import 'aos/dist/aos.css'

const renderLoader = () =>
<div role="status" className='flex justify-center items-center h-screen'>
    <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>;

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
    <Suspense fallback={renderLoader()}>
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
    </Suspense>
  )
}

export default StudentDetail