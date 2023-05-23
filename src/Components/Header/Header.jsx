import React from 'react'
import LogoBlack from '../../Image/Logo Main.png'
import './Header.css'

const Header = () => {
  return (
    <>
        <nav className="header">
          <div className="header__logo">
            <img src={LogoBlack} alt="" className='logo'/> 
          </div>
            <div className="header__nav">
            ☰
              <ul>
                <li><a className='active' href="">Home</a></li>
                <li><a href="">Rooms</a></li>
                <li><a href="">Plaza</a></li>
                <li><a href="">Gallery</a></li>
              </ul>
            </div>

        </nav>
    
    
    </>
  )
}

export default Header