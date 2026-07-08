import "./BusinessHours.css";
import { FaClock } from "react-icons/fa";

function BusinessHours() {

    const hours = [
        { day: "Monday", time: "6:00 AM - 10:00 PM" },
        { day: "Tuesday", time: "6:00 AM - 10:00 PM" },
        { day: "Wednesday", time: "6:00 AM - 10:00 PM" },
        { day: "Thursday", time: "6:00 AM - 10:00 PM" },
        { day: "Friday", time: "6:00 AM - 10:00 PM" },
        { day: "Saturday", time: "7:00 AM - 9:00 PM" },
        { day: "Sunday", time: "Closed" }
    ];

    return (
        <section className="business_hours">

            <div className="section_heading">
                <span className="section_tag">WORKING HOURS</span>
                <h2>We're Ready When You Are</h2>
                <p>
                    Visit us during our operating hours and begin your
                    fitness journey with Iron Gym.
                </p>
            </div>

            <div className="hours_card">

                <div className="hours_icon">
                    <FaClock />
                </div>

                {hours.map((item) => (
                    <div className="hour_row" key={item.day}>
                        <span>{item.day}</span>
                        <span>{item.time}</span>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default BusinessHours;