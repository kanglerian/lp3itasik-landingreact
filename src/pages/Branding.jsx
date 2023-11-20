import React, { lazy, Suspense, useEffect } from "react";

import lp3iWhite from "../assets/lp3i-white.svg";
import lp3iColor from "../assets/lp3i.svg";
import lp3iPngColor from "../assets/lp3i.png";
import lp3iPngWhite from "../assets/lp3i-white.png";

import kampusMerdekaPutih from "../assets/brands/kampus-merdeka-putih.png";
import kampusMerdekaWarna from "../assets/brands/kampus-merdeka-warna.png";
import taglinePutihSvg from "../assets/brands/tagline-putih.svg";
import taglineWarnaSvg from "../assets/brands/tagline-warna.svg";
import taglinePutihPng from "../assets/brands/tagline-putih.png";
import taglineWarnaPng from "../assets/brands/tagline-warna.png";

import GlobalMandiriSolid from '../assets/logo/global-mandiri-solid.png'
import GlobalMandiriYellow from '../assets/logo/global-mandiri-yellow.png'
import GlobalMandiriWhite from '../assets/logo/global-mandiri-white.png'

import MayasariSolid from '../assets/logo/mayasari-solid.png'
import MayasariWhite from '../assets/logo/mayasari-white.png'

const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));

import AOS from "aos";
import "aos/dist/aos.css";

const renderLoader = () => (
  <div role="status" className="flex justify-center items-center h-screen">
    <svg
      aria-hidden="true"
      className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>
);

const Branding = () => {
  const copyToClipboard = (content) => {
    var color = content.target.innerText;
    navigator.clipboard.writeText(color).then(() => {
      alert(`Warna ${color} Berhasil disalin!`);
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <Suspense fallback={renderLoader()}>
      <Navbar />
      <section className="my-20">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-2xl font-bold text-gray-700 mb-5">Warna</h3>
          <div className="flex flex-wrap justify-center gap-5">
            <div
              onClick={copyToClipboard}
              className="flex cursor-pointer w-32 h-20 bg-lp3i-500 text-white rounded-lg justify-center items-center"
            >
              #00426D
            </div>
            <div
              onClick={copyToClipboard}
              className="flex cursor-pointer w-32 h-20 bg-merah-200 text-white rounded-lg justify-center items-center"
            >
              #F15C67
            </div>
            <div
              onClick={copyToClipboard}
              className="flex cursor-pointer w-32 h-20 bg-hijau-100 text-white rounded-lg justify-center items-center"
            >
              #00AEB6
            </div>
          </div>

          <hr className="my-10"/>

          <h3 className="text-center text-2xl font-bold text-gray-700 mb-5">Logo</h3>

          <div className="flex flex-wrap">
            <div className="w-1/4 p-2">
              <img loading="lazy" src={lp3iColor} alt className="px-5 py-3" />
              <div className="mt-5 space-x-2">
                <a
                  href={lp3iColor}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2"
                  download="logo-lp3i.svg"
                >
                  Download .svg
                </a>
                <a
                  href={lp3iPngColor}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2"
                  download="logo-lp3i.png"
                >
                  Download .png
                </a>
              </div>
            </div>

            <div className="w-1/4 p-2">
              <img
                loading="lazy"
                src={lp3iWhite}
                alt
                className="bg-lp3i-500 px-5 py-3 rounded-xl"
              />
              <div className="mt-5 space-x-2">
                <a
                  href={lp3iWhite}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2"
                  download="logo-lp3i-putih.svg"
                >
                  Download .svg
                </a>
                <a
                  href={lp3iPngWhite}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2"
                  download="logo-lp3i-putih.png"
                >
                  Download .png
                </a>
              </div>
            </div>

            <div className="w-1/4 p-2">
              <img
                loading="lazy"
                src={taglinePutihSvg}
                alt
                className="bg-lp3i-500 px-5 py-3 rounded-xl"
              />
              <div className="mt-5 space-x-2">
                <a
                  href={taglinePutihPng}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2"
                  download="tagline-putih.png"
                >
                  Download .png
                </a>
                <a
                  href={taglinePutihSvg}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2"
                  download="tagline-putih.svg"
                >
                  Download .svg
                </a>
              </div>
            </div>

            <div className="w-1/4 p-2">
              <img
                loading="lazy"
                src={taglineWarnaSvg}
                alt
                className="px-5 py-3"
              />
              <div className="mt-5 space-x-2">
                <a
                  href={taglineWarnaPng}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2"
                  download="tagline-warna.png"
                >
                  Download .png
                </a>
                <a
                  href={taglineWarnaSvg}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2"
                  download="tagline-warna.svg"
                >
                  Download .svg
                </a>
              </div>
            </div>

            <div className="w-1/4 p-2">
              <img
                loading="lazy"
                src={GlobalMandiriSolid}
                alt
                className="px-5 py-3"
              />
              <div className="mt-5 space-x-2">
                <a
                  href={GlobalMandiriSolid}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2"
                  download="tagline-warna.png"
                >
                  Download .png
                </a>
              </div>
            </div>

            <div className="w-1/4 p-2">
              <img
                loading="lazy"
                src={GlobalMandiriYellow}
                alt
                className="px-5 py-3"
              />
              <div className="mt-5 space-x-2">
                <a
                  href={GlobalMandiriYellow}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2"
                  download="tagline-warna.png"
                >
                  Download .png
                </a>
              </div>
            </div>

            <div className="w-1/4 p-2">
              <img
                loading="lazy"
                src={GlobalMandiriWhite}
                alt
                className="bg-lp3i-500 px-5 py-3 rounded-xl"
              />
              <div className="mt-5 space-x-2">
                <a
                  href={GlobalMandiriWhite}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2"
                  download="tagline-warna.png"
                >
                  Download .png
                </a>
              </div>
            </div>

            <div className="w-1/4 p-2">
              <img
                loading="lazy"
                src={MayasariSolid}
                alt
                className="bg-lp3i-500 px-5 py-3 rounded-xl"
              />
              <div className="mt-5 space-x-2">
                <a
                  href={MayasariSolid}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2"
                  download="tagline-warna.png"
                >
                  Download .png
                </a>
              </div>
            </div>

            <div className="w-1/4 p-2">
              <img
                loading="lazy"
                src={MayasariWhite}
                alt
                className="bg-lp3i-500 px-5 py-3 rounded-xl"
              />
              <div className="mt-5 space-x-2">
                <a
                  href={MayasariWhite}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2"
                  download="tagline-warna.png"
                >
                  Download .png
                </a>
              </div>
            </div>

            <div className="w-1/4 p-2">
              <img
                loading="lazy"
                src={kampusMerdekaPutih}
                alt
                className="bg-lp3i-500 px-5 py-3 rounded-xl"
              />
              <div className="mt-5 space-x-2">
                <a
                  href={kampusMerdekaPutih}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2"
                  download="kampus-merdeka-putih.png"
                >
                  Download .png
                </a>
              </div>
            </div>

            <div className="w-1/4 p-2">
              <img
                loading="lazy"
                src={kampusMerdekaWarna}
                alt
                className="px-5 py-3"
              />
              <div className="mt-5 space-x-2">
                <a
                  href={kampusMerdekaWarna}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-xs px-4 py-2"
                  download="kampus-merdeka-warna.png"
                >
                  Download .png
                </a>
              </div>
            </div>

           

          </div>
        </div>
      </section>
      <Footer />
    </Suspense>
  );
};

export default Branding;
