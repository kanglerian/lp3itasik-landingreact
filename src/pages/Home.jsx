import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Link from '../components/Link'
import Benefit from '../components/Benefit'
import Program from '../components/Program'
import Media from '../components/Media'
import Agenda from '../components/Agenda'
import Information from '../components/Information'
import Companies from '../components/Companies'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <> 
      <Navbar/>
      <Banner/>
      <Link/>
      <Benefit/>
      <Program/>
      <Media/>
      <Agenda/>
      <Information/>
      <Companies/>
      <Footer/>
    </>
  )
}

export default Home