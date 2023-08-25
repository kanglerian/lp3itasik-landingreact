import React, { useState, useEffect, lazy, Suspense } from 'react'
import axios from 'axios'
import urljoin from 'url-join'

const Navbar = lazy(() => import('../components/Navbar'))
const ArticleComponent = lazy(() => import('../components/ArticleComponent'))
const Footer = lazy(() => import('../components/Footer'))
const Banner = lazy(() => import('../components/Banner'))

const renderLoader = () =>
  <div role="status" className='flex justify-center items-center h-screen'>
    <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>;

const UppmPage = () => {
  const [penelitian, setPenelitian] = useState([]);
  const [pkm, setPkm] = useState([]);
  const [kkn, setKkn] = useState([]);

  const [dataPenelitian, setDataPenelitian] = useState([]);
  const [luaranPenelitian, setLuaranPenelitian] = useState([]);
  const [dataPkm, setDataPkm] = useState([]);
  const [luaranPkm, setLuaranPkm] = useState([]);

  const [books, setBook] = useState([]);

  const getPanduanUPPM = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/panduanuppm`)
      .then((response) => {
        let panduanPenelitian = response.data.filter(panduan => panduan.status == '1' && panduan.type == 'Penelitian');
        let panduanPkm = response.data.filter(panduan => panduan.status == '1' && panduan.type == 'PKM');
        let panduanKkn = response.data.filter(panduan => panduan.status == '1' && panduan.type == 'KKN');
        setPenelitian(panduanPenelitian);
        setPkm(panduanPkm);
        setKkn(panduanKkn);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const getDataPenelitian = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/datapenelitianuppm`)
      .then((response) => {
        let data = response.data.filter(content => content.status == '1');
        setDataPenelitian(data);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const getDataPkm = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/datapkmuppm`)
      .then((response) => {
        let data = response.data.filter(content => content.status == '1');
        setDataPkm(data);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const getLuaranPkm = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/luaranpkmuppm`)
      .then((response) => {
        let data = response.data.filter(content => content.status == '1');
        setLuaranPkm(data);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const getLuaranPenelitian = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/luaranpenelitianuppm`)
      .then((response) => {
        let data = response.data.filter(content => content.status == '1');
        setLuaranPenelitian(data);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const getBooks = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/bookchapter`)
      .then((response) => {
        let data = response.data.filter(content => content.status == '1');
        setBook(data);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const listPanduanPenelitian = penelitian.map((panpen, i) =>
    <div key={i} className='flex flex-col md:flex-row items-center justify-center gap-5'>
      <div className='w-full md:w-1/2 order-2 md:order-none'>
        <iframe
          title="Embedded PDF"
          width="100%"
          height="550px"
          src={urljoin('https://dashboard.politekniklp3i-tasikmalaya.ac.id/', panpen.file_uppm)}
          className='rounded-xl'
        ></iframe>
      </div>
      <div className='w-full md:w-1/2 space-y-3 order-1 md:order-none'>
        <h2 className='font-bold text-2xl text-gray-800'>{panpen.title}</h2>
        <p className='text-base text-gray-700'>{panpen.description}</p>
      </div>
    </div>
  );

  const listPanduanPkm = pkm.map((panpkm, i) =>
    <div key={i} className='flex flex-col md:flex-row items-center justify-center gap-5'>
      <div className='w-full md:w-1/2 order-2 md:order-none'>
        <iframe
          title="Embedded PDF"
          width="100%"
          height="550px"
          src={urljoin('https://dashboard.politekniklp3i-tasikmalaya.ac.id/', panpkm.file_uppm)}
          className='rounded-xl'
        ></iframe>
      </div>
      <div className='w-full md:w-1/2 space-y-3 order-1 md:order-none'>
        <h2 className='font-bold text-2xl text-gray-800'>{panpkm.title}</h2>
        <p className='text-base text-gray-700'>{panpkm.description}</p>
      </div>
    </div>
  );

  const listPanduanKkn = kkn.map((pankkn, i) =>
    <div key={i} className='flex flex-col md:flex-row items-center justify-center gap-5'>
      <div className='w-full md:w-1/2 order-2 md:order-none'>
        <iframe
          title="Embedded PDF"
          width="100%"
          height="550px"
          src={urljoin('https://dashboard.politekniklp3i-tasikmalaya.ac.id/', pankkn.file_uppm)}
          className='rounded-xl'
        ></iframe>
      </div>
      <div className='w-full md:w-1/2 space-y-3 order-1 md:order-none'>
        <h2 className='font-bold text-2xl text-gray-800'>{pankkn.title}</h2>
        <p className='text-base text-gray-700'>{pankkn.description}</p>
      </div>
    </div>
  );

  const hiddenSection = (content) => {
    let data = content.target.dataset.name;
    switch (data) {
      case 'penelitian':
        $('#penelitian').show();
        $('#pkm').hide();
        $('#kkn').hide();
        $('#book').hide();
        $('#article').hide();
        break;
      case 'pkm':
        $('#penelitian').hide();
        $('#pkm').show();
        $('#kkn').hide();
        $('#book').hide();
        $('#article').hide();
        break;
      case 'kkn':
        $('#penelitian').hide();
        $('#pkm').hide();
        $('#kkn').show();
        $('#book').hide();
        $('#article').hide();
        break;
      case 'book':
        $('#penelitian').hide();
        $('#pkm').hide();
        $('#kkn').hide();
        $('#book').show();
        $('#article').hide();
        break;
      case 'article':
        $('#penelitian').hide();
        $('#pkm').hide();
        $('#kkn').hide();
        $('#book').hide();
        $('#article').show();
        break;
    }
  }

  useEffect(() => {
    getPanduanUPPM();
    getDataPenelitian();
    getDataPkm();
    getLuaranPkm();
    getLuaranPenelitian();
    getBooks();
  }, []);

  return (
    <Suspense fallback={renderLoader()}>
      <Navbar />
      <style dangerouslySetInnerHTML={{ __html: "\n\t#media p a {\n\t\tcolor: #0284c7;\n\t\ttext-decoration: underline;\n\t}\n" }} />
      <section className="container mx-auto my-8">
        <Banner locate="U" />
        <nav className="my-5 mx-4 bg-slate-100 border border-slate-200 py-3 rounded-xl" data-aos-delay="100">
          <ul className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 text-sm text-center px-4">
            <li onClick={hiddenSection} data-name="penelitian" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">Penelitian</li>
            <li onClick={hiddenSection} data-name="pkm" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">PKM</li>
            <li onClick={hiddenSection} data-name="kkn" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">KKN</li>
            <li onClick={hiddenSection} data-name="book" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">Book Chapter</li>
            <li onClick={hiddenSection} data-name="article" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg text-slate-900" role="button">Media Massa</li>
          </ul>
        </nav>

        {/* Penelitian */}
        <section id="penelitian" className="container mx-auto px-4 my-8 space-y-10">
          {listPanduanPenelitian}
          <hr />
          {/* Data Penelitian */}
          <div className='space-y-5'>
            <div className='text-center space-y-1'>
              <h2 className='font-bold text-2xl text-gray-900'>Data Penelitian</h2>
              <p className='text-base text-gray-700'>Berikut ini adalah data-data penelitian:</p>
            </div>
            <div class="relative overflow-x-auto h-72 shadow-sm border border-gray-200 rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      No
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Penulis
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Judul Artikel
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Tahun Terbit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    dataPenelitian.length > 0 ? (
                      dataPenelitian.map((dataPen, i) =>
                        <tr class="bg-white border-b">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {i + 1}
                          </th>
                          <td class="px-6 py-4">
                            {dataPen.writter}
                          </td>
                          <td class="px-6 py-4 text-wrap">
                            {dataPen.title}
                          </td>
                          <td class="px-6 py-4">
                            {dataPen.year}
                          </td>
                        </tr>
                      )
                    ) : (
                      <tr>
                        <td colSpan={4} className='text-center py-4 px-6'>Data penelitian belum tersedia.</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
          <hr />
          {/* Luaran Penelitian */}
          <div className='space-y-5'>
            <div className='text-center space-y-1'>
              <h2 className='font-bold text-2xl text-gray-900'>Luaran Penelitian</h2>
              <p className='text-base text-gray-700'>Berikut ini adalah luaran penelitian:</p>
            </div>
            <div class="relative overflow-x-auto h-72 shadow-sm border border-gray-200 rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      No
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Penulis
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Judul Artikel
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Tahun Terbit
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Jenis Publikasi
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Index Jurnal
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Artikel
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    luaranPenelitian.map((luarPen, i) =>
                      <tr class="bg-white border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          {i + 1}
                        </th>
                        <td class="px-6 py-4">
                          {luarPen.writter}
                        </td>
                        <td class="px-6 py-4">
                          {luarPen.title}
                        </td>
                        <td class="px-6 py-4">
                          {luarPen.year}
                        </td>
                        <td class="px-6 py-4">
                          {luarPen.publication}
                        </td>
                        <td class="px-6 py-4">
                          {luarPen.indexjurnal}
                        </td>
                        <td class="px-6 py-4">
                          <a href={luarPen.link} className='bg-lp3i-100 hover:bg-lp3i-200 px-3 py-1 rounded-lg text-white'>
                            <i className="fa-solid fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PKM */}
        <section id="pkm" className="hidden container mx-auto px-4 my-8 space-y-10">
          {listPanduanPkm}
          <hr />
          {/* Data PKM */}
          <div className='space-y-5'>
            <div className='text-center space-y-1'>
              <h2 className='font-bold text-2xl text-gray-900'>Data PKM</h2>
              <p className='text-base text-gray-700'>Berikut ini adalah data-data PKM:</p>
            </div>
            <div class="relative overflow-x-auto h-72 shadow-sm border border-gray-200 rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      No
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Pengabdian Kepada Masyarakat
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Tahun
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    dataPkm.length > 0 ? (
                      dataPkm.map((datPk, i) =>
                        <tr class="bg-white border-b">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {i + 1}
                          </th>
                          <td class="px-6 py-4 text-wrap">
                            {datPk.title}
                          </td>
                          <td class="px-6 py-4">
                            {datPk.year}
                          </td>
                        </tr>
                      )
                    ) : (
                      <tr>
                        <td colSpan={3} className='text-center py-4 px-6'>Data PKM belum tersedia.</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
          <hr />
          {/* Luaran PKM */}
          <div className='space-y-5'>
            <div className='text-center space-y-1'>
              <h2 className='font-bold text-2xl text-gray-900'>Luaran PKM</h2>
              <p className='text-base text-gray-700'>Berikut ini adalah luaran PKM:</p>
            </div>
            <div class="relative overflow-x-auto h-72 shadow-sm border border-gray-200 rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="row" class="px-6 py-3">
                      No
                    </th>
                    <th scope="row" class="px-6 py-3">
                      Pengabdian Kepada Masyarakat
                    </th>
                    <th scope="row" class="px-6 py-3">
                      Tahun Terbit
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Luaran PKM
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    luaranPkm.map((luarPk, i) =>
                      <tr class="bg-white border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          {i + 1}
                        </th>
                        <td class="px-6 py-4">
                          {luarPk.title}
                        </td>
                        <td class="px-6 py-4">
                          {luarPk.year}
                        </td>
                        <td class="px-6 py-4">
                          {luarPk.link.startsWith('http') || luarPk.link.startsWith('https') ? (
                            <a
                              href={luarPk.link}
                              target="_blank"
                              className="bg-lp3i-100 hover:bg-lp3i-200 px-3 py-1 rounded-lg text-white"
                            >
                              <i className="fa-solid fa-eye"></i>
                            </a>
                          ) : (
                            luarPk.link
                          )}
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* KKN */}
        <section id="kkn" className="hidden container mx-auto px-4 my-8">
          {listPanduanKkn}
        </section>

        {/* Book */}
        <section id="book" className="hidden container mx-auto px-4 my-8">
          <div className='space-y-5'>
            <div className='text-center space-y-1'>
              <h2 className='font-bold text-2xl text-gray-900'>Book Chapter</h2>
              <p className='text-base text-gray-700'>Berikut ini adalah data-data Book Chapter:</p>
            </div>
            <div class="relative overflow-x-auto h-72 shadow-sm border border-gray-200 rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="row" class="px-6 py-3">
                      No
                    </th>
                    <th scope="row" class="px-6 py-3">
                      Nama Dosen
                    </th>
                    <th scope="row" class="px-6 py-3">
                      Judul Buku
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Penerbit
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Tahun
                    </th>
                    <th scope="col" class="px-6 py-3">
                      ISBN
                    </th>
                    <th scope="col" class="px-6 py-3">
                      No. Reg HKI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    books.length > 0 ? (
                      books.map((book, i) =>
                        <tr class="bg-white border-b">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {i + 1}
                          </th>
                          <td class="px-6 py-4">
                            {book.name}
                          </td>
                          <td class="px-6 py-4">
                            {book.title}
                          </td>
                          <td class="px-6 py-4">
                            {book.pamedal}
                          </td>
                          <td class="px-6 py-4">
                            {book.year}
                          </td>
                          <td class="px-6 py-4">
                            {book.isbn}
                          </td>
                          <td class="px-6 py-4">
                            {book.hki}
                          </td>
                        </tr>
                      )
                    ) : (
                      <tr>
                        <td colSpan={7} className='text-center py-4 px-6'>Data buku belum tersedia.</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id='article' className="hidden container mx-auto px-4 my-8">
          <ArticleComponent/>
        </section>

      </section>

      <Footer />
    </Suspense>
  )
}

export default UppmPage;