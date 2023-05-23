import React from 'react'
import './Rooms&Suites.css'

const RoomsAndSuites = (props) => {
  return (
    <>
     <div className="sub-header atmospheric">
       <h4>Rooms</h4>
       <h4>& Suites</h4>
      </div>
      
     <div className="text-center">

      <div className='image-container'>
        <img src={props.image} alt=""  />
      </div>

      <div className='list-items'>
        <h4>{props.title}</h4>
        <ul>
          <li>{props.option1}</li>
          <li>{props.option2}</li>
          <li>{props.option3}</li>
          <li>{props.option4}</li>
          <li>{props.option5}</li>
          <li>{props.option6}</li>
          <li>{props.option7}</li>
        </ul>
      </div>
      
      <div className='d-flex text-center buttons'>
          <button className='book-now text-white'>Book Now</button>
          <button className='discover-room'>Discover Room</button>
      </div>

     </div>
    </>
  )
}

export default RoomsAndSuites