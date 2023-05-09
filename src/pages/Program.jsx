import React, { useState, useEffect } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import emptyAnimate from '../assets/empty.json'

const Program = () => {

  const [programs, setProgram] = useState([])

  const getPrograms = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/programs`)
      .then((response) => {
        let programs = response.data.filter(program => program.status == '1')
        setProgram(programs)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const listPrograms = programs.map((program, i) =>
    <div key={i} className="item w-96 h-auto border-8 border-white shadow rounded-lg ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-300">
      <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + program.image} alt={program.title} className="rounded-lg" />
      <div className="p-4">
        <h5 className="font-bold text-sm mb-1 text-left text-gray-700">{program.level} {program.title}</h5>
        <span className="inline-block bg-gray-200 text-gray-500 text-xs py-1 px-3 rounded-md mb-3">{program.campus}</span>
        <div className="flex justify-between items-center mt-4">
          <a href={`/programs/` + program.uuid} role="button" className="bg-cyan-600 text-white text-xs py-2 px-3 rounded-md">
            Lihat selengkapnya
          </a>
        </div>
      </div>
    </div>
  )

  useEffect(() => {
    getPrograms()
  }, []);

  return (
    <>
      <Navbar />
      <section className="my-14">
        <div className="container mx-auto px-4">
          {programs.length > 0 ? (
            <div className="w-full flex justify-center flex-wrap gap-5">
              {listPrograms}
            </div>
          ) : (
            <div className="h-[500px] text-center flex justify-center items-center">
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
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Program