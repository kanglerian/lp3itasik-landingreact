import React,{ lazy, Suspense } from 'react'
const Navbar = lazy(() => import('../components/Navbar'))
const Banner = lazy(() => import('../components/Banner'))
const Link = lazy(() => import('../components/Link'))
const Benefit = lazy(() => import('../components/Benefit'))
const Program = lazy(() => import('../components/Program'))
const Media = lazy(() => import('../components/Media'))
const Agenda = lazy(() => import('../components/Agenda'))
const Information = lazy(() => import('../components/Information'))
const Companies = lazy(() => import('../components/Companies'))
const Footer = lazy(() => import('../components/Footer'))
const Flyer = lazy(() => import('../components/Flyer'))

const renderLoader = () => <p>Loading</p>;

const Home = () => {
  return (
    <Suspense fallback={renderLoader()}>
      {/* <Flyer /> */}
      <Navbar />
      <Banner />
      <Link />
      <Benefit />
      <Program />
      <Media />
      <Agenda />
      <Information />
      <Companies />
      <Footer />
    </Suspense>
  )
}

export default Home