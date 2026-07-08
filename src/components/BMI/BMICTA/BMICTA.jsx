import "./BMICTA.css";
import { Link } from "react-router-dom";

function BMICTA() {
    return (
        <section className="bmi_cta">
            <div className="bmi_cta_overlay"></div>
            <div className="bmi_cta_content">
                <span className="section_tag">
                    TAKE THE NEXT STEP
                </span>
                <h2>
                    Ready To Transform
                    <br />
                    Your Health?
                </h2>
                <p>
                    Your BMI is just the beginning. Whether your goal is
                    weight loss, muscle gain, or improving your overall
                    fitness, Iron Gym provides the coaching, equipment,
                    and motivation to help you succeed.
                </p>
                <div className="bmi_cta_buttons">
                    <Link to="/pricing">
                        <button className="bmi_primary_btn">
                            Join Iron Gym
                        </button>
                    </Link>
                    <Link to="/programs">
                        <button className="bmi_secondary_btn">
                            Explore Programs
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default BMICTA;