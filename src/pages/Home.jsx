import '../App.css';
import '../styles/Home.css'
import homeTopVideo from '../assets/videos/IronGymIntro.mp4';
import logo from '../assets/images/irongymlogo.png'
import { Link } from 'react-router-dom';
import {
    FaDumbbell,
    FaUserTie,
    FaClock,
    FaAppleAlt,
    FaUsers,
    FaTrophy
} from "react-icons/fa";
import chestpress from '../assets/videos/chestpress.mp4';
import legpress from '../assets/videos/legpress.mp4';
import cardio from '../assets/videos/cardio.mp4';
import rajiv from '../assets/images/rajiv.jpeg';
import dipak from '../assets/images/dipak.jpg';
import salini from '../assets/images/salini.jpg';

function Home(){
    const features = [
        {
            title: "Modern Equipment",
            icon: <FaDumbbell/>,
            description:
                "Train with premium machines and free weights designed to maximize performance and safety."
        },
        {
            title: "Expert Trainers",
            icon: <FaUserTie/>,
            description:
                "Our certified trainers create personalized workout plans and help you stay motivated."
        },
        {
            title: "Flexible Hours",
            icon: <FaClock/>,
            description:
                "Open early morning until late evening to fit your busy schedule."
        },
        {
            title: "Nutrition Guidance",
            icon: <FaAppleAlt/>,
            description:
                "Receive nutrition advice that complements your workouts and helps you achieve faster results."
        },
        {
            title: "Supportive Community",
            icon: <FaUsers/>,
            description:
                "Train with a motivating community that encourages you every step of your fitness journey."
        },
        {
            title: "Proven Results",
            icon: <FaTrophy/>,
            description:
                "Thousands of members have transformed their health and confidence at Iron Gym."
        }
    ];

    const programs = [
        {
            title: "Weight Loss",
            video: cardio,
            description:
                "Burn calories and improve endurance with expert-guided cardio workouts."
        },
        {
            title: "Strength Training",
            video: legpress,
            description:
                "Build strength using progressive resistance and professional coaching."
        },
        {
            title: "Muscle Building",
            video: chestpress,
            description:
                "Increase muscle mass with scientifically designed workout routines."
        }
    ];
    const coaches = [
        {
            id: 1,
            name: "Rajiv Singh",
            photo: rajiv,
            specialization: "Strength Coach",
            experience: "10+ Years",
            rating: 4.9
        },
        {
            id: 2,
            name: "Dipak Kumar",
            photo: dipak,
            specialization: "CrossFit Coach",
            experience: "8+ Years",
            rating: 4.8
        },
        {
            id: 3,
            name: "Salini Thakur",
            photo: salini,
            specialization: "Yoga & Cardio",
            experience: "7+ Years",
            rating: 5.0
        }
    ];
    return(
        <div className="main_body">
            <div className="header">
                <video
                    src={homeTopVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                <div className="tint"></div>

                <div className="hero_content">
                    <img src={logo} alt="logo" className='hero_icon'/>
                    <h1>TRANSFORM YOUR BODY</h1>
                    <p>Build strength. Build confidence.</p>
                    <div className='btn_div'>
                        <button className='btn'>Join Now</button>
                        <Link to='/programs'><button className="btn">Programs</button></Link>
                    </div>
                </div>
            </div>
            <div className="why">
                <div className="why_heading">
                    <h1>Why Choose Iron Gym</h1>
                    <p>
                        Train smarter, get stronger, and achieve your fitness goals
                        with expert guidance, state-of-the-art equipment, and
                        a supportive fitness community.
                    </p>
                </div>
                <div className="why_cards">
                    {features.map((feature) => (
                        <div className="why_card" key={feature.title}>
                            <div className="icon">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="programs">
                <div className="why_heading">
                    <h1>Featured Programs</h1>
                    <p>
                        Train smarter, get stronger, and achieve your fitness goals
                        with expert guidance, state-of-the-art equipment, and
                        a supportive fitness community.
                    </p>
                </div>
                <div className="program_cards">
                    {programs.map((program) => (
                       <div className="program_card" key={program.title}>
                            <video
                                src={program.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                            <div className="program_content">
                                <h3>{program.title}</h3>
                                <p>{program.description}</p>

                                <button className="program_btn">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="trainers">
                <div className="section_heading">
                    <h1>Meet Our Expert Trainers</h1>
                    <p>
                        Our certified trainers combine years of experience,
                        personalized coaching, and unmatched dedication to
                        help you achieve your fitness goals.
                    </p>
                </div>
                <div className="coach_cards">
                    {coaches.map((coach) => (
                        <div className="coach_card" key={coach.id}>
                            <img src={coach.photo} alt={coach.name} />
                            <div className="coach_content">
                                <h3>{coach.name}</h3>
                                <span>{coach.specialization}</span>
                                <p>{coach.experience}</p>
                                <div className="rating">
                                    ⭐ {coach.rating}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Home;