import "./PricingHero.css";
import { Link } from "react-router-dom";

function PricingHero() {
    return (
        <section className="pricing_hero">
            <div className="pricing_overlay"></div>
            <div className="pricing_content">

                <span className="section_tag">
                    MEMBERSHIP PLANS
                </span>

                <h1>
                    Invest In Your Health,
                    <br />
                    Transform Your Life
                </h1>

                <p>
                    Flexible membership options designed for beginners,
                    fitness enthusiasts, and professional athletes.
                    No hidden fees. No long-term pressure.
                    Just real results.
                </p>

                <div className="pricing_buttons">
                    <Link to="/contact">
                        <button className="primary_btn">
                            Join Today
                        </button>
                    </Link>
                    <Link to="/programs">
                        <button className="secondary_btn">
                            Explore Programs
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default PricingHero;