import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import emptyAnimate from '../assets/empty.json'

const ProgramDetail = () => {
  const { uuid } = useParams();

  const [program, setProgram] = useState({})
  const [visions, setVision] = useState([])
  const [misions, setMision] = useState([])
  const [benefits, setBenefit] = useState([])
  const [careers, setCareer] = useState([])
  const [competences, setCompetence] = useState([])
  const [alumnis, setAlumni] = useState([])

  const getProgram = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/programs/${uuid}`)
      .then((response) => {
        setProgram(response.data)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const getVision = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/visions/${uuid}`)
      .then((response) => {
        let data = response.data.filter(dat => dat.status == '1')
        setVision(data)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const getMision = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/misions/${uuid}`)
      .then((response) => {
        let data = response.data.filter(dat => dat.status == '1')
        setMision(data)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const getBenefit = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/benefits/${uuid}`)
      .then((response) => {
        let data = response.data.filter(dat => dat.status == '1')
        setBenefit(data)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const getCareer = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/careers/${uuid}`)
      .then((response) => {
        let data = response.data.filter(dat => dat.status == '1')
        setCareer(data)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const getCompetence = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/competences/${uuid}`)
      .then((response) => {
        let data = response.data.filter(dat => dat.status == '1')
        setCompetence(data)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const getAlumni = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/alumnis/${uuid}`)
      .then((response) => {
        let data = response.data.filter(dat => dat.status == '1')
        setAlumni(data)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const hiddenSection = (content) => {
    let data = content.target.dataset.name;
    switch (data) {
      case 'visi':
        $('#visi').show();
        $('#keunggulan').hide();
        $('#kompetensi').hide();
        $('#karir').hide();
        $('#alumni').hide();
        break;
      case 'keunggulan':
        $('#visi').hide();
        $('#keunggulan').show();
        $('#kompetensi').hide();
        $('#karir').hide();
        $('#alumni').hide();
        break;
      case 'kompetensi':
        $('#visi').hide();
        $('#keunggulan').hide();
        $('#kompetensi').show();
        $('#karir').hide();
        $('#alumni').hide();
        break;
      case 'karir':
        $('#visi').hide();
        $('#keunggulan').hide();
        $('#kompetensi').hide();
        $('#karir').show();
        $('#alumni').hide();
        break;
      case 'alumni':
        $('#visi').hide();
        $('#keunggulan').hide();
        $('#kompetensi').hide();
        $('#karir').hide();
        $('#alumni').show();
        break;
      default:
        $('#visi').hide();
    }
  }

  useEffect(() => {
    getProgram()
    getVision()
    getMision()
    getBenefit()
    getCareer()
    getCompetence()
    getAlumni()
  }, []);

  return (
    <>
      <Navbar />
      <style dangerouslySetInnerHTML={{ __html: "\n\t#media p a {\n\t\tcolor: #0284c7;\n\t\ttext-decoration: underline;\n\t}\n" }} />
      <section className="my-8">
        <div className="container mx-auto px-4">
          <header>
            <div className="group relative">
              <img className="w-full object-cover rounded-xl h-80" alt={program.title} src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + program.image} />
              <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-lp3i-200 rounded-xl opacity-90 h-full">
                <div className="space-y-3 text-center text-white px-3">
                  <h1 className="text-4xl">{program.level} {program.title}</h1>
                  <span className="inline-block rounded-lg text-sm bg-lp3i-100 px-4 py-2">{program.campus}</span>
                </div>
              </div>
            </div>
          </header>
          <nav className="my-5 bg-slate-100 border border-slate-200 py-3 rounded-xl">
            <ul className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 text-sm text-center px-4">
              <li onClick={hiddenSection} data-name="visi" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">Visi &amp; Misi</li>
              <li onClick={hiddenSection} data-name="keunggulan" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">Keunggulan</li>
              <li onClick={hiddenSection} data-name="karir" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">Potensi Karir</li>
              <li onClick={hiddenSection} data-name="kompetensi" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">Standar Kompetensi &amp; Lulusan</li>
              <li onClick={hiddenSection} data-name="alumni" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">Testimoni Alumni</li>
            </ul>
          </nav>
          <section className="block py-5" id="visi">
            {visions.length > 0 || misions.length > 0 ? (
              <>
                {visions.length > 0 &&
                  <div className="flex flex-col md:flex-row items-center gap-5">
                    <div className="w-full md:w-1/2 space-y-3 order-2 md:order-none">
                      <h3 className="font-bold text-3xl">Visi</h3>
                      {visions.map((vision) =>
                        <p className="text-slate-700">{vision.vision}</p>
                      )}
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-none">
                      <img className="w-full object-cover rounded-xl" alt={program.title} src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + program.image} />
                    </div>
                  </div>
                }
                <hr className="my-5" />
                {misions.length > 0 &&
                  <div className="flex flex-col md:flex-row items-center gap-5">
                    <div className="w-full md:w-1/2 order-1 md:order-none">
                      <img className="w-full object-cover rounded-xl" alt={program.title} src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + program.image} />
                    </div>
                    <div className="w-full md:w-1/2 space-y-3 order-2 md:order-none">
                      <h3 className="font-bold text-3xl">Misi</h3>
                      <ol className="text-slate-700 list-decimal ml-5 space-y-3">
                        {misions.map((mision) =>
                          <li>{mision.mision}</li>
                        )}
                      </ol>
                    </div>
                  </div>
                }
              </>
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
          </section>
          <section className="hidden py-5" id="keunggulan">
            {benefits.length > 0 ? (
              <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="w-full md:w-1/2 order-1 md:order-none">
                  <img className="w-full object-cover rounded-xl" alt={program.title} src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + program.image} />
                </div>
                <div className="w-full md:w-1/2 space-y-3 order-2 md:order-none">
                  <h3 className="font-bold text-3xl">Keunggulan</h3>
                  <ol className="text-slate-700 list-decimal ml-5 space-y-3">
                    {benefits.map((benefit) =>
                      <li>{benefit.benefit}</li>
                    )}
                  </ol>
                </div>
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
          </section>
          <section className="hidden py-5" id="kompetensi">
            {competences.length > 0 ? (
              <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="w-full md:w-1/2 order-1 md:order-none">
                  <img className="w-full object-cover rounded-xl" alt={program.title} src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + program.image} />
                </div>
                <div className="w-full md:w-1/2 space-y-3 order-2 md:order-none">
                  <h3 className="font-bold text-3xl">Kompetensi</h3>
                  <ol className="text-slate-700 list-decimal ml-5 space-y-3">
                    {competences.map((competence) =>
                      <li>{competence.competence}</li>
                    )}
                  </ol>
                </div>
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
          </section>
          <section className="hidden py-5" id="karir">
            {careers.length > 0 ? (
              <div className="flex flex-wrap flex-row justify-center items-center">
                {careers.map((career) =>
                  <div className="w-1/2 md:w-1/5 p-2 transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-300">
                    <div className="flex items-center justify-center bg-red-500 h-40 rounded-lg">
                      <span className="text-white">{career.career}</span>
                    </div>
                  </div>
                )}
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
          </section>
          <section className="hidden py-5" id="alumni">
            {alumnis.length > 0 ? (
              <div className="flex flex-wrap flex-row justify-center items-center">
                {alumnis.map((alumni) =>
                  <div className="w-full md:w-1/3 p-2 transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-300">
                    <div className="text-center bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                      <span className="inline-block h-20 w-20 rounded-full bg-red-500" />
                      <h3 className="text-lg">{alumni.name}</h3>
                      <hr />
                      <ul className="text-[13px] text-slate-800">
                        <li><span className="font-bold">Alumni</span> {alumni.school}</li>
                        <li><span className="font-bold">Bekerja</span> {alumni.work}</li>
                        <li><span className="font-bold">Sebagai</span> {alumni.profession}</li>
                      </ul>
                      <hr />
                      <p className="text-slate-800"><i>"{alumni.quote}"</i></p>
                    </div>
                  </div>
                )}
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
          </section>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProgramDetail