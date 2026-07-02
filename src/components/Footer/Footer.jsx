import logo from './irongymlogo.png';
import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope
} from "react-icons/fa";

import './Footer.css';

function Footer() {
    return (
        <footer className="footer">

            <div className="footer_logo">
                <img src={logo} alt="Iron Gym Logo" />
                <p>
                    Transform your body. Build your strength.
                    Join Iron Gym and achieve your fitness goals
                    with professional trainers and world-class equipment.
                </p>
            </div>
            <div className="foot_body">
                <div className="body_card">
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/programs">Programs</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/bmi">BMI Calculator</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="body_card">

                    <h4>Programs</h4>

                    <p>Strength Training</p>
                    <p>Cardio Fitness</p>
                    <p>CrossFit</p>
                    <p>Yoga</p>
                    <p>Personal Training</p>

                </div>

                <div className="body_card">
                    <h4>Contact</h4>
                    <p>
                        <FaMapMarkerAlt />
                        Rajkot, Gujarat, India
                    </p>
                    <p>
                        <FaPhoneAlt />
                        +91 98765 43210
                    </p>
                    <p>
                        <FaEnvelope />
                        contact@irongym.com
                    </p>
                    <p>
                        Mon - Sat
                    </p>
                    <p>
                        6:00 AM - 10:00 PM
                    </p>
                </div>

                <div className="body_card">
                    <h4>Follow Us</h4>
                    <div className="social_links">
                        <a href="#">
                            <FaFacebookF />
                        </a>
                        <a href="#">
                            <FaInstagram />
                        </a>
                        <a href="#">
                            <FaYoutube />
                        </a>
                        <a href="#">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            <div className="bottom_footer">
                <p>
                    © 2026 Iron Gym. All Rights Reserved.
                </p>
                <div className="bottom_links">
                    <a href="#">Privacy Policy</a>
                    <span>|</span>
                    <a href="#">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;