import {Link} from 'react-router-dom';
function Cta(){
    return(
        <div className="cta">
            <div className="cta_content">
                <span className="cta_tag">
                    Start Your Fitness Journey
                </span>
                <h1>
                    READY TO CHANGE YOUR LIFE?
                </h1>
                <p>
                    Every transformation begins with a single step.
                    Join Iron Gym today and gain access to expert trainers,
                    world-class equipment, personalized workout plans,
                    and a community that pushes you to become your strongest self.
                </p>
                <div className="cta_buttons">
                    <button className="cta_btn">
                        Join Now
                    </button>
                    <Link to="/contact">
                        <button className="cta_btn_outline">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cta;