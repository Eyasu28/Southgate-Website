import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
        <div className="contact-section">
          <div className="contact text-center atmospheric">
            <h3>Contact</h3>
          </div>
          <form action="" className="row contact-form text-center">
            <div className="col-md-6 form-left">
              <input type="text" placeholder='Name'/>
              <br />
              <input type="email" placeholder='Email'/>
              
            </div>
            <div className="col-md-6 form-right text-center">
              <input type="number" placeholder='Phone'/>
              <br />
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