import "./TrainerHero.css";

import heroImg from "../../../assets/images/trainersHero.jpg";

function TrainerHero() {

    return (
        <section className="trainer_hero">
            <img
                src={heroImg}
                alt="Expert Trainers"
            />
            <div className="trainer_overlay"></div>
            <div className="trainer_content">
                <span className="hero_tag">
                    PROFESSIONAL COACHING
                </span>
                <h1>
                    MEET OUR EXPERT TRAINERS
                </h1>
                <p>
                    Learn from certified fitness professionals dedicated to helping
                    you achieve your goals through personalized coaching, expert
                    guidance, and years of practical experience.
                </p>

                <div className="trainer_buttons">
                    <button className="primary_btn">
                        Book a Session
                    </button>
                    <button className="secondary_btn">
                        Meet the Team
                    </button>
                </div>
            </div>
        </section>
    );
}

export default TrainerHero;