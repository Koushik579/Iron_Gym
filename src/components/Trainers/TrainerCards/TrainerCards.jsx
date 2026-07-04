import "./TrainerCards.css";

import rajiv from "../../../assets/images/rajiv.jpeg";
import dipak from "../../../assets/images/dipak.jpg";
import salini from "../../../assets/images/salini.jpg";

import {
    FaStar,
    FaCheckCircle
} from "react-icons/fa";

function TrainerCards(){
    const trainers=[
        {
            id:1,
            name:"Rajiv Singh",
            image:rajiv,
            designation:"Strength Coach",
            experience:"10+ Years",
            rating:"4.9",
            speciality:[
                "Strength Training",
                "Muscle Building",
                "Powerlifting"
            ]
        },
        {
            id:2,
            name:"Dipak Kumar",
            image:dipak,
            designation:"CrossFit Coach",
            experience:"8+ Years",
            rating:"4.8",
            speciality:[
                "CrossFit",
                "HIIT",
                "Weight Loss"
            ]
        },

        {
            id:3,
            name:"Salini Thakur",
            image:salini,
            designation:"Yoga Instructor",
            experience:"7+ Years",
            rating:"5.0",
            speciality:[
                "Yoga",
                "Mobility",
                "Meditation"
            ]
        }
    ];

    return(
        <section className="trainer_section">
            <div className="section_heading">
                <span className="section_tag">
                    OUR TRAINERS
                </span>
                <h2>
                    Meet The Professionals
                </h2>
                <p>
                    Passionate coaches dedicated to helping you
                    become stronger every day.
                </p>
            </div>
            <div className="trainer_grid">
                {trainers.map((trainer)=>(

                    <div
                        className="trainer_card"
                        key={trainer.id}
                    >
                        <img
                            src={trainer.image}
                            alt={trainer.name}
                        />
                        <div className="trainer_info">
                            <h3>
                                {trainer.name}
                            </h3>
                            <span>
                                {trainer.designation}
                            </span>
                            <div className="rating">
                                <FaStar />
                                {trainer.rating}
                            </div>
                            <div className="experience">
                                Experience
                                <strong>
                                    {trainer.experience}
                                </strong>
                            </div>
                            <div className="speciality">
                                {
                                    trainer.speciality.map((item,index)=>(
                                        <p key={index}>
                                            <FaCheckCircle />
                                            {item}
                                        </p>
                                    ))
                                }
                            </div>
                            <button>
                                Book Session
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TrainerCards;