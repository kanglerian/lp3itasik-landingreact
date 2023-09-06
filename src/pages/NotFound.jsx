import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import NotFoundAnimate from '../assets/notfound.json'

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="max-w-lg flex flex-col justify-center items-center space-y-3 px-4 md:px-0">
        <Player
          autoplay
          loop
          src={NotFoundAnimate}
          style={{ height: 300, width: 300 }}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
        <div className="text-center space-y-3">
          <h2 className="font-bold text-2xl">Perbaikan Situs Sedang Berlangsung</h2>
          <p className="text-gray-600 text-sm">Kami meminta maaf atas ketidaknyamanan ini. Saat ini, kami sedang melakukan
            perbaikan dan peningkatan pada website kami untuk memberikan pengalaman yang lebih baik kepada pengunjung
            kami. Kami berharap dapat segera menghadirkan kembali layanan yang lengkap dan fungsional dalam waktu dekat.
            Terima kasih atas kesabaran dan pengertian Anda.</p>
        </div>
        <footer>
          <a href={`/`} className="inline-block text-sm bg-gray-100 text-gray-900 px-3 py-1 rounded-lg"><i className="fa-solid fa-circle-chevron-left" /> Kembali ke halaman awal</a>
        </footer>
      </div>
    </div>

  )
}

export default NotFound