import React from "react";
import "./Apartments.css";
import Towels from "../../Image/deluxe and studio apartment 2.png";
import StudioApartments from '../../Image/standard room d 4.png'
import RoomsAndSuites from "../RoomsAndSuites/RoomsAndSuites";

const Apartments = () => {
  return (
    <>
      <div className="row apartments-section">
        <div className="col-md-6 towels-section">
            <img src={Towels} alt="" className="towels"/>
          <div className="ad text-center">
            <h3>PLANNED AND BUILT TO MEET YOUR SETTLEMENT CONSOLIDATION</h3>
          </div>
          <div className="options">
            <h4>YOU CAN CHOOSE BETWEEN OUR</h4>
            <ul>
              <li>
                Three room loft open and lavish expanded with a benefit quarter
              </li>
              <li>
                Culminate studio where you'll appreciate all in a
                more rearranged form and temperate way whereas having it all
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 apartments-section">
            <RoomsAndSuites 
                title = "STUDIO APARTMENTS" 
                image = {StudioApartments}
                option1 = "Californi king bed 2*2"
                option2 = "Ednamall roundabout view"
                option3 = "Groceries, Silverware, Chainware"
                option4 = "Refrigerator"
                option5 = "Flat TV 43inch"
                option6 = "Coffe table with chairs"
            />
        </div>
      </div>
    </>
  );
};

export default Apartments;
