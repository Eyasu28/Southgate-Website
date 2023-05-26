import React, { useRef } from 'react'
import {FaBars, FaTimes }  from 'react-icons/fa'
import LogoBlack from '../../Image/Logo Main.png'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
  
  const navRef = useRef();
  const showNavBar =  () => {
    navRef.current.classList.toggle('responsive_nav')
  }


  return (
    <>
        <header className="header">
          <div className="header__logo">
          <Link to = '/'><img src={props.logo} alt="" className='logo'/></Link>
             
          </div>
            <nav ref={navRef} className='header-nav'>
              <Link to="/">Home</Link>
              <Link to="/rooms">Rooms</Link>
              <Link to="/plaza">Plaza</Link>
              <Link to="/gallery">Gallery</Link>
              <button onClick={showNavBar} className='nav-btn nav-close-btn'>
                <FaTimes />
              </button>
            </nav>
            <button onClick={showNavBar} className='nav-btn'><FaBars /> </button>

        </header>
    
    
    </>
  )
}

export default Header