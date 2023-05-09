import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone';
import axios from 'axios'

const Media = () => {
  const [medias, setMedia] = useState([]);

  const getMedias = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/medias`)
      .then((response) => {
        let medias = response.data.filter(media => media.status == '1')
        setMedia(medias)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const listMedias = medias.map((media,i) =>
    <div className="bg-white shadow rounded-xl p-5 md:w-[400px] ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-300 space-y-3" key={i}>
      <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + media.image} alt={media.title.slice(0,70) + "..."} className="rounded-lg" />
      <h5 className="font-bold text-lg">{media.title}</h5>
      <div className="text-sm text-gray-600" dangerouslySetInnerHTML={{__html: media.description.slice(0, 150) + "..."}}></div>
      <div className="text-sm flex align-center justify-between">
        <a role="button" href="#" className="transition ease-in-out duration-300 bg-sky-600 hover:bg-sky-600 px-5 py-1 rounded-lg text-white">
          Lihat selengkapnya
        </a>
        <p className="text-gray-600 py-1">{moment.tz(media.date, 'Asia/Jakarta').format('LL')}</p>
      </div>
    </div>
  )

  useEffect(() => {
    getMedias()
  }, []);


  return (
    <section className="my-10">
      <div className="container mx-auto px-4">
        <div className="py-3 mb-8 text-center rounded-lg">
          <h5 className="font-bold text-3xl"><span className="text-merah-300">Media</span> Kampus</h5>
          <p className="text-gray-600 text-sm mt-2">Berikut adalah berita terbaru dari Politeknik LP3I Kampus Tasikmalaya</p>
        </div>
        {medias.length > 0 ? (
          <div>
            <div className="flex flex-row flex-wrap justify-center gap-5 my-8">
              {listMedias}
            </div>
            <div className="text-center">
              <a href="#" className="text-sky-600 text-sm underline">Lihat selengkapnya</a>
            </div>
          </div>
        ) : (
          <p className="bg-red-500 text-white text-center text-sm py-2 rounded-lg">
            Belum ada berita
          </p>
        )}
      </div>
    </section>
  )
}

export default Media