import React from 'react'
import LeftImage from '../../Image/twin room b.png'
import MainIage from '../../Image/suite apartment a.png'
import RightImage from '../../Image/Deluxe &studio apartment c.png'
import './Gallery.css'
import Header from '../Header/Header'
import Logo from '../../Image/Logo Main.png'
import { useLocation } from 'react-router-dom'

const Gallery = () => {
  const location = useLocation();
  return (
    <>
        {location.pathname !== "/" && <Header logo = {Logo}/>}
        <div className="gallery">
            <div className="gallery-title text-center atmospheric">
              <h3>GALLERY</h3>
            </div>
            <div className="gallery-images d-flex">
                <div className='left-image'></div>
                <div className='main-image'></div>
                <div className='right-image'></div>
            </div>
        </div>
    
    
    
    </>
  )
}

export default Gallery