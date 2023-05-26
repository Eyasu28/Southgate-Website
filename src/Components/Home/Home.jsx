import React from 'react'
import './Home.css'
import Section1 from '../Section1/Section1'
import OurServices from '../OurServices/OurServices'
import Apartments from '../Apartments/Apartments'
import ThePlaza from '../ThePlaza/ThePlaza'
import Gallery from '../Gallery/Gallery'
import LAstComponent from '../LastComponent/LAstComponent'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <>
        <Section1 />
        <OurServices/>
        <Apartments/>
        <ThePlaza/>
        <Gallery/>
        <LAstComponent/>
        <Contact/>
        
    </>
  )
}

export default Home