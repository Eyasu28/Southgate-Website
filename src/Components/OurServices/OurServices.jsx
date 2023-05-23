import React from 'react'
import ListIcon from '../../Icons/Subtract.svg'
import './OurServices.css'

const OurServices = () => {
  return (
    <>
        <div className="text-center our-services-section pt-4  text-white">
            <h3 className='our-services-text atmospheric'>OUR SERVICES</h3> 
            <div className="row our-services">
                <div className="col-md-6 first-list">
                    <p>Hotel Apartment</p>
                    <p>Shops</p>
                </div>
                <div className="col-md-6">
                    <p>Bar and Resturant</p>
                    <p>Saloons</p>
                </div>
            </div>
        </div>   
    </>
  )
}

export default OurServices