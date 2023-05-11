import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Benefit = () => {
  const [benefits, setBenefit] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getBenefits = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/benefits`)
      .then((response) => {
        let benefits = response.data.filter(benefit => benefit.status == '1')
        setBenefit(benefits)
        setIsLoaded(true)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  useEffect(() => {
    getBenefits();
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
    AOS.refresh();
  }, []);

  const listBenefit = benefits.map((benefit, i) =>
    <div className="text-center w-[400px]" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
      <div className="bg-white shadow-sm text-center p-4 rounded-lg transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-300">
        <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + benefit.image} alt={benefit.title} className="inline w-20 rounded-full" />
        <div className="mt-3 bg-gray-50 p-2 rounded">
          <h5 className="font-bold text-cyan-700 text-base mb-1">{benefit.title}</h5>
          <p className="text-gray-600 text-sm">{benefit.description}</p>
        </div>
      </div>
    </div>
  )

  return (
    <section className="my-10">
      <div className="container mx-auto text-sm px-4">
        <div className="flex flex-wrap justify-center items-center gap-5">
          {isLoaded ? (
            listBenefit
          ) : (
            <>
              <div className="w-[400px] flex flex-col items-center justify-center bg-gray-100 rounded-lg animate-pulse p-5">
                <div className='w-20 h-20 rounded-full bg-gray-200'></div>
                <div className='w-full h-5 rounded-lg bg-gray-200 my-3'></div>
                <div className='w-full h-20 rounded-lg bg-gray-200'></div>
              </div>
              <div className="w-[400px] flex flex-col items-center justify-center bg-gray-100 rounded-lg animate-pulse p-5">
                <div className='w-20 h-20 rounded-full bg-gray-200'></div>
                <div className='w-full h-5 rounded-lg bg-gray-200 my-3'></div>
                <div className='w-full h-20 rounded-lg bg-gray-200'></div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Benefit