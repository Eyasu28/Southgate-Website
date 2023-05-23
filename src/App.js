import logo from './logo.svg';
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

function App() {
  return (
    <>
        <Section1/>
        <OurServices/>
        <Apartments/>
        <ThePlaza/>
        <Gallery/>
        <LAstComponent/>
        <Contact/>
        <Footer/>
        {/* <StudioApartments /> */}
    </>
  );
}

export default App;
