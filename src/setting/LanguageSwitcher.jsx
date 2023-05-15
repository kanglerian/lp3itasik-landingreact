import React, { useState, useEffect } from 'react'

import IDFlag from '../assets/flag/id.gif'
import ENFlag from '../assets/flag/en.gif'

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('id');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    } else {
      setCurrentLanguage('id');
    }
  }, []);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'id' : 'en';
    setCurrentLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    window.location.reload();
  };
  return (
    <div>
      <button onClick={handleChangeLanguage} className="flex relative items-center justify-start w-auto py-2 text-white rounded">
        {currentLanguage == 'en' ? (
          <div className='flex items-center gap-2'>
            <i class="fa-solid fa-repeat"></i>
            <img src={IDFlag} alt="Indonesia" className="border border-white inline-block w-8 rounded mr-2" />
          </div>
        ) : (
          <div className='flex items-center gap-2'>
            <i class="fa-solid fa-repeat"></i>
            <img src={ENFlag} alt="Indonesia" className="border border-white inline-block w-8 rounded mr-2" />
          </div>
        )}
      </button>
    </div>
  )
}

export default LanguageSwitcher