import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Program = () => {
  const [utamaPrograms, setUtama] = useState([])
  const [tasikPrograms, setTasik] = useState([])
  const [vokasiPrograms, setVokasi] = useState([])

  const getPrograms = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/programs`)
      .then((response) => {
        let programs = response.data;
        let foundUtama = programs.filter(program => program.campus == 'Kampus Utama' && program.status == "1");
        let foundTasik = programs.filter(program => program.campus == 'Politeknik LP3I Kampus Tasikmalaya' && program.status == "1");
        let foundVokasi = programs.filter(program => program.campus == 'LP3I Tasikmalaya' && program.status == "1");
        setUtama(foundUtama);
        setTasik(foundTasik);
        setVokasi(foundVokasi);
        console.log(foundUtama)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  useEffect(() => {
    getPrograms();
  }, []);

  return (
    <section className="bg-lp3i-500 py-8">
      <div className="container mx-auto text-center text-white px-4">

        {tasikPrograms.length > 0 && vokasiPrograms.length > 0 && (
          <div className="bg-lp3i-100 py-3 mb-8 rounded-lg">
            <h5 className="font-bold text-xl">Kampus Tasikmalaya</h5>
          </div>
        )}

        {tasikPrograms.length > 0 && (
          <>
            <h5 className="font-bold text-2xl my-3">Program <span className="text-merah-100">Pendidikan Diploma 3</span></h5>
            <p>Berikut adalah daftar program studi jenjang D3 di Politeknik LP3I Kampus Tasikmalaya</p>
            <div className="flex flex-wrap flex-col md:flex-row justify-center gap-5 my-8">
              {tasikPrograms.map((tasik,i) =>
                <div className="group relative w-1/1 md:w-1/3" key={i}>
                  <img className="w-full object-cover rounded-lg" alt={tasik.title} src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + tasik.image} />
                  <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-lp3i-200 rounded-lg opacity-0 group-hover:h-full group-hover:opacity-95 duration-500">
                    <h1 className="text-lg text-white">{tasik.title}</h1>
                    <a href="#" role="button" className="mt-5 px-8 py-2 text-sm rounded-full bg-amber-400 hover:bg-amber-600 duration-300">
                      Lihat selengkapnya
                    </a>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {vokasiPrograms.length > 0 && (
          <>
            <h5 className="font-bold text-2xl my-3">Program Pendidikan <span className="text-merah-100">Vokasi 2 Tahun</span></h5>
            <p>Berikut adalah daftar program studi jenjang Vokasi 2 Tahun di LP3I Tasikmalaya</p>
            <div className="flex flex-col md:flex-row justify-center gap-5 my-8">
              {vokasiPrograms.map((vokasi, i) =>
                <div className="group relative w-1/1 md:w-1/3" key={i}>
                  <img className="w-full object-cover rounded-lg" alt={vokasi.title} src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + vokasi.image} />
                  <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-lp3i-200 rounded-lg opacity-0 group-hover:h-full group-hover:opacity-95 duration-500">
                    <h1 className="text-lg text-white">{vokasi.level} {vokasi.title}</h1>
                    <a href="<?= base_url() ?>programs/<?= $college->id ?>" role="button" className="mt-5 px-8 py-2 text-sm rounded-full bg-amber-400 hover:bg-amber-600 duration-300">
                      Selengkapnya
                    </a>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {utamaPrograms.length > 0 && (
          <>
            <div className="bg-lp3i-200 py-3 mb-8 rounded-lg">
              <h5 className="font-bold text-xl">
                Kampus Utama
              </h5>
            </div>
            <h5 className="font-bold text-2xl my-3">Program Pendidikan <span className="text-merah-100">Diploma 3</span></h5>
            <p>Berikut adalah daftar program studi jenjang D3 di Politeknik LP3I</p>
            <div className="flex flex-wrap flex-col md:flex-row justify-center gap-5 my-8">
              {utamaPrograms.map((utama,i) =>
                <div className="group relative w-1/1 md:w-1/3" key={i}>
                  <img className="w-full object-cover rounded-lg" alt={utama.title} src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + utama.image} />
                  <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-lp3i-200 rounded-lg opacity-0 group-hover:h-full group-hover:opacity-95 duration-500">
                    <h1 className="text-lg text-white">{utama.title}</h1>
                    <a href="#" role="button" className="mt-5 px-8 py-2 text-sm rounded-full bg-amber-400 hover:bg-amber-600 duration-300">
                      Lihat selengkapnya
                    </a>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

      </div>
    </section>

  )
}

export default Program