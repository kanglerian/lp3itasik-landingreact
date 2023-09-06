import React, { useState, useEffect } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import moment from 'moment-timezone';
import axios from 'axios'
import emptyAnimate from '../assets/empty.json'

const ArticleComponent = () => {

  const currentLanguage = localStorage.getItem('language') || 'id';
  const [articles, setArticle] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const getArticle = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/articles`)
      .then((response) => {
        let articles = response.data.filter(article => article.status == '1')
        setArticle(articles)
        setIsLoaded(true)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const listArticle = articles.map((article, i) =>
    <div className="item w-96 h-auto border-8 border-white shadow rounded-lg ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-300" key={i} data-aos-delay={i * 100}>
      <div style={{
        width: '100%',
        paddingTop: '56.25%', // Rasio 16:9
        backgroundImage: `url('https://dashboard.politekniklp3i-tasikmalaya.ac.id/${article.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} className="article-image rounded-lg"></div>
      <div className="p-4">
        <h5 className="font-bold text-base mb-1 text-left text-gray-700">{article.title}</h5>
        <div className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: article.description.slice(0, 100) + "..." }}></div>
        <div className="flex justify-between items-center mt-3">
          <a href={`/articles/` + article.uuid} role="button" className="bg-cyan-600 text-white text-xs py-1 px-3 rounded-md">
            {currentLanguage == 'en' ? 'More detail' : 'Selengkapnya'}
          </a>
          <span className="block bg-gray-200 text-gray-500 text-xs py-1 px-3 rounded-md">{moment.tz(article.date, 'Asia/Jakarta').format('LL')}</span>
        </div>
      </div>
    </div>
  )

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <section className="my-14">
      <header className="mb-7 text-center">
        <a href={`/articles`}>
          <h1 className="text-3xl font-bold text-gray-700 hover:text-gray-800 underline underline-offset-8">
            {currentLanguage == 'en' ? 'Article' : 'Artikel'}
          </h1>
        </a>
      </header>
      <div className="container mx-auto px-4">
        {isLoaded ? (
          <>
            {articles.length > 0 ? (
              <div className="w-full flex justify-center flex-wrap gap-5">
                {listArticle}
              </div>
            ) : (
              <div className="h-[500px] text-center flex justify-center items-center overflow-x-hidden">
                <Player
                  autoplay
                  loop
                  src={emptyAnimate}
                  style={{ height: 500, width: 500 }}
                >
                  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
              </div>
            )}
          </>
        ) : (
          <div role="status" className="flex items-center justify-center h-56 md:h-[550px] bg-gray-100 rounded-lg animate-pulse">
            <i className="fa-regular fa-images fa-3x text-gray-200"></i>
          </div>
        )}
      </div>
    </section>
  )
}

export default ArticleComponent