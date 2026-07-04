import "./TrainingProcess.css";

import {
    FaClipboardList,
    FaDumbbell,
    FaChartLine,
    FaBullseye,
    FaUserCheck,
    FaTrophy
} from "react-icons/fa";

function TrainingProcess(){

    const steps = [

        {
            icon:<FaClipboardList />,
            title:"Consultation",
            description:
            "Meet our trainers to discuss your goals, fitness level, and medical history."
        },

        {
            icon:<FaUserCheck />,
            title:"Fitness Assessment",
            description:
            "We evaluate your strength, flexibility, endurance, and body composition."
        },

        {
            icon:<FaBullseye />,
            title:"Personalized Plan",
            description:
            "Receive a customized workout and nutrition plan designed specifically for you."
        },

        {
            icon:<FaDumbbell />,
            title:"Guided Training",
            description:
            "Train under expert supervision with proper technique and continuous motivation."
        },

        {
            icon:<FaChartLine />,
            title:"Progress Tracking",
            description:
            "Regular check-ins and assessments help measure your improvements."
        },

        {
            icon:<FaTrophy />,
            title:"Achieve Your Goals",
            description:
            "Build confidence, strength, and a healthier lifestyle with long-term results."
        }

    ];

    return(
        <section className="training_process">
            <div className="section_heading">
                <span className="section_tag">
                    HOW WE TRAIN
                </span>
                <h2>
                    Your Fitness Journey
                </h2>
                <p>
                    Every member follows a structured process that
                    ensures safe, consistent, and measurable progress.
                </p>
            </div>

            <div className="process_grid">
                {
                    steps.map((step,index)=>(
                        <div
                            className="process_card"
                            key={index}
                        >

                            <div className="process_icon">
                                {step.icon}
                            </div>
                            <h3>
                                {step.title}
                            </h3>
                            <p>
                                {step.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default TrainingProcess;