import "./PricingCTA.css";
import { Link } from "react-router-dom";

function PricingCTA() {
    return (
        <section className="pricing_cta">
            <div className="pricing_cta_overlay"></div>
            <div className="pricing_cta_content">
                <span className="section_tag">
                    START YOUR JOURNEY
                </span>
                <h2>
                    Invest In Yourself Today
                </h2>
                <p>
                    Your fitness journey starts with a single decision.
                    Choose the membership plan that fits your goals and
                    become part of the Iron Gym family.
                </p>
                <div className="pricing_cta_buttons">
                    <Link to="/contact">
                        <button className="cta_primary_btn">
                            Join Now
                        </button>
                    </Link>
                    <Link to="/programs">
                        <button className="cta_secondary_btn">
                            Explore Programs
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default PricingCTA;