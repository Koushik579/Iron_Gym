import "./MembershipBenefits.css";

import {
    FaDumbbell,
    FaUsers,
    FaHeartbeat,
    FaAppleAlt,
    FaLock,
    FaClock
} from "react-icons/fa";

function MembershipBenefits() {

    const benefits = [

        {
            icon: <FaDumbbell />,
            title: "Modern Equipment",
            description:
                "Train with premium strength and cardio equipment maintained to the highest standards."
        },

        {
            icon: <FaUsers />,
            title: "Expert Trainers",
            description:
                "Get guidance from certified trainers committed to helping you reach your goals."
        },

        {
            icon: <FaHeartbeat />,
            title: "Health Assessment",
            description:
                "Track your progress with regular body measurements and fitness evaluations."
        },

        {
            icon: <FaAppleAlt />,
            title: "Nutrition Guidance",
            description:
                "Receive expert nutrition tips to complement your workouts."
        },

        {
            icon: <FaLock />,
            title: "Secure Lockers",
            description:
                "Keep your belongings safe while you focus on your workout."
        },

        {
            icon: <FaClock />,
            title: "Flexible Hours",
            description:
                "Train early morning or late evening with extended gym hours."
        }

    ];

    return (
        <section className="membership_benefits">
            <div className="section_heading">
                <span className="section_tag">
                    WHY JOIN US
                </span>
                <h2>
                    More Than A Membership
                </h2>
                <p>
                    Every Iron Gym membership includes access to premium facilities,
                    expert guidance, and a supportive fitness community that helps
                    you stay motivated.
                </p>
            </div>
            <div className="benefit_grid">
                {benefits.map((benefit, index) => (

                    <div
                        className="benefit_card"
                        key={index}
                    >
                        <div className="benefit_icon">
                            {benefit.icon}
                        </div>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MembershipBenefits;