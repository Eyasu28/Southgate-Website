import React from 'react'
import './Contact.css'
import Header from '../Header/Header'
import Logo from '../../Image/Logo Main.png'
import { useLocation } from 'react-router-dom'


const Contact = () => {
  const location = useLocation();
  return (
    <>
    {location.pathname !== "/" && <Header logo = {Logo}/>}

        <div className="contact-section">
          <div className="contact text-center atmospheric">
            <h3>Contact</h3>
          </div>
          <form action="" className="row contact-form text-center">
            <div className="col-md-6 form-left text-right">
              <input type="text" placeholder='Name'/>
              <br />
              <input type="email" placeholder='Email'/>
              <br />
              <input type="number" placeholder='Phone'/>
              
            </div>
            <div className="col-md-6 form-right text-center">
              <textarea placeholder='Message' rows='5' cols='40' />
              <br />
              <input type="submit" value='Submit' className='book-now submit-button'/>
            </div>
          </form>

        </div>
    </>
  )
}

export default Contact