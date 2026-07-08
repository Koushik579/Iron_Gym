import "./ContactCTA.css";
import { Link } from "react-router-dom";

function ContactCTA() {
    return (
        <section className="contact_cta">
            <div className="contact_cta_overlay"></div>
            <div className="contact_cta_content">
                <span className="section_tag">
                    READY TO BEGIN?
                </span>
                <h2>
                    Your Fitness Journey Starts Today
                </h2>
                <p>
                    Don't wait for the perfect time. Take the first step toward
                    a stronger, healthier, and more confident version of yourself.
                    Join Iron Gym today and start transforming your life.
                </p>
                <div className="contact_cta_buttons">

                    <Link to="/pricing">
                        <button className="contact_primary_btn">
                            View Membership Plans
                        </button>
                    </Link>
                    <Link to="/">
                        <button className="contact_secondary_btn">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ContactCTA;