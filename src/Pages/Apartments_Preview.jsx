import React from 'react'
import './Apartments_Preview.css'
import Header from '../Components/Header/Header'
import Logo from '../Image/Logo White.png'
import Next from '../Icons/Arrow 1.png'
import Back from '../Icons/Arrow 2.png'
import Footer from '../Components/Footer/Footer'
import { useLocation } from 'react-router-dom'

const Apartments_Preview = (props) => {
  const location = useLocation();
  return (
    <>
      <div className="apartments_banner">
      {location.pathname !== "/" && <Header logo = {Logo}/>}
          <div className="buttons-line">
                <div className="counter">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              <div className="control-buttons">
                <button className='back'><img src={Back} alt="" /></button>
                <button className='next'> <img src={Next} alt="" /></button>
              </div>
          </div>
      </div>
      <div className="apartment-title text-center atmospheric">
        <h3 className='pb-3'>{props.title}</h3>
        <h4>{props.sub_title}</h4>
      </div>

      <div className="row options-section ">
        <div className="col-md-6 options-left">
          <div className="options-container">

            <p>{props.option_1}</p>
            <p>{props.option_2}</p>
            <p>{props.option_3}</p>
            <p>{props.option_4}</p>
            <p>{props.option_5}</p>
            <p>{props.option_6}</p>
            <p>{props.option_7}</p>
            <p>{props.option_8}</p>
          </div>
        </div>
        <div className="col-md-6 options-right">
          <div className="options-container">
            <p>{props.option_9}</p>
            <p>{props.option_10}</p>
            <p>{props.option_11}</p>
            <p>{props.option_12}</p>
            <p>{props.option_13}</p>
            <p>{props.option_14}</p>
            <p>{props.option_15}</p>
          </div>
        </div>
        
      </div>

      <div className="button row text-center">
        <div className="col-md-6 left-button">
            <button className="book-now "><strong>Book Now</strong></button>
        </div>
        <div className="col-md-6 right-button"><button className="back-button book-now"><strong>Back</strong></button></div>
      </div>

    </>
  )
}

export default Apartments_Preview