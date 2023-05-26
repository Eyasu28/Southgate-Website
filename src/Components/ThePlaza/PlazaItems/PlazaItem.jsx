import React from 'react'
import './PlazaItem.css'

const PlazaItem = (props) => {
  return (
    <>
        <div className="plaza-item text-center ">
            <h3 className='atmospheric'>{props.item_title}</h3>
            <p>{props.status}</p>
        </div>
    
    
    </>
  )
}

export default PlazaItem