import React from 'react'
import './PlazaItem.css'

const PlazaItem = (props) => {
  return (
    <>
        <div className="plaza-item text-center atmospheric">
            <h3>{props.item_title}</h3>
            <p>{props.status}</p>
        </div>
    
    
    </>
  )
}

export default PlazaItem