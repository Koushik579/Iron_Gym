import "./ProgramCards.css";

import strength from "../../../assets/videos/chestpress.mp4";
import cardio from "../../../assets/videos/cardio.mp4";
import legpress from "../../../assets/videos/legpress.mp4";
import yoga from "../../../assets/videos/yoga.mp4"
import functional from "../../../assets/videos/functional.mp4"
import crossfit from "../../../assets/videos/crossfit.mp4"

function ProgramCards(){
    const programs = [
        {
            id:1,
            title:"Strength Training",
            video:legpress,
            duration:"60 Minutes",
            level:"Beginner - Advanced",
            calories:"350-500 kcal",
            description:
                "Build total-body strength using progressive overload, compound exercises, and expert coaching."
        },
        {
            id:2,
            title:"Weight Loss",
            video:cardio,
            duration:"45 Minutes",
            level:"All Levels",
            calories:"500-700 kcal",
            description:
                "Burn fat through HIIT workouts, cardio sessions, and metabolic conditioning."
        },
        {
            id:3,
            title:"Muscle Building",
            video:strength,
            duration:"75 Minutes",
            level:"Intermediate",
            calories:"300-450 kcal",
            description:
                "Increase lean muscle mass using scientifically designed hypertrophy programs."
        },
        {
            id:4,
            title:"CrossFit",
            video:crossfit,
            duration:"60 Minutes",
            level:"Advanced",
            calories:"600+ kcal",
            description:
                "High-intensity functional workouts that improve endurance, agility, and power."
        },
        {
            id:5,
            title:"Functional Training",
            video:functional,
            duration:"50 Minutes",
            level:"All Levels",
            calories:"400 kcal",
            description:
                "Develop balance, mobility, flexibility, and real-life movement patterns."
        },
        {
            id:6,
            title:"Yoga & Mobility",
            video:yoga,
            duration:"45 Minutes",
            level:"Beginner",
            calories:"200 kcal",
            description:
                "Improve flexibility, posture, breathing, and recovery through guided yoga sessions."
        }
    ];
    return(
        <section className="program_section">
            <div className="section_heading">
                <span className="section_tag">
                    OUR PROGRAMS
                </span>
                <h2>
                    Find Your Perfect Training Program
                </h2>
                <p>
                    Every goal needs a different approach.
                    Choose the training program that matches your fitness journey.
                </p>
            </div>
            {programs.map((program,index)=>(
                <div
                    className={`program_row ${index % 2 === 0 ? "" : "reverse"}`}
                    key={program.id}
                >
                    <div className="program_video">
                        <video
                            src={program.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                    <div className="program_info">
                        <h2>{program.title}</h2>
                        <p>{program.description}</p>
                        <div className="program_meta">
                            <div>
                                <span>Duration</span>
                                <h4>{program.duration}</h4>
                            </div>
                            <div>
                                <span>Level</span>
                                <h4>{program.level}</h4>
                            </div>
                            <div>
                                <span>Calories</span>
                                <h4>{program.calories}</h4>
                            </div>
                        </div>
                        <button>
                            Join Program
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
        

}

export default ProgramCards;