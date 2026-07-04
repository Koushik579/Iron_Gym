import './ProgramHero.css';
import heroImg from '../../../assets/images/programHero.jpg';

function ProgramHero(){
    return(
        <section className="programHero">
            <img
                src={heroImg}
                alt="Programs Hero"
            />
            <div className="programHero_overlay"></div>
            <div className="programHero_content">
                <h1>
                    OUR PROGRAMS
                </h1>
                <p>
                    Train smarter with professionally designed
                    fitness programs for every goal.
                </p>
            </div>
        </section>
    );

}

export default ProgramHero;