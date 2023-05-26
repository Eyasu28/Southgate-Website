import React from 'react'
import './PageNotFound.css'
import Logo from '../../Image/Logo Main.png'
import { useLocation } from 'react-router-dom'
import Header from '../../Components/Header/Header'

const PageNotFound = () => {
    const location = useLocation();
  return (
    <div >
        {location.pathname !== "/" && <Header logo = {Logo}/>}
        <h1 className='page-not-found text-center'>
        Page Not Found
        </h1>
    </div>
  )
}

export default PageNotFound