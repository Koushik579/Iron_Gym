import { Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Bmi from './pages/Bmi';
import About from './pages/About'; 
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Trainers from './pages/Trainers';
import Programs from './pages/Programs';
import NotFound from './pages/NotFound';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Footer from "./components/Footer/Footer";

function App(){
  return(
    <>
      <Navbar/>
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