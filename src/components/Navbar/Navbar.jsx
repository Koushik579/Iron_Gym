import { NavLink } from "react-router-dom";
import logo from './irongymlogo.png'
import './Navbar.css'
function Navbar(){
    return(
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav_links">
                <NavLink 
                    to='/'
                    className={({ isActive }) => (isActive ? "active" : "")}>
                        Home
                </NavLink>
                <NavLink 
                    to='/about'
                    className={({ isActive }) => (isActive ? "active" : "")}>
                        About
                </NavLink>
                <NavLink 
                    to="/programs" 
                    className={({ isActive }) => (isActive ? "active" : "")}>
                        Programs
                </NavLink>
                <NavLink 
                    to="/trainers"
                    className={({ isActive }) => (isActive ? "active" : "")}>
                        Trainers
                </NavLink>
                <NavLink 
                    to="/pricing"
                    className={({ isActive }) => (isActive ? "active" : "")}>
                        Pricing
                </NavLink>
                <NavLink 
                    to="/bmi"
                    className={({ isActive }) => (isActive ? "active" : "")}>
                        BMI
                </NavLink>
                <NavLink 
                    to="/contact"
                    className={({ isActive }) => (isActive ? "active" : "")}>
                        Contact
                </NavLink>
            </div>
            <div className="join">
                <button>Join Now</button>
            </div>
        </nav>
    )
}
export default Navbar;