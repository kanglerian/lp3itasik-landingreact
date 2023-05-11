import React, { useEffect, useState } from 'react'
import axios from 'axios'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import AOS from 'aos'
import 'aos/dist/aos.css'

const Agenda = () => {
  const [agendas, setAgenda] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const options = {
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 3
      }
    }
  }

  const getAgendas = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/agendas`)
      .then((response) => {
        let agendas = response.data.filter(agenda => agenda.status == '1')
        setAgenda(agendas)
        setIsLoaded(true)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  useEffect(() => {
    getAgendas()
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
  }, []);

  return (
    <section className="my-10">
      <div className="container mx-auto px-4">
        <div className="py-3 mb-8 text-center rounded-lg">
          <h5 className="font-bold text-3xl"><span className="text-merah-300" data-aos="fade-up">Agenda</span> Kampus</h5>
          <p className="text-gray-600 text-sm mt-2" data-aos="fade-up" data-aos-delay="100">Berikut ini adalah daftar kegiatan yang dilakukan di Politeknik LP3I Kampus Tasikmalaya</p>
        </div>
        {isLoaded ? (
          <>
            {agendas.length > 0 ? (
              <div className="flex justify-center">
                <OwlCarousel className='owl-theme' {...options} loop margin={10} autoplay dots={true}>
                  {agendas.map((agenda, i) =>
                    <div className="item" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                      <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + agenda.image} alt={agenda.title} className="rounded-lg shadow-lg" />
                    </div>
                  )}
                </OwlCarousel>
              </div>
            ) : (
              <p className="bg-red-500 text-white text-center text-sm py-2 rounded-lg" data-aos="fade-up">
                Belum ada agenda
              </p>
            )}
          </>
        ) : (
          <div className='flex items-center justify-center'>
            <div className="w-full md:w-1/3 flex items-center justify-center h-56 md:h-72 bg-gray-200 rounded-lg animate-pulse">
              <i class="fa-regular fa-images fa-3x text-gray-300"></i>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default Agenda