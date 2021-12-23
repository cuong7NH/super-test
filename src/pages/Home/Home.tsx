import React from 'react'

import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import AboutMe from '../../components/AboutMe/AboutMe'
import Skills from '../../components/Skills/Skills'
import Qualification from '../../components/Qualification/Qualification'
import Services from '../../components/Services/Services'
import Portfolio from '../../components/Portfolio/Portfolio'
import Contact from '../../components/Contact/Contact'
import MenuMobile  from '../../components/MenuMobile/MenuMobile'
import Footer from '../../components/Footer/Footer'
import ButtonGoTopWrapper from '../../components/Button/ButtonGoTop'

const Home = () => {

  return (

    <div>
      <Header />
      <MenuMobile />
      <Banner />
      <AboutMe />
      <Skills />
      <Qualification/>
      <Services/>
      <Portfolio/>
      <Contact />
      <Footer/>
      <ButtonGoTopWrapper/>
    </div>
  )
}

export default Home