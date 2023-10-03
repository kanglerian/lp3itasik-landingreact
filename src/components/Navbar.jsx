import React, { useState, useEffect } from "react";
import lp3i from "../assets/lp3i.svg";
import axios from "axios";

import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../setting/LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const [showAbout, setAbout] = useState(false);
  const [showProgram, setProgram] = useState(false);

  const [utamaPrograms, setUtama] = useState([]);
  const [tasikPrograms, setTasik] = useState([]);
  const [vokasiPrograms, setVokasi] = useState([]);
  const getPrograms = async () => {
    await axios
      .get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/programs`)
      .then((response) => {
        let programs = response.data;
        let foundUtama = programs.filter(
          (program) => program.campus == "Kampus Utama" && program.status == "1"
        );
        let foundTasik = programs.filter(
          (program) =>
            program.campus == "Politeknik LP3I Kampus Tasikmalaya" &&
            program.status == "1"
        );
        let foundVokasi = programs.filter(
          (program) =>
            program.campus == "LP3I Tasikmalaya" && program.status == "1"
        );
        setUtama(foundUtama);
        setTasik(foundTasik);
        setVokasi(foundVokasi);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const toggleAbout = () => {
    setAbout(!showAbout);
  };

  const toggleProgram = () => {
    setProgram(!showProgram);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    getPrograms();
  }, []);

  return (
    <>
      <div>
        <nav className="bg-cyan-700 text-white text-xs py-3">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <LanguageSwitcher />
                <span className="hidden md:inline">
                  <i className="fa-solid fa-phone" /> (0265)311766
                </span>
                <a
                  href={`/penerimaan-mahasiswa`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-whatsapp" /> 0813-1360-8558
                </a>
              </div>
              <div className="flex gap-3">
                <a href={`/uppm`}>UPPM</a>
                <a href={`/suggestion`}>{t("suggestion")}</a>
                <a
                  href="https://brosur.politekniklp3i-tasikmalaya.ac.id/"
                  target="_blank"
                  className="hidden"
                  rel="noreferrer"
                >
                  Brosur Digital
                </a>
                <a
                  href="https://virtualkampus.politekniklp3i-tasikmalaya.ac.id/"
                  target="_blank"
                  className="hidden md:inline"
                  rel="noreferrer"
                >
                  {t("virtual")}
                </a>
              </div>
            </div>
          </div>
        </nav>
        <header className="container mt-3 px-4 mx-auto text-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:flex-wrap">
            <div className="flex justify-between items-center">
              <span>
                <a href={`/`}>
                  <img
                    loading="lazy"
                    src={lp3i}
                    width="200px"
                    alt="Politeknik LP3I Kampus Tasikmalaya"
                  />
                </a>
              </span>
              <span className="text-3xl cursor-pointer mx-2 md:hidden block">
                <button
                  id="navbarMenu"
                  onClick={toggleNavbar}
                  type="button"
                  className="p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  <i className="fa-solid fa-bars" />
                </button>
              </span>
            </div>
            {isNavbarOpen && (
              <div
                className="w-full md:w-auto transition duration-200 ease-in-out"
                data-attribute={0}
                id="navbar-dropdown"
              >
                <ul className="flex flex-col mt-3 p-3 border border-gray-100 rounded-lg md:flex-row md:items-center md:flex-wrap md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                  <li>
                    <a
                      href={`/`}
                      className="block md:inline py-2 px-4 text-gray-900 md:hover:text-cyan-700 md:p-0"
                    >
                      {t("home")}
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={toggleAbout}
                      className="flex relative items-center justify-between w-full py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-800 md:p-0 md:w-auto"
                    >
                      {t("about")}
                      {showAbout ? (
                        <i className="ml-2 fa-solid fa-chevron-up" />
                      ) : (
                        <i className="ml-2 fa-solid fa-chevron-down" />
                      )}
                    </button>
                    {showAbout && (
                      <div className="z-10 absolute mt-3 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                        <ul className="py-2 text-sm text-gray-900">
                          <li>
                            <a
                              href={`/about`}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {t("what")}
                            </a>
                          </li>
                          <li>
                            <a
                              href={`/branding`}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {t("Branding")}
                            </a>
                          </li>
                          <li>
                            <a
                              href={`/organization`}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {t("organization")}
                            </a>
                          </li>
                          <li>
                            <a
                              href={`/facilities`}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {t("facility")}
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li>
                    <button
                      onClick={toggleProgram}
                      className="flex relative items-center justify-between w-full py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-800 md:p-0 md:w-auto"
                    >
                      {t("program")}
                      {showProgram ? (
                        <i className="ml-2 fa-solid fa-chevron-up" />
                      ) : (
                        <i className="ml-2 fa-solid fa-chevron-down" />
                      )}
                    </button>
                    {showProgram && (
                      <div className="z-10 absolute mt-3 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-72">
                        {tasikPrograms.length > 0 && (
                          <>
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                              <div className="font-medium truncate">
                                Politeknik LP3I Kampus Tasikmalaya
                              </div>
                            </div>
                            <ul className="py-2 text-sm text-gray-900">
                              {tasikPrograms.map((tasik, i) => (
                                <li
                                  key={i}
                                  className="flex items-center px-4 hover:bg-gray-100 gap-2"
                                >
                                  <i className="fa-regular fa-circle-dot"></i>
                                  <a
                                    href={`/programs/` + tasik.uuid}
                                    className="block pr-4 py-2"
                                  >
                                    {tasik.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                        {utamaPrograms.length > 0 && (
                          <>
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                              <div className="font-medium truncate">
                                Kampus Utama
                              </div>
                            </div>
                            <ul className="py-2 text-sm text-gray-900">
                              {utamaPrograms.map((utama, i) => (
                                <li
                                  key={i}
                                  className="flex items-center px-4 hover:bg-gray-100 gap-2"
                                >
                                  <i className="fa-regular fa-circle-dot"></i>
                                  <a
                                    href={`/programs/` + utama.uuid}
                                    className="block pr-4 py-2"
                                  >
                                    {utama.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                        {vokasiPrograms.length > 0 && (
                          <>
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                              <div className="font-medium truncate">
                                LP3I Tasikmalaya
                              </div>
                            </div>
                            <ul className="py-2 text-sm text-gray-900">
                              {vokasiPrograms.map((vokasi, i) => (
                                <li
                                  key={importScripts}
                                  className="flex items-center px-4 hover:bg-gray-100 gap-2"
                                >
                                  <i className="fa-regular fa-circle-dot"></i>
                                  <a
                                    href={`/programs/` + vokasi.uuid}
                                    className="block pr-4 py-2"
                                  >
                                    {vokasi.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    )}
                  </li>
                  <li>
                    <a
                      href={`/students`}
                      className="block md:inline py-2 px-4 text-gray-900 md:hover:text-cyan-800 md:p-0"
                    >
                      {t('ormawa')}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/career`}
                      className="block md:inline py-2 px-4 text-gray-900 md:hover:text-cyan-800 md:p-0"
                    >
                      {t('career')}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/reguler-sore`}
                      className="block md:inline py-2 px-4 text-gray-900 md:hover:text-cyan-800 md:p-0"
                    >
                      {t('employee')}
                    </a>
                  </li>
                  <div className="py-2 md:p-0">
                    <a
                      role="button"
                      target="_blank"
                      href="https://pmb.politekniklp3i-tasikmalaya.ac.id/"
                      className="transition ease-in-out duration-300 block md:inline-block py-2 px-4 text-white bg-cyan-700 hover:bg-cyan-800 rounded"
                      rel="noreferrer"
                    >
                      <i className="fa-solid fa-headset mr-1" /> PMB Online
                    </a>
                  </div>
                </ul>
              </div>
            )}
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
