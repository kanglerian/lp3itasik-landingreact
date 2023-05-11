import React, { useState, useEffect } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'

import emptyAnimate from '../assets/empty.json'

const Facilities = () => {

  const [facilities, setFacility] = useState([])

  const getFacilities = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/facilities`)
      .then((response) => {
        let facilities = response.data.filter(facility => facility.status == '1')
        setFacility(facilities)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const listFacilities = facilities.map((facility, i) =>
    <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="item w-96 h-auto border-8 border-white shadow rounded-lg ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-300">
      <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + facility.image} alt={facility.title} className="rounded-lg" />
      <h5 className="bg-white block font-bold text-sm py-2 text-center text-gray-700">{facility.title}</h5>
    </div>
  )

  useEffect(() => {
    getFacilities()
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
          {facilities.length > 0 ? (
            <div className="w-full flex justify-center flex-wrap gap-5">
              {listFacilities}
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

export default Facilities