import React, { useState } from "react";
import "./Apartments.css";
import Logo from '../../Image/Logo Main.png'
import Towels from "../../Image/deluxe and studio apartment 2.png";
import Back from '../../Icons/Arrow 2.png'
import Next from '../../Icons/Arrow 1.png'
import Discover from '../../Icons/Arrow 6.png'
import StudioApartments from '../../Image/standard room d 4.png'
import SuiteApartments from '../../Image/standard room d 5.png'
import DeluxeApartments from '../../Image/standard room d 1.png'
import StandardRooms from '../../Image/standard room d 2.png'
import TwinRooms from '../../Image/standard room d 3.png'
import RoomsAndSuites from "../RoomsAndSuites/RoomsAndSuites";
import Header from "../Header/Header";
import { Link, useLocation } from "react-router-dom";

const Apartments = () => {

      const location = useLocation();
      const [count, setCount] = useState(0)
    
      const [rooms, SetRooms] = useState([
        {
          link : 'studioapartments',
          title : "STUDIO APARTMENTS" ,
          image : StudioApartments,
          option1 : "California king bed 2*2",
          option2 : "Ednamall roundabout view",
          option3 : "Groceries, Silverware, Chainware",
          option4 : "Refrigerator",
          option5 : "Flat TV 43inch",
          option6 : "Coffe table with chairs",
          option7 : null
          
        },
        {
          link : '404',
          title : "SUITE APARTMENTS" ,
          image : SuiteApartments,
          option1 : "King size Beds 1.8*2",
          option2 : "Separate BedRoom",
          option3 : "Separate BedRoom and Kitchen Area ",
          option4 : "Sofa sets Possible for Extra Bed Adjustments",
          option5 : "City View",
          option6 : "Fully Equiped Kitchen",
          option7 : null
          
        },
        {
          link : '404',
          title : "DELUXE APARTMENTS" ,
          image : DeluxeApartments,
          option1 : "California king bed 2*2",
          option2 : "Edna mall roundabout view",
          option3 : "Fully equipped kitchen",
          option4 : "Crockeries, silverware, chinaware",
          option5 : "Refriferator",
          option6 : "Coffee table with chairs",
          option7 : null          
        },
        {
          link : '404',
          title : "STANDARD ROOMS" ,
          image : StandardRooms,
          option1 : "queen size bed 1.5*2",
          option2 : "partial airport or no view",
          option3 : "Refriferator",
          option4 : "Flat tv 43inch",
          option5 : "Dressing table with mirror",
          option6 : "Coffe table with chairs",
          option7 : 'Cupboard'    
        },
        {
          link : '404',
          title : "TWIN ROOMS" ,
          image : TwinRooms,
          option1 : "single bed .90*2",
          option2 : "no view",
          option3 : "Refrigerator",
          option4 : "Flat tv 43inch",
          option5 : "Dressing table with mirror",
          option6 : "Cupboard",
          option7 : "Luggae rack"  
        },
      ]);
      function handleNext(){
        setCount(prevCount => prevCount < 3 ? prevCount+1 : 4)
          const newRoom = [...rooms];
          // console.log(newRoom[count].title );
          // setRooms(newRoom);
     
      }
      function handlePrev(){
        setCount(prevCount => prevCount > 0 ? prevCount-1 : 0)
        const newRoom = [...rooms];
      }
      // console.log(newRoom[count].title );
   
      

  return (
    <>
  
    {location.pathname !== "/" && <Header logo = {Logo}/>}
      
      <div className="row apartments-section">
        <div className="col-md-6 towels-section">
            <div className="text-center">
            <img src={Towels} alt="" className="towels"/>
            </div>
          <div className="ad text-center atmospheric pb-5 pt-4">
            <h4>PLANNED AND BUILT TO MEET YOUR SETTLEMENT CONSOLIDATION</h4>
          </div>
            <h5 className="text-center options-header pt-5 atmospheric">YOU CAN CHOOSE BETWEEN OUR</h5>
          <div className="options pt-3">
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
        <div className="col-md-6 rooms-and-suites">
            <div className="rooms-and-suites-container d-flex justify-content-between  mx-5 mb-5">
                  <div className="sub-header atmospheric">
                   <h4>Rooms</h4>
                   <h4>& Suites</h4>
                  </div>
                  <div className="butons d-flex">
                    <div className="back-buton mx-3">
                      <button onClick={handlePrev}><img src={Back} alt="" /></button>
                    </div>
                      <div className="next-buton">
                        <button onClick={handleNext}><img src={Next} alt="" /></button>
                      </div>
                  </div>
            </div>
            <RoomsAndSuites 
                // key ={index}
                title = {rooms[count].title}
                image = {rooms[count].image}
                option1 = {rooms[count].option1}
                option2 = {rooms[count].option2}
                option3 = {rooms[count].option3}
                option4 = {rooms[count].option4}
                option5 = {rooms[count].option5}
                option6 = {rooms[count].option6}
                option7 = {rooms[count].option7}
            />
            <div className=' text-center buttons'>
                <button className='book-now text-white m-3'><strong>Book Now</strong></button>
                <Link to = {`/${rooms[count].link}`}className='text-decoration-none'> <strong className='discover-room'>Discover Rooom</strong> <span><img src={Discover} alt="" /></span></Link>
          
            </div>
        </div>
      </div>
    </>
  );
};

export default Apartments;
