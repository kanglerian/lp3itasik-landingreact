import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone';
import axios from 'axios'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Media = () => {
  const currentLanguage = localStorage.getItem('language') || 'id';
  const [medias, setMedia] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getMedias = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/medias`)
      .then((response) => {
        let medias = response.data.filter(media => media.status == '1')
        setMedia(medias)
        setIsLoaded(true)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const listMedias = medias.map((media, i) =>
    <div data-aos="fade-up" data-aos-delay={i * 5} className="bg-white shadow rounded-xl p-5 md:w-[400px] ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-300 space-y-3" key={i}>
      <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + media.image} alt={media.title.slice(0, 70) + "..."} className="rounded-lg" />
      <h5 className="font-bold text-lg">{media.title}</h5>
      <div className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: media.description.slice(0, 150) + "..." }}></div>
      <div className="text-sm flex align-center justify-between">
        <a role="button" href={`/media/` + media.uuid} className="transition ease-in-out duration-300 bg-sky-600 hover:bg-sky-600 px-5 py-1 rounded-lg text-white">
          {currentLanguage == 'en' ? 'View more' : 'Lihat selengkapnya'}
        </a>
        <p className="text-gray-600 py-1">{moment.tz(media.date, 'Asia/Jakarta').format('LL')}</p>
      </div>
    </div>
  )

  useEffect(() => {
    getMedias()
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
          {currentLanguage == 'en' ? (
            <h5 className="font-bold text-3xl"><span className="text-merah-300">Campus</span> Media</h5>
            ) : (
            <h5 className="font-bold text-3xl"><span className="text-merah-300">Media</span> Kampus</h5>
          )}
          <p className="text-gray-600 text-sm md:text-base mt-2">{currentLanguage == 'en' ? 'The following is the latest news from the LP3I Polytechnic, Tasikmalaya Campus' : 'Berikut adalah berita terbaru dari Politeknik LP3I Kampus Tasikmalaya'}</p>
        </div>
        {isLoaded ? (
          <>
            {medias.length > 0 ? (
              <div>
                <div className="flex flex-row flex-wrap justify-center gap-5 my-8">
                  {listMedias}
                </div>
                <div className="text-center">
                  <a href={`/media`} className="text-sky-600 text-sm underline">{currentLanguage == 'en' ? 'View more' : 'Lihat selengkapnya'}</a>
                </div>
              </div>
            ) : (
              <p className="bg-red-500 text-white text-center text-sm py-2 rounded-lg" data-aos="fade-up">
                {currentLanguage == 'en' ? 'No news yet' : 'Belum ada berita'}
              </p>
            )}
          </>
        ) : (
          <div className='flex items-center justify-center' data-aos="fade-up">
            <div className="w-[400px] flex flex-col items-start justify-start bg-gray-100 rounded-lg animate-pulse p-5">
              <div className='w-full h-24 rounded-lg bg-gray-200 animate-pulse'></div>
              <div className='w-4/6 h-5 rounded-lg bg-gray-200 my-3 animate-pulse'></div>
              <div className='w-full h-20 rounded-lg bg-gray-200 animate-pulse'></div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Media