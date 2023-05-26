import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Section1 from './Components/Section1/Section1';
import OurServices from './Components/OurServices/OurServices';
import Apartments from './Components/Apartments/Apartments';
import ThePlaza from './Components/ThePlaza/ThePlaza';
import Gallery from './Components/Gallery/Gallery';
import LAstComponent from './Components/LastComponent/LAstComponent';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import StudioApartments from './Pages/Studio Apartments/StudioApartments';
import Home from './Components/Home/Home';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
  return (
    <>
        
      <div className='App'>
          <Routes>
            <Route path = '/' element = {<Home />}/>
            <Route path = '/Rooms' element = {<Apartments />}/>
            <Route path = '/plaza' element = {<ThePlaza />}/>
            <Route path = '/gallery' element = {<Gallery />}/>
            <Route path = '/contact' element = {<Contact />}/>
            <Route path = '/studioapartments' element = {<StudioApartments />}/>
            <Route path = '/404' element = {<PageNotFound />}/>
          </Routes>
          <Footer/>
       </div>








        
        {/* <StudioApartments /> */}
    </>
  );
}

export default App;
