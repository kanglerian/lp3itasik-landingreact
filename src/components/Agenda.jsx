import React, { useEffect, useState } from 'react'
import axios from 'axios'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const Agenda = () => {
  const [agendas, setAgenda] = useState([])
  
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
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  useEffect(() => {
    getAgendas()
  }, []);
  
  return (
    <section className="my-10">
      <div className="container mx-auto px-4">
        <div className="py-3 mb-8 text-center rounded-lg">
          <h5 className="font-bold text-3xl"><span className="text-merah-300">Agenda</span> Kampus</h5>
          <p className="text-gray-600 text-sm mt-2">Berikut ini adalah daftar kegiatan yang dilakukan di Politeknik LP3I Kampus Tasikmalaya</p>
        </div>
        {agendas.length > 0 ? (
          <div className="flex justify-center">
            <OwlCarousel className='owl-theme' {...options} loop margin={10} autoplay dots={true}>
              {agendas.map((agenda, i) =>
                <div className="item" key={i}>
                  <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + agenda.image} alt={agenda.title} className="rounded-lg shadow-lg" />
                </div>
              )}
            </OwlCarousel>
          </div>
        ) : (
          <p className="bg-red-500 text-white text-center text-sm py-2 rounded-lg">
            Belum ada agenda
          </p>
        )}
      </div>
    </section>
  )
}

export default Agenda