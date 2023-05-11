import React, { useState, useEffect } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'

import emptyAnimate from '../assets/empty.json'

const Student = () => {

  const [students, setStudent] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const getStudents = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/ormawas`)
      .then((response) => {
        let students = response.data.filter(student => student.status == '1')
        setStudent(students)
        setIsLoaded(true)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const listStudents = students.map((student, i) =>
    <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="item w-96 h-auto border-8 border-white shadow rounded-lg ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-300">
      <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + student.image} alt={student.title} className="rounded-lg" />
      <div className="p-4">
        <h5 className="font-bold text-sm mb-1 text-left text-gray-700">{student.title}</h5>
        <p className="text-gray-600 text-xs">{student.description}</p>
        <div className="flex justify-between items-center mt-4">
          <a href={`/students/` + student.uuid} role="button" className="bg-cyan-600 text-white text-xs py-2 px-3 rounded-md">
            Lihat selengkapnya
          </a>
        </div>
      </div>
    </div>
  )

  useEffect(() => {
    getStudents()
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
      <section className="my-14">
        <div className="container mx-auto px-4">
          {isLoaded ? (
            <>
              {students.length > 0 ? (
                <div className="w-full flex justify-center flex-wrap gap-5">
                  {listStudents}
                </div>
              ) : (
                <div className="h-[500px] text-center flex justify-center items-center overflow-x-hidden">
                  <Player
                    autoplay
                    loop
                    src={emptyAnimate}
                    style={{ height: 500, width: 500 }}
                  >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                  </Player>
                </div>
              )}
            </>
          ) : (
            <div className="w-full flex justify-center flex-wrap gap-5">
              <div className="w-96 flex flex-col items-start justify-start bg-gray-100 rounded-lg animate-pulse p-5">
                <div className='w-full h-40 rounded-lg bg-gray-200'></div>
                <div className='w-5/6 h-5 rounded-lg bg-gray-200 mt-3'></div>
                <div className='w-3/6 h-7 rounded-lg bg-gray-200 mt-3'></div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Student