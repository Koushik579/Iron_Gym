import "./Certifications.css";

import {
    FaAward,
    FaHeartbeat,
    FaAppleAlt,
    FaDumbbell,
    FaUserGraduate,
    FaShieldAlt
} from "react-icons/fa";

function Certifications() {

    const certifications = [

        {
            icon: <FaAward />,
            title: "Certified Fitness Coaches",
            description:
                "All trainers hold recognized fitness certifications and continue professional development."
        },

        {
            icon: <FaDumbbell />,
            title: "Strength & Conditioning",
            description:
                "Specialized coaching for strength, muscle building, and athletic performance."
        },

        {
            icon: <FaHeartbeat />,
            title: "CPR & First Aid",
            description:
                "Our trainers are prepared to respond safely during training sessions."
        },

        {
            icon: <FaAppleAlt />,
            title: "Nutrition Guidance",
            description:
                "Receive practical nutrition advice to support your fitness goals."
        },

        {
            icon: <FaUserGraduate />,
            title: "Personal Coaching",
            description:
                "One-on-one coaching with customized workout plans and regular assessments."
        },

        {
            icon: <FaShieldAlt />,
            title: "Injury Prevention",
            description:
                "Emphasis on proper form, mobility, and safe progression in every workout."
        }

    ];

    return (
        <section className="certifications">
            <div className="section_heading">
                <span className="section_tag">
                    OUR EXPERTISE
                </span>
                <h2>
                    Certified Knowledge. Proven Coaching.
                </h2>
                <p>
                    Our team combines professional certifications with
                    years of practical coaching experience to help every
                    member train safely and effectively.
                </p>
            </div>
            <div className="certification_grid">
                {certifications.map((item, index) => (
                    <div
                        className="certification_card"
                        key={index}
                    >
                        <div className="cert_icon">
                            {item.icon}
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;