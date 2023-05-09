import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import kepalaKampus from '../assets/img/kepalakampus.png'
import bannerDefault from '../assets/img/banner-default.jpg'

const About = () => {
  return (
    <>
      <Navbar />
      <section className="my-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="basis-1/3">
              <img src={kepalaKampus} alt className="bg-white p-2 rounded-2xl shadow" />
            </div>
            <div className="basis-1/2">
              <h5 className="font-bold">Sambutan Kepala Kampus</h5>
              <h3 className="font-bold text-3xl mt-2">H. Rudi Kurniawan, ST., MM.</h3>
              <p className="mt-4 text-sm text-gray-700">
                Bahagia sekali rasanya kami bisa berada di tengah anda untuk menghadirkan sekelumit informasi mengenai lembaga pendidikan kami, yang selama ini telah turut membantu ribuan lulusannya meraih cita-cita menjadi profesional dibidangnya masing-masing.<br /><br />
                Kami merasa bertanggung jawab untuk menyebarkan informasi ini seluas-luasnya agar anda, para generasi muda , tidak keliru dalam menentukan pilihan tempat belajar lanjutan pasca SMA/K, yang kami inginkan agar anda mendapatkan pendidikan terbaik yang dapat dimanfaatkan sepenuhnya dalam pengembangan karir anda dan tentunya juga, peningkatan kualitas hidup Anda.<br /><br />
                Sebagai pelopor pendidikan profesi di Indonesia, yaitu pendidikan yang berorientasi dunia kerja tanpa meninggalkan kaidah-kaidah akademis, kami terus-menerus meningkatkan kualitas pendidikan dengan cara menyesuaikan kurikulum dengan mengikuti perkembangan yang terjadi di dunia kerja. Itulah yang menyebabkan daya saing lulusan LP3I di mata perusahaan selama ini tetap tinggi dan sulit untuk ditiru oleh lembaga lain. Era globalisasi sudah kita lalui, persaingan untuk terjun kedunia kerja akan semakin keras, kami siap menghadapinya! Bagaimana dengan anda?
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-8" />
      <section className="my-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="basis-1/2">
              <h3 className="font-bold text-3xl mt-2">Sejarah LP3I</h3>
              <p className="mt-4 text-sm text-gray-700">
                Fenomena tidak tertampungnya lulusan pendidikan tinggi, di dunia kerja bukan cerita milik era tahun 2000-an saja. Bila dirunut ke belakang, sebenarnya gejala tersebut sudah mulai muncul ke permukaan sekitar dua puluh tahun sebelumnya. Semakin hari semakin meresahkan masyarakat yang mengalami langsung. Namun hingga menjelang akhir 1980- an, belum ada tanda-tanda pihak yang merasa terpanggil untuk menyelesaikan masalah tersebut, baik pemerintah maupun swasta.
                <br /><br />
                Atas dasar itulah, maka Lembaga Pendidikan dan Pengembangan Profesi Indonesia (LP3I) didirikan pada 29 Maret 1989 dengan cabang pertama di Pasar Minggu Jakarta Selatan.
                <br /><br />
                Selanjutnya, bermula dari program kursus 6 bulan, LP3I kemudian mengembangkan sayapnya menjadi lembaga pendidikan profesi (1-2 tahun), yang berorientasi dunia kerja.
                <br /><br />
                Melihat keberhasilan model pendidikan yang dijalankan oleh LP3I, animo masyarakat pun semakin besar. Peserta didik bukan hanya penduduk ibukota saja, bahkan dari beberapa daerah yang cukup jauh. Oleh sebab itulah, LP3I membuka cabang-cabang hampir di seluruh kota-kota besar di Indonesia.
                <br /><br />
                Kiprah LP3I semakin diakui oleh masyarakat luas. Pengakuan dari dunia industri tercermin dari semakin banyaknya perusahaan yang merekrut lulusan LP3I. Sedangkan pengakuan lain datang dari dunia pendidikan dalam dan luar negeri melalui kerjasama transfer kredit dan konversi materi ajar.
              </p>
            </div>
            <div className="basis-1/3">
              <img src={bannerDefault} alt className="bg-white p-2 rounded-2xl shadow" />
            </div>
          </div>
        </div>
      </section>
      <hr className="my-8" />
      <section className="my-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="basis-1/3">
              <img src={bannerDefault} alt className="bg-white p-2 rounded-2xl shadow" />
            </div>
            <div className="basis-1/2">
              <h3 className="font-bold text-3xl mt-2">Apa itu Pendidikan Vokasi?</h3>
              <p className="mt-4 text-sm text-gray-700">
                Pendidikan vokasi adalah pendidikan tinggi yang menunjang pada penguasaan keahlian terapan. Lulusan pendidikan vokasi akan mendapatkan gelar vokasi/gelar ahli madya.
              </p>
              <a href="#" className="transition ease-in-out duration-300 inline-block py-2 px-4 text-sm mt-5 text-white bg-lp3i-200 hover:bg-lp3i-600 rounded">
                Selengkapnya
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
            <div className="basis-1/2">
              <h3 className="font-bold text-3xl mt-2">Pendidikan vokasi di LP3I seperti apa?</h3>
              <p className="mt-4 text-sm text-gray-700">
                Pendidikan di LP3I memiliki fokus kepada latihan berbasis praktek (70% praktek, 30% teori) dan penempatan kerja. Program penempatan kerja kami salah satu yang terbaik di Indonesia. Di LP3I, mahasiswa berkualitas yang performanya sesuai persyaratan akan dibantu penempatan kerja hingga duduk di perusahaan.
              </p>
              <a href="#" className="transition ease-in-out duration-300 inline-block py-2 px-4 text-sm mt-5 text-white bg-lp3i-200 hover:bg-lp3i-600 rounded">
                Selengkapnya
              </a>
            </div>
            <div className="basis-1/3">
              <img src={bannerDefault} alt className="bg-white p-2 rounded-2xl shadow" />
            </div>
          </div>
        </div>
      </section>
      <hr className="my-8" />
      <section className="my-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="basis-1/3">
              <img src={bannerDefault} alt className="bg-white p-2 rounded-2xl shadow" />
            </div>
            <div className="basis-1/2">
              <h3 className="font-bold text-3xl mt-2">Visi</h3>
              <p className="mt-4 text-sm text-gray-700">
                Pendidikan vokasi adalah pendidikan tinggi yang menunjang pada penguasaan keahlian terapan. Lulusan pendidikan vokasi akan mendapatkan gelar vokasi/gelar ahli madya.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
            <div className="basis-1/3">
              <img src={bannerDefault} alt className="bg-white p-2 rounded-2xl shadow" />
            </div>
            <div className="basis-1/2">
              <h3 className="font-bold text-3xl mt-2">Misi</h3>
              <ol className="ml-5 list-outside list-decimal mt-4 text-sm text-gray-700 space-y-2">
                <li>Mencetak sumber daya manusia yang siap kerja dengan kemampuan yang terampil dan profesional.</li>
                <li>Mencetak sumber daya manusia yang siap kerja dengan kemampuan yang terampil dan profesional.</li>
                <li>Mencetak sumber daya manusia yang siap kerja dengan kemampuan yang terampil dan profesional.</li>
                <li>Mencetak sumber daya manusia yang siap kerja dengan kemampuan yang terampil dan profesional.</li>
                <li>Mencetak sumber daya manusia yang siap kerja dengan kemampuan yang terampil dan profesional.</li>
                <li>Mencetak sumber daya manusia yang siap kerja dengan kemampuan yang terampil dan profesional.</li>
                <li>Mencetak sumber daya manusia yang siap kerja dengan kemampuan yang terampil dan profesional.</li>
                <li>Mencetak sumber daya manusia yang siap kerja dengan kemampuan yang terampil dan profesional.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About