import React from 'react'
import ListIcon from '../../Icons/Subtract.svg'
import './OurServices.css'

const OurServices = () => {
  return (
    <>
        <div className=" our-services-section pt-4  text-white">
            <h3 className='our-services-text atmospheric text-center mb-5'>OUR SERVICES</h3> 
            <div className="services-list">
            <div className="row our-services pt-4">
                <div className="col-md-6 first-list">
                    Hotel Apartment <br />
                    Shops
                </div>
                <div className="col-md-6">
                    Bar and Resturant <br />
                    Saloons
                </div>
            </div>
            </div>
        </div>   
    </>
  )
}

export default OurServices