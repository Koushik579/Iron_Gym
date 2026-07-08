import "./ContactInfo.css";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock
} from "react-icons/fa";

function ContactInfo() {

    const contactInfo = [
        {
            icon: <FaMapMarkerAlt />,
            title: "Visit Us",
            value: "123 Fitness Street, Rajkot, Gujarat"
        },
        {
            icon: <FaPhoneAlt />,
            title: "Call Us",
            value: "+91 98765 43210"
        },
        {
            icon: <FaEnvelope />,
            title: "Email Us",
            value: "info@irongym.com"
        },
        {
            icon: <FaClock />,
            title: "Working Hours",
            value: "Mon - Sat | 6:00 AM - 10:00 PM"
        }
    ];

    return (
        <section className="contact_info">
            <div className="section_heading">
                <span className="section_tag">GET IN TOUCH</span>
                <h2>Contact Information</h2>
                <p>
                    We'd love to hear from you. Reach out using any of the
                    methods below and our team will get back to you as soon as possible.
                </p>
            </div>

            <div className="contact_cards">
                {contactInfo.map((item, index) => (
                    <div className="contact_card" key={index}>
                        <div className="contact_icon">
                            {item.icon}
                        </div>

                        <h3>{item.title}</h3>

                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ContactInfo;