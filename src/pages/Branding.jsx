import React, { useEffect } from 'react'
import lp3iWhite from '../assets/lp3i-white.svg'
import lp3iColor from '../assets/lp3i.svg'
import lp3iPngColor from '../assets/lp3i.png'
import lp3iPngWhite from '../assets/lp3i-white.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Branding = () => {

  const copyToClipboard = (content) => {
    var color = content.target.innerText;
    navigator.clipboard.writeText(color).then(() => {
      alert(`Warna ${color} Berhasil disalin!`);
    });
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
  }, []);

  return (
    <>
      <Navbar />
      <section className="my-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="basis-1/3" data-aos="fade-up">
              <img src={lp3iColor} alt />
              <div className="mt-5 space-x-2">
                <a href={lp3iColor} className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2" download="logo-svg.svg">Download .svg</a>
                <a href={lp3iPngColor} className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2" download="logo-png.png">Download .png</a>
              </div>
              <hr className="my-5" />
              <img src={lp3iWhite} alt className="bg-lp3i-500 px-5 py-3 rounded-xl" />
              <div className="mt-5 space-x-2">
                <a href={lp3iWhite} className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2" download="logo-svg.svg">Download .svg</a>
                <a href={lp3iPngWhite} className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2" download="logo-png.png">Download .png</a>
              </div>
            </div>
            <div className="basis-1/2" data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-wrap justify-center gap-5">
                <div onClick={copyToClipboard} className="flex cursor-pointer w-32 h-20 bg-lp3i-500 text-white rounded-lg justify-center items-center">#00426D</div>
                <div onClick={copyToClipboard} className="flex cursor-pointer w-32 h-20 bg-merah-200 text-white rounded-lg justify-center items-center">#F15C67</div>
                <div onClick={copyToClipboard} className="flex cursor-pointer w-32 h-20 bg-hijau-100 text-white rounded-lg justify-center items-center">#00AEB6</div>
                <div onClick={copyToClipboard} className="flex cursor-pointer w-32 h-20 bg-lp3i-500 text-white rounded-lg justify-center items-center">#00426D</div>
                <div onClick={copyToClipboard} className="flex cursor-pointer w-32 h-20 bg-merah-200 text-white rounded-lg justify-center items-center">#F15C67</div>
                <div onClick={copyToClipboard} className="flex cursor-pointer w-32 h-20 bg-hijau-100 text-white rounded-lg justify-center items-center">#00AEB6</div>
                <div onClick={copyToClipboard} className="flex cursor-pointer w-32 h-20 bg-lp3i-500 text-white rounded-lg justify-center items-center">#00426D</div>
                <div onClick={copyToClipboard} className="flex cursor-pointer w-32 h-20 bg-merah-200 text-white rounded-lg justify-center items-center">#F15C67</div>
                <div onClick={copyToClipboard} className="flex cursor-pointer w-32 h-20 bg-hijau-100 text-white rounded-lg justify-center items-center">#00AEB6</div>
                <div onClick={copyToClipboard} className="flex cursor-pointer w-32 h-20 bg-lp3i-500 text-white rounded-lg justify-center items-center">#00426D</div>
                <div onClick={copyToClipboard} className="flex cursor-pointer w-32 h-20 bg-merah-200 text-white rounded-lg justify-center items-center">#F15C67</div>
                <div onClick={copyToClipboard} className="flex cursor-pointer w-32 h-20 bg-hijau-100 text-white rounded-lg justify-center items-center">#00AEB6</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Branding