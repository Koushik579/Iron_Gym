import "./HealthTips.css";
import {
    FaAppleAlt,
    FaDumbbell,
    FaTint,
    FaBed,
    FaHeartbeat,
    FaChartLine
} from "react-icons/fa";

function HealthTips() {

    const tips = [
        {
            icon: <FaAppleAlt />,
            title: "Balanced Nutrition",
            description: "Eat a balanced diet rich in protein, healthy fats, whole grains, fruits, and vegetables."
        },
        {
            icon: <FaDumbbell />,
            title: "Exercise Regularly",
            description: "Combine strength training with cardio exercises at least 4–5 days a week."
        },
        {
            icon: <FaTint />,
            title: "Stay Hydrated",
            description: "Drink plenty of water throughout the day to support your metabolism and recovery."
        },
        {
            icon: <FaBed />,
            title: "Quality Sleep",
            description: "Aim for 7–9 hours of sleep every night for better recovery and overall health."
        },
        {
            icon: <FaHeartbeat />,
            title: "Healthy Lifestyle",
            description: "Avoid smoking, limit processed foods, and maintain healthy daily habits."
        },
        {
            icon: <FaChartLine />,
            title: "Track Your Progress",
            description: "Measure your BMI and body measurements regularly to stay motivated."
        }
    ];

    return (
        <section className="health_tips">
            <div className="section_heading">
                <span className="section_tag">HEALTH TIPS</span>
                <h2>Build Healthy Habits</h2>
                <p>
                    Small lifestyle changes can make a big difference.
                    Follow these simple habits to improve your health and
                    maintain a healthy BMI.
                </p>
            </div>
            <div className="tips_grid">
                {tips.map((tip) => (
                    <div className="tip_card" key={tip.title}>
                        <div className="tip_icon">
                            {tip.icon}
                        </div>
                        <h3>{tip.title}</h3>
                        <p>{tip.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HealthTips;