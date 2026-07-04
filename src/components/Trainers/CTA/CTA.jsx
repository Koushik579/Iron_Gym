import "./CTA.css";
import { Link } from "react-router-dom";

function CTA() {

    return (
        <section className="trainer_cta">
            <div className="trainer_cta_overlay"></div>
            <div className="trainer_cta_content">
                <span className="section_tag">
                    START TODAY
                </span>
                <h2>
                    Train With The Best Coaches In Town
                </h2>
                <p>
                    Whether your goal is weight loss, muscle building,
                    strength training, or improving overall fitness,
                    our certified trainers are ready to guide you every
                    step of the way.
                </p>
                <div className="trainer_cta_buttons">
                    <Link to="/contact">
                        <button className="trainer_primary_btn">
                            Book Your First Session
                        </button>
                    </Link>
                    <Link to="/pricing">
                        <button className="trainer_secondary_btn">
                            View Membership Plans
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CTA;