import React from 'react'
import LogoImage from '../../Image/Logo White.png'
import './Foter.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
        <div className="footer">
          <div className="row">
            <div className="col-md-6 map-section text-center" >
              <div className="map"></div>
            </div>
            <div className="col-md-6 logo-section ">
              <div className="logo-image text-center">

                    <img src={LogoImage} alt="logo" />
              </div>
              <div className="address text-white ">
                  <small>Address : Addis Ababa, Ethiopia, bole sub city woreda 03 house # 4/100 </small><br />
                  <small>+251928101112 , +251116671474</small><br />
                  <small>Info@Southgate.com</small>
              </div>
            </div>
          </div>
          <div className="buttons-section text-center text-white">
            <div className="buttons-contain d-flex">
 
            <ul className='first-group'>
              <li className='home-link'><Link to = '/'><a href="">Home</a></Link></li>
              <li className='rooms-link'><Link to = '/rooms'><a href="">Rooms</a></Link></li>
            </ul>
            <ul className='second-group'>
              <li className='plaza-link'><Link to = '/plaza'><a href="">Plaza</a></Link></li>
              <li className='gallery-link'><Link to = '/gallery'><a href="">Gallery</a></Link></li>
            </ul>
            </div>

          </div>
          <div className="copy-right text-white text-center">
            <small>Southgate Hotel Apartment © 2022.</small><br />
            <small>All Right Reserved</small>
          </div>
        </div>
    
    
    </>
  )
}

export default Footer