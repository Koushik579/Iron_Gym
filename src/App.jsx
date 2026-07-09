import { Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Bmi from './pages/Bmi';
import About from './pages/About'; 
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Trainers from './pages/Trainers';
import Programs from './pages/Programs';
import NotFound from './pages/NotFound';
import NavBar from './components/Navbar/Navbar';
import SideBar from './components/SideBar/SideBar';
import ScrollToTop from "./components/ScrollToTop";
import './App.css';
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App(){
  const [isOpen, setOpen] = useState(false);
  function toggleSideBar(togg){
    setOpen(togg);
  }
  return(
    <>
      <ScrollToTop />
      <NavBar
        isOpen={isOpen}
        toggle={toggleSideBar}
      />
      <SideBar 
        isOpen={isOpen}
        toggle={toggleSideBar}
      />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/bmi' element={<Bmi/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/trainers' element={<Trainers/>}/>
        <Route path='/programs' element={<Programs/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;