import React from 'react'
import './Rooms&Suites.css'
import Back from '../../Icons/Arrow 2.png'
import Next from '../../Icons/Arrow 1.png'
import Discover from '../../Icons/Arrow 6.png'
import { Link } from 'react-router-dom'

const RoomsAndSuites = (props) => {
  return (
    <>
    

      
     <div className="text-center"></div>

      <div className=' text-center'>
        <img src={props.image} alt="" className='image-container' />
      </div>

      <div className='list-items'>
        <h4 className='atmospheric pt-5 pb-3'>{props.title}</h4>
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
      
     

    
    </>
  )
}

export default RoomsAndSuites