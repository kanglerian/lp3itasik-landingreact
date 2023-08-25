import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import axios from 'axios'
const Navbar = lazy(() => import('../components/Navbar'))
const Footer = lazy(() => import('../components/Footer'))

import AOS from 'aos'
import 'aos/dist/aos.css'

import emptyAnimate from '../assets/empty.json'

const renderLoader = () =>
<div role="status" className='flex justify-center items-center h-screen'>
    <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>;

const Facilities = () => {

  const [facilities, setFacility] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const getFacilities = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/facilities`)
      .then((response) => {
        let facilities = response.data.filter(facility => facility.status == '1')
        setFacility(facilities)
        setIsLoaded(true)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const listFacilities = facilities.map((facility, i) =>
    <div key={i} data-aos-delay={i * 100} className="item w-96 h-auto border-8 border-white shadow rounded-lg ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-300">
      <img loading="lazy" src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + facility.image} alt={facility.title} className="rounded-lg" />
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
    <Suspense fallback={renderLoader()}>
      <Navbar />
      <section className="my-14">
        <div className="container mx-auto px-4">
          {isLoaded ? (
            <>
              {facilities.length > 0 ? (
                <div className="w-full flex justify-center flex-wrap gap-5">
                  {listFacilities}
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
              <div className="w-96 flex flex-col items-center justify-center bg-gray-100 rounded-lg animate-pulse p-5">
                <div className='w-full h-40 rounded-lg bg-gray-200'></div>
                <div className='w-3/6 h-5 rounded-lg bg-gray-200 mt-3'></div>
              </div>
            </div>
          )}

        </div>
      </section>
      <Footer />
    </Suspense>
  )
}

export default Facilities