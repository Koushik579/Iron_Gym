import "./WhyCoach.css";

import coachImage from "../../../assets/images/trainerBenefits.png";

import {
    FaUserTie,
    FaClipboardCheck,
    FaHeartbeat,
    FaChartLine,
    FaUsers,
    FaAward
} from "react-icons/fa";

function WhyCoach() {

    const benefits = [

        {
            icon: <FaUserTie />,
            title: "Certified Trainers",
            description:
                "Our coaches are certified professionals with years of practical experience."
        },

        {
            icon: <FaClipboardCheck />,
            title: "Personalized Plans",
            description:
                "Every member receives a workout plan tailored to their goals and fitness level."
        },

        {
            icon: <FaHeartbeat />,
            title: "Safe Training",
            description:
                "We prioritize proper technique and injury prevention in every session."
        },

        {
            icon: <FaChartLine />,
            title: "Progress Tracking",
            description:
                "Regular assessments help you stay on track and measure improvement."
        },

        {
            icon: <FaUsers />,
            title: "One-on-One Coaching",
            description:
                "Receive dedicated guidance and motivation throughout your fitness journey."
        },

        {
            icon: <FaAward />,
            title: "Proven Results",
            description:
                "Our coaching methods have helped thousands achieve lasting fitness results."
        }
    ];

    return (
        <section className="why_coach">
            <div className="coach_image">
                <img
                    src={coachImage}
                    alt="Coach Training"
                />
            </div>
            <div className="coach_content">
                <span className="section_tag">
                    WHY TRAIN WITH US
                </span>
                <h2>
                    Expert Coaching That Delivers Results
                </h2>
                <p>
                    Our trainers do more than demonstrate exercises.
                    They motivate, educate, and support you throughout
                    your fitness journey, ensuring every workout brings
                    you closer to your goals.
                </p>
                <div className="coach_benefits">
                    {benefits.map((item, index) => (
                        <div
                            className="coach_benefit"
                            key={index}
                        >
                            <div className="coach_icon">
                                {item.icon}
                            </div>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyCoach;