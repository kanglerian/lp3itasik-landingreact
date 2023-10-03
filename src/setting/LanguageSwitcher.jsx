import React, { useState } from 'react'

import i18n from '../../i18n';

import IDFlag from '../assets/flag/id.gif'
import ENFlag from '../assets/flag/en.gif'

const LanguageSwitcher = () => {
  
  const [lang, setLang] = useState('id');
  const selectedLanguage = localStorage.getItem('language') || 'id';

  const setLanguage = () => {
    changeLanguage();
    setLang(lang == 'id' ? 'en' : 'id' )
    localStorage.setItem('language', lang);
    changeLanguage();
    changeLanguage();
  }

  const changeLanguage = () => {
    i18n.changeLanguage(selectedLanguage);
  }

  return (
    <div>
      <button onClick={setLanguage} className="flex relative items-center justify-start w-auto py-2 text-white rounded">
        {selectedLanguage == 'id' ? (
          <div className='flex items-center gap-2'>
            <i className="fa-solid fa-repeat"></i>
            <img loading="lazy" src={IDFlag} alt="Indonesia" className="border border-white inline-block w-8 rounded mr-2" />
          </div>
        ) : (
          <div className='flex items-center gap-2'>
            <i className="fa-solid fa-repeat"></i>
            <img loading="lazy" src={ENFlag} alt="Indonesia" className="border border-white inline-block w-8 rounded mr-2" />
          </div>
        )}
      </button>
    </div>
  )
}

export default LanguageSwitcher