import React from 'react'
import LeftImage from '../../Image/twin room b.png'
import MainIage from '../../Image/suite apartment a.png'
import RightImage from '../../Image/Deluxe &studio apartment c.png'
import './Gallery.css'

const Gallery = () => {
  return (
    <>
    
        <div className="gallery">
            <div className="gallery-title text-center atmospheric">
              <h3>GALLERY</h3>
            </div>
            <div className="gallery-images d-flex">
                {/* <div clas sName='left-image'><img src={LeftImage} alt="" /></div> */}
                <div className='main-image'><img src={MainIage} alt="" /></div>
                {/* <div className='right-image'><img src={RightImage} alt="" /></div> */}
            </div>
        </div>
    
    
    
    </>
  )
}

export default Gallery