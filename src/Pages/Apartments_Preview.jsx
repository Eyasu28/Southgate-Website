import React from 'react'
import Header from '../Components/Header/Header'

const Apartments_Preview = (props) => {
  return (
    <>
      <div className="apartments_banner">
      <Header className = "fixed-top"/>
          <div className="control-buttons">

          </div>
      </div>
      <div className="apartment-title text-center atmospheric">
        <h3>{props.title}</h3>
        <h4>{props.sub_title}</h4>
      </div>

      <div className="row options-section ">
        <div className="col-md-6 options-left">
            <p>{props.option_1}</p>
            <p>{props.option_2}</p>
            <p>{props.option_3}</p>
            <p>{props.option_4}</p>
            <p>{props.option_5}</p>
            <p>{props.option_6}</p>
            <p>{props.option_7}</p>2
            <p>{props.option_8}</p>
        </div>
        <div className="col-md-6 options-right">
            <p>{props.option_9}</p>
            <p>{props.option_10}</p>
            <p>{props.option_11}</p>
            <p>{props.option_12}</p>
            <p>{props.option_13}</p>
            <p>{props.option_14}</p>
            <p>{props.option_15}</p>
        </div>
      </div>

      <div className="buttons row text-center">
        <div className="col-md-6 ">
            <button className="book-now ">Book Now</button>
        </div>
        <div className="col-md-6"><button className="back">Back</button></div>
      </div>

    </>
  )
}

export default Apartments_Preview