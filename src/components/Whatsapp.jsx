import React from 'react'
import Lottie from 'lottie-react';
import whatsappAnimation from '../assets/whatsapp.json';

const Whatsapp = () => {
  return (
    <div style={{ position: 'fixed', bottom: 0, right: 0, zIndex: 50 }}>
      <a href="https://api.whatsapp.com/send?phone=6281313608558" target='_blank'><Lottie animationData={whatsappAnimation} style={{ width: 120, height: 120 }} /></a>
    </div>
  )
}

export default Whatsapp