import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Information = (props) => {

  const [youtube, setYoutube] = useState([])
  const [documentations, setDocumentation] = useState([])
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

  const getYoutube = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/informations`)
      .then((response) => {
        let youtubes = response.data.filter(youtube => youtube.status == '1' && youtube.locate == props.locate)
        setYoutube(youtubes)
        setIsLoaded(true)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const getDocumentation = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/documentations`)
      .then((response) => {
        let docs = response.data.filter(doc => doc.status == '1')
        setDocumentation(docs)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const listDocumentation = documentations.map((doc, i) =>
    <div className="item" key={i} data-aos-delay={i * 5}>
      <img loading="lazy" src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + doc.image} alt={doc.title}
        className="rounded-lg" />
    </div>
  )

  const listYoutube = youtube.map((yt, i) =>
    <>
      <div className="w-full md:w-1/2 h-auto" key={i}>
        <iframe width="100%" height="350px" className="rounded-2xl border-4 border-lp3i-400"
          src={`https://www.youtube.com/embed/` + yt.youtube} title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen />
      </div>
      <div className="w-full md:w-1/2">
        <h5 className="font-bold text-3xl text-white" data-aos-delay="10">{yt.title}</h5>
        <p className="text-sm md:text-base text-gray-100 mt-3" data-aos-delay="20">{yt.description}</p>
        {
          props.doc && (
            <div className="mt-5 flex justify-center">
              <OwlCarousel className='owl-theme' {...options} loop margin={10} autoplay dots={true}>
                {listDocumentation}
              </OwlCarousel>
            </div>
          )
        }
      </div>
    </>
  )

  useEffect(() => {
    getYoutube();
    getDocumentation();
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
  }, []);

  return (
    <section className="bg-lp3i-500 py-10 my-10">
      <div className="container mx-auto px-4">
        {isLoaded ? (
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {youtube.length > 0 ? (
              listYoutube
            ) : (
              <>
                <div className="w-full md:w-1/2 h-auto">
                  <iframe width="100%" height="350px" className="rounded-2xl border-4 border-gray-200"
                    src="https://www.youtube.com/embed/Vo1R5cElVqQ" title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen />
                </div>
                <div className="w-full md:w-1/2">
                  <h1 className="font-bold text-3xl text-white" data-aos-delay="10">LP3I
                    Tasikmalaya – Cover Condong Pada Mimpi</h1>
                  <p className="text-sm md:text-base text-gray-100 mt-3" data-aos-delay="20">Video ini berisi
                    tentang pendidikan vokasi di LP3I Tasikmalaya mulai dari kegiatan Pengenalan Lingkungan Kampus,
                    kegiatan praktek akuntansi, praktek otomotif, praktek informatika, praktek manajemen
                    perkantoran, dan proses penempatan kerja yang menjadi salah satu program unggulan di LP3I.</p>
                  {props.doc && (
                    <div className="mt-5 flex justify-center">
                      <OwlCarousel className='owl-theme' {...options} loop margin={10} autoplay>
                        {listDocumentation}
                      </OwlCarousel>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div
              className="w-full md:w-1/2 flex items-center justify-center h-56 md:h-80 bg-lp3i-300 rounded-lg animate-pulse">
              <i className="fa-regular fa-images fa-3x text-lp3i-300 animate-pulse"></i>
            </div>
            <div className='w-full md:w-1/2'>
              <div className='w-5/6 h-10 rounded-lg bg-lp3i-300 my-3 animate-pulse'></div>
              <div className='w-full h-24 rounded-lg bg-lp3i-300 animate-pulse'></div>
              <div className='w-3/6 h-10 rounded-lg bg-lp3i-300 my-3 animate-pulse'></div>
            </div>
          </div>
        )}
      </div>
    </section>

  )
}

export default Information
