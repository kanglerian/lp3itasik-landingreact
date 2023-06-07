import React, { useEffect, lazy, Suspense } from 'react'
const Navbar = lazy(() => import('../components/Navbar'))
const Footer = lazy(() => import('../components/Footer'))

import kepalaKampus from '../assets/img/kepalakampus.png'
import bannerDefault from '../assets/img/banner-default.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

const renderLoader = () =>
  <div role="status" className='flex justify-center items-center h-screen'>
    <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>;

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
  }, []);
  return (
    <Suspense fallback={renderLoader()}>
      <Navbar />
      <section className="my-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="basis-1/3">
              <img src={kepalaKampus} alt className="bg-white p-2 rounded-2xl shadow" data-aos="fade-up" />
            </div>
            <div className="basis-1/2">
              <h5 className="font-bold" data-aos="fade-up" data-aos-delay="100">Sambutan Kepala Kampus</h5>
              <h3 className="font-bold text-3xl mt-2" data-aos="fade-up" data-aos-delay="200">H. Rudi Kurniawan, ST., MM.</h3>
              <p className="mt-4 text-sm md:text-base text-gray-700" data-aos="fade-up" data-aos-delay="300">
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
              <h3 className="font-bold text-3xl mt-2" data-aos="fade-up" data-aos-delay="100">Sejarah LP3I</h3>
              <p className="mt-4 text-sm md:text-base text-gray-700" data-aos="fade-up" data-aos-delay="200">
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
              <img src={bannerDefault} alt className="bg-white p-2 rounded-2xl shadow" data-aos="fade-up" />
            </div>
          </div>
        </div>
      </section>
      <hr className="my-8" />
      <section className="my-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="basis-1/3">
              <img src={bannerDefault} alt className="bg-white p-2 rounded-2xl shadow" data-aos="fade-up" />
            </div>
            <div className="basis-1/2">
              <h3 className="font-bold text-3xl mt-2" data-aos="fade-up" data-aos-delay="100">Apa itu Pendidikan Vokasi?</h3>
              <p className="mt-4 text-sm md:text-base text-gray-700" data-aos="fade-up" data-aos-delay="200">
                Pendidikan vokasi adalah jenis pendidikan yang didesain untuk memberikan keterampilan praktis dan pengetahuan yang relevan secara langsung dengan dunia kerja. Pendidikan vokasi berfokus pada persiapan siswa untuk memasuki lapangan kerja tertentu atau industri tertentu setelah menyelesaikan program pendidikan mereka.
                <br /><br />
                Tujuan dari pendidikan vokasi adalah untuk menghasilkan lulusan yang siap bekerja dan memiliki keterampilan yang diperlukan untuk memenuhi kebutuhan pasar kerja. Pendidikan vokasi mencakup berbagai bidang seperti teknologi, bisnis, pariwisata, kuliner, desain, otomotif, keperawatan, dan banyak lagi.
                <br /><br />
                Program pendidikan vokasi biasanya menggabungkan pembelajaran praktis di lingkungan kerja atau laboratorium dengan pembelajaran teori yang relevan. Siswa diberikan kesempatan untuk mengembangkan keterampilan praktis dan terlibat dalam kegiatan nyata yang mirip dengan situasi kerja yang sebenarnya.
                <br /><br />
                Pendidikan vokasi diakui sebagai pilihan pendidikan yang berharga bagi individu yang ingin memasuki dunia kerja dengan keterampilan dan pengetahuan yang langsung dapat diterapkan. Hal ini juga dapat membuka peluang bagi siswa untuk berkarir di bidang yang mereka minati dan mendapatkan penghasilan yang layak.
              </p>
              {/* <a href="#" data-aos="fade-up" data-aos-delay="300" className="transition ease-in-out duration-300 inline-block py-2 px-4 text-sm mt-5 text-white bg-lp3i-200 hover:bg-lp3i-600 rounded">
                Selengkapnya
              </a> */}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
            <div className="basis-1/2">
              <h3 className="font-bold text-3xl mt-2" data-aos="fade-up" data-aos-delay="100">Pendidikan vokasi di LP3I seperti apa?</h3>
              <p className="mt-4 text-sm md:text-base text-gray-700" data-aos="fade-up" data-aos-delay="200">
                Pendidikan di LP3I memiliki fokus kepada latihan berbasis praktek (70% praktek, 30% teori) dan penempatan kerja. Program penempatan kerja kami salah satu yang terbaik di Indonesia. Di LP3I, mahasiswa berkualitas yang performanya sesuai persyaratan akan dibantu penempatan kerja hingga duduk di perusahaan.
              </p>
              {/* <a href="#" data-aos="fade-up" data-aos-delay="300" className="transition ease-in-out duration-300 inline-block py-2 px-4 text-sm mt-5 text-white bg-lp3i-200 hover:bg-lp3i-600 rounded">
                Selengkapnya
              </a> */}
            </div>
            <div className="basis-1/3">
              <img src={bannerDefault} alt className="bg-white p-2 rounded-2xl shadow" data-aos="fade-up" />
            </div>
          </div>
        </div>
      </section>
      <hr className="my-8" />
      <section className="my-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="basis-1/3">
              <img src={bannerDefault} alt className="bg-white p-2 rounded-2xl shadow" data-aos="fade-up" />
            </div>
            <div className="basis-1/2">
              <h3 className="font-bold text-3xl mt-2" data-aos="fade-up" data-aos-delay="100">Visi</h3>
              <p className="mt-4 text-sm md:text-base text-gray-700" data-aos="fade-up" data-aos-delay="200">
              Pada tahun 2031 ditingkat Asia menjadi institusi pendidikan tinggi vokasional yang mampu menjawab tantangan di era globalisasi dalam menghasilkan sumber daya manusia yang unggul dan berkompeten pada bidang keahlian.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
            <div className="basis-1/3">
              <img src={bannerDefault} alt className="bg-white p-2 rounded-2xl shadow" data-aos="fade-up" />
            </div>
            <div className="basis-1/2">
              <h3 className="font-bold text-3xl mt-2" data-aos="fade-up" data-aos-delay="100">Misi</h3>
              <ol className="ml-5 list-outside list-decimal mt-4 text-sm md:text-base text-gray-700 space-y-2" data-aos="fade-up" data-aos-delay="200">
                <li>Menyelenggarakan pendidikan yang berpusat  pada peserta didik, menggunakan pendekatan link and match serta mengoptimalkan pemanfaatan teknologi.</li>
                <li>Menyelenggarakan penelitian yang bermanfaat bagi pengembangan IPTEK dan kesejatraan masyarakat.</li>
                <li>Meningkatkan kualitas sistem penjamin mutu untuk menopang pencapaian institusi.</li>
                <li>Menyebarluaskan artikel hasil penelitian baik melalui forum ilmia maupun jurnal nasional dan internasional.</li>
                <li>Menyelenggarakan kegiatan pengabdian kepada masyarakat dalam rangka mengembangkan hasil penelitian yang berorientasi pada proses pemberdayaan masyarakat.</li>
                <li>Menyelenggarakan tata pamong yang mandiri, akuntabel dan transparan yang menjamin peningkatan kualitas berkelanjutan.</li>
                <li>Menyelenggarakan kerjasama dengan dunia usaha dan industri serta pengembangan jiwa kemandirian yang profesional dan berkarakter.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Suspense>
  )
}

export default About