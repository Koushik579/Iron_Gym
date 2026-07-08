import "./ContactHero.css";
import { Link } from "react-router-dom";


function ContactHero() {

    return (
        <section className="contact_hero">
            <div className="contact_overlay"></div>
            <div className="contact_content">
                <span className="section_tag">
                    CONTACT US
                </span>
                <h1>
                    Let's Start Your
                    <br />
                    Fitness Journey
                </h1>
                <p>
                    Have questions about memberships, training programs,
                    or our facilities? Our team is here to help you.
                    Reach out today and take the first step toward a
                    stronger, healthier you.
                </p>
                <div className="contact_buttons">
                    <a href="tel:+919876543210">
                        <button className="primary_btn">
                            Call Now
                        </button>
                    </a>
                    <Link to="/pricing">
                        <button className="secondary_btn">
                            View Plans
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );

}

export default ContactHero;