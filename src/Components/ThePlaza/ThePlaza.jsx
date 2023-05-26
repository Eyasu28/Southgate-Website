import React from 'react'
import './ThePlaza.css'
import PlazaItem from './PlazaItems/PlazaItem'
import Header from '../Header/Header'
import Logo from '../../Image/Logo Main.png'
import { useLocation } from 'react-router-dom'


const ThePlaza = () => {
    const location = useLocation();
    return (
    <>
        {location.pathname !== "/" && <Header logo = {Logo}/>}
        <div className="the-plaza">
        <div className="text-center title atmospheric">
            <h3>THE PLAZA</h3>
        </div>


        <div className="row">
            <div className='col-md-8 plaza-1 plaza-items '> <PlazaItem 
                                        item_title = "WE CONVEY UP TO STANDARD AND ADD UP TO NECESSITIES LIKE"/> </div>
            <div className='col-md-4 plaza-2 plaza-items text-white'> <PlazaItem item_title = " BUSINESS CENTER"/> </div>
        </div>


        <div className="row">
            <div className='col-md-4 plaza-3 plaza-items text-white'> <PlazaItem item_title = "BAR" status = "Coming Soon"/> </div>
            <div className='col-md-8 plaza-4 plaza-items text-white'> <PlazaItem item_title = "RESTURANT"/> </div>
        </div>
        <div className="row">
            <div className='col-md-4 plaza-5 plaza-items text-white'> <PlazaItem item_title = "LAUNDRY"/> </div>
            <div className='col-md-4 plaza-6 plaza-items text-white'> <PlazaItem item_title = "WIFI & LAN"/> </div>
            <div className='col-md-4 plaza-7 plaza-items text-white'> <PlazaItem item_title = "CATERING"/> </div>
        </div>
        <div className="row">
            <div className='col-md-8 plaza-8 plaza-items text-white'> <PlazaItem item_title = "ROOM SERVICE"/> </div>
            <div className='col-md-4 plaza-9 plaza-items text-white'> <PlazaItem item_title = "SHUTTLE"/> </div>
         </div>


        <div className="text-center">
            <button className="view-button text-white">View More</button>
        </div>

        </div>


    </>
  )
}

export default ThePlaza