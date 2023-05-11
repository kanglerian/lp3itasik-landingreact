import React, { useState, useEffect } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'

import emptyAnimate from '../assets/empty.json'

const Organization = () => {
  const [organizations, setOrganization] = useState([])
  
  const getOrganization = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/organizations`)
      .then((response) => {
        let organizations = response.data.filter(org => org.status == '1')
        setOrganization(organizations)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const listOrg = organizations.map((org, i) =>
    <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
      <div className="text-center">
        <span className="text-gray-700">Struktur Organisasi</span><br />
        <span className="font-bold">{org.title}</span>
      </div>
      <div className="w-full shadow rounded-lg mb-20 mt-10">
        <iframe frameborder="0" style={{ width: '100%', height: '800px' }} src={org.drawio}></iframe>
      </div>
    </div>
  )

  useEffect(() => {
    getOrganization()
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
      <section className="my-20">
        <div className="container mx-auto px-4">
          {organizations.length > 0 ? (
            <div className="w-full flex-col justify-center items-center gap-5">
              {listOrg}
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

export default Organization