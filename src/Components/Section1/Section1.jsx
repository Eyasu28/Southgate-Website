import React from 'react'
import './Section1.css'
import Header from '../Header/Header'

const Section1 = () => {
return (
    <>
        <div className="banner">
            <div className="py-0 banner-right">
                <div className="header">
                <Header/>
                </div>
                <div className='great-vibes'>
                    <div className="great-text text-center atmospheric">
                        <h2> THE URBAN <span className='great'>Vibes</span></h2>
                        <h2>WITH A COMFORTABLE  </h2>
                        <h2>STAY, FEEL THE <span className='great'>Moment</span></h2>
                    </div>
                </div>
            </div>
            
            <div className="banner-image" >
                <div className="button-container">
                    <div className="contact-button text-center"><a href="#">Contact</a></div>
                </div>
                <div className="book-now-section">
                    <p className="book-now-header m-0">Book now with the best price</p>
                    <div className="book-now-white">
                        <div className="book-now-options upcoming-events">
                            <strong className="book-now-subtitle ">Upcoming Events</strong>
                            <p className="book-now-text">View our upcoming events to be held in our property</p>
                        </div>
        
                        <div className="book-now-options get-offers">
                            <strong className="book-now-subtitle">Get offers </strong>
                            <p className="book-now-text">Subscribe and get our offers and discounts</p>
                        </div>
                        <div className="button-section text-center">
                            <button className="book-now">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="book-now-section-mobile text-center">
                    <div className="book-now-white">
                        <div className="text-center book-now-header">
                        Book now with the best price
                        </div>
                        <div className="book-now-options upcoming-events">
                            <strong className="book-now-subtitle ">Upcoming Events</strong>
                            <br />
                            <small className="book-now-text">View our upcoming events to be held in our property</small>
                        </div>
        
                        <div className="book-now-options get-offers">
                            <strong className="book-now-subtitle">Get offers </strong>
                            <br />
                            <small className="book-now-text">Subscribe and get our offers and discounts</small>
                        </div>
                        <div className="button-section text-center">
                            <button className="book-now">Book Now</button>
                        </div>
                    </div>
                </div>

        <div className="banner-about">
            <div className=" about-southgate atmospheric text-center">
                <h3>ABOUT SOUTHGATE</h3>
                <h3>HOTEL APARTMENT</h3>
            </div>
            <div className="about-southgate-text">
                <small> South Gate hotel apartment is a twelve</small>
                <br />
                <small>storey extravagance lodging flat settled within the middle of</small>
                <br />
                <small>bole medhanialem in  front of Morning star building, Addis Ababa as it</small>
                <br />
                <small> were 2km absent from bole International airport terminal around</small>
                <br />
                <small>the zone known as Edna Mall on bole road.</small>
            </div>
        </div>
    </>
  )
}

export default Section1