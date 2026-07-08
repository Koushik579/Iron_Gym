import { NavLink } from "react-router-dom";
import logo from './irongymlogo.png';
import close from '../../assets/icons/close.png';
import './SideBar.css';

function SideBar(props){ 
    return(
        <div className={`SideBar ${props.isOpen ? "open" : ""}`} >
            <nav>
                <button className="close_btn" onClick={() => props.toggle(false)}>
                    <img src={close} alt="Close" className="close_icon" />
                </button>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="Sidebar_links">
                    <NavLink 
                        to='/'
                        className={({ isActive }) => (isActive ? "active" : "")} onClick={()=> props.toggle(false)}>
                            Home
                    </NavLink>
                    <NavLink 
                        to='/about'
                        className={({ isActive }) => (isActive ? "active" : "")} onClick={()=> props.toggle(false)}>
                            About
                    </NavLink>
                    <NavLink 
                        to="/programs" 
                        className={({ isActive }) => (isActive ? "active" : "")} onClick={()=> props.toggle(false)}>
                            Programs
                    </NavLink>
                    <NavLink 
                        to="/trainers"
                        className={({ isActive }) => (isActive ? "active" : "")} onClick={()=> props.toggle(false)}>
                            Trainers
                    </NavLink>
                    <NavLink 
                        to="/pricing"
                        className={({ isActive }) => (isActive ? "active" : "")} onClick={()=> props.toggle(false)}>
                            Pricing
                    </NavLink>
                    <NavLink 
                        to="/bmi"
                        className={({ isActive }) => (isActive ? "active" : "")} onClick={()=> props.toggle(false)}>
                            BMI
                    </NavLink>
                    <NavLink 
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active" : "")} onClick={()=> props.toggle(false)}>
                            Contact
                    </NavLink>
                </div>
                <div className="join">
                    <button className="join_btn">Join Now</button>
                </div>
            </nav>
            <div className="sidebar_tint" onClick={()=> props.toggle(false)}></div>
        </div>
    );
}

export default SideBar;