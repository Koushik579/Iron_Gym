import "./Benefits.css";

import benefitImg from "../../../assets/images/programBenefits.png";

import {
    FaCheckCircle,
    FaDumbbell,
    FaAppleAlt,
    FaUserTie,
    FaClock,
    FaChartLine
} from "react-icons/fa";

function Benefits(){

    const benefits = [

        {
            icon:<FaUserTie />,
            title:"Certified Trainers",
            description:"Learn from experienced and certified fitness professionals."
        },

        {
            icon:<FaDumbbell />,
            title:"Modern Equipment",
            description:"Train with premium strength and cardio machines."
        },

        {
            icon:<FaAppleAlt />,
            title:"Nutrition Guidance",
            description:"Get personalized diet recommendations to maximize results."
        },

        {
            icon:<FaClock />,
            title:"Flexible Timings",
            description:"Morning and evening batches to fit your schedule."
        },

        {
            icon:<FaChartLine />,
            title:"Progress Tracking",
            description:"Monitor your strength, weight, and performance every month."
        },

        {
            icon:<FaCheckCircle />,
            title:"Customized Workout Plans",
            description:"Programs tailored to your fitness goals and experience."
        }
    ];

    return(
        <section className="benefits">
            <div className="benefits_image">
                <img
                    src={benefitImg}
                    alt="Benefits"
                />
            </div>
            <div className="benefits_content">
                <span className="section_tag">
                    WHY CHOOSE OUR PROGRAMS
                </span>
                <h2>
                    Everything You Need To Achieve Your Goals
                </h2>
                <p>
                    Our programs combine expert coaching, premium
                    equipment, and scientifically designed training
                    methods to help you achieve faster and safer results.
                </p>
                <div className="benefit_list">
                    {benefits.map((item,index)=>(
                        <div
                            className="benefit_item"
                            key={index}
                        >
                            <div className="benefit_icon">
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

export default Benefits;