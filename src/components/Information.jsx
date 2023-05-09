import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios'

const Information = () => {
  const [youtube, setYoutube] = useState([])
  const [documentations, setDocumentation] = useState([])

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
        let youtubes = response.data.filter(youtube => youtube.status == '1')
        setYoutube(youtubes)
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
    <div className="item" key={i}>
      <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + doc.image} alt={doc.title} className="rounded-lg" />
    </div>
  )

  const listYoutube = youtube.map((yt) =>
    <>
      <div className="w-full md:w-1/2 h-auto" key={yt.id}>
        <iframe width="100%" height="350px" className="rounded-2xl border-4 border-gray-200" src={`https://www.youtube.com/embed/` + yt.youtube} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
      <div className="w-full md:w-1/2">
        <h5 className="font-bold text-2xl md:text-3xl">{yt.title}</h5>
        <p className="text-sm text-gray-600 mt-3">{yt.description}</p>
        <a href="#" className="transition ease-in-out duration-300 inline-block py-2 px-4 text-sm mt-5 text-white bg-sky-500 hover:bg-sky-600 rounded">
          Lihat selengkapnya
        </a>
        <div className="mt-5 flex justify-center">
          <OwlCarousel className='owl-theme' {...options} loop margin={10} autoplay dots={true}>
            {listDocumentation}
          </OwlCarousel>
        </div>
      </div>
    </>
  )

  useEffect(() => {
    getYoutube();
    getDocumentation();
  }, []);

  return (
    <section className="my-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/*?php if (!empty($informations)) { ?*/}
          {youtube.length > 0 ? (
            listYoutube
          ) : (
            <>
              <div className="w-full md:w-1/2 h-auto">
                <iframe width="100%" height="350px" className="rounded-2xl border-4 border-gray-200" src="https://www.youtube.com/embed/Vo1R5cElVqQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              </div>
              <div className="w-full md:w-1/2">
                <h5 className="font-bold text-2xl md:text-3xl">LP3I Tasikmalaya – Cover Condong Pada Mimpi</h5>
                <p className="text-sm text-gray-600 mt-3">Video ini berisi tentang pendidikan vokasi di LP3I Tasikmalaya mulai dari kegiatan Pengenalan Lingkungan Kampus, kegiatan praktek akuntansi, praktek otomotif, praktek informatika, praktek manajemen perkantoran, dan proses penempatan kerja yang menjadi salah satu program unggulan di LP3I.</p>
                <a href="#" className="transition ease-in-out duration-300 inline-block py-2 px-4 text-sm mt-5 text-white bg-sky-500 hover:bg-sky-600 rounded">Lihat selengkapnya</a>

                <div className="mt-5 flex justify-center">
                  <OwlCarousel className='owl-theme' {...options} loop margin={10} autoplay>
                    {listDocumentation}
                  </OwlCarousel>
                </div>

              </div>
            </>
          )}
        </div>
      </div>
    </section>

  )
}

export default Information