import '../App.css';
import '../styles/About.css';
import heroImg from '../assets/images/heroImg.png';
import back from '../assets/videos/back.mp4'
import Cta from '../components/Cta'
import g1 from '../assets/images/gallery/gallery1.jpeg';
import g2 from '../assets/images/gallery/gallery2.jpg';
import g3 from '../assets/images/gallery/gallery3.jpg';
import g4 from '../assets/images/gallery/gallery4.jpg';
import g5 from '../assets/images/gallery/gallery5.jpeg';
import g6 from '../assets/images/gallery/gallery6.jpeg';

function About(){
    const gallery = [
        g1,
        g2,
        g3,
        g4,
        g5,
        g6
    ];
    return(
        <div className="main_body">
            <div className="hero_img">
                <img src={heroImg} alt="Hero Img" />
            </div>
            <div className="our_story">
                <div className="story_video">
                    <video src={back}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
                <div className="story_content">
                    <span className="section_tag">
                        OUR STORY
                    </span>
                    <h2>
                        More Than Just A Gym
                    </h2>
                    <p>
                        At Iron Gym, we believe fitness is about much more than
                        lifting weights. It's about building confidence,
                        discipline, and creating a healthier lifestyle that lasts.
                    </p>
                    <p>
                        Since our beginning, we have helped thousands of people
                        transform their bodies through professional coaching,
                        modern equipment, and personalized training programs.
                    </p>
                    <p>
                        Whether you're stepping into a gym for the very first time
                        or you're an experienced athlete chasing new goals,
                        Iron Gym provides the environment, support, and motivation
                        you need to succeed.
                    </p>
                    <div className="story_stats">

                        <div className="story_stat">
                            <h3>5000+</h3>
                            <span>Members</span>
                        </div>

                        <div className="story_stat">
                            <h3>20+</h3>
                            <span>Certified Trainers</span>
                        </div>

                        <div className="story_stat">
                            <h3>15+</h3>
                            <span>Years Experience</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mission_vision">
                <div className="section_heading">
                    <span className="section_tag">OUR PURPOSE</span>
                    <h2>Mission & Vision</h2>
                    <p>
                        Everything we do is driven by our passion for helping people
                        become stronger, healthier, and more confident.
                    </p>
                </div>
                <div className="mv_cards">
                    <div className="mv_card">
                        <div className="mv_icon">🎯</div>
                        <h3>Our Mission</h3>
                        <p>
                            To inspire and empower people of all fitness levels by
                            providing expert coaching, modern equipment, and a
                            supportive environment where everyone can achieve their
                            personal fitness goals.
                        </p>
                    </div>
                    <div className="mv_card">
                        <div className="mv_icon">🚀</div>
                        <h3>Our Vision</h3>
                        <p>
                            To become the most trusted fitness destination,
                            creating a healthier community through innovation,
                            motivation, and world-class training experiences.
                        </p>
                    </div>
                </div>
            </div>
            <div className="journey">
                <div className="section_heading">
                    <span className="section_tag">
                        OUR JOURNEY
                    </span>
                    <h2>Growing Stronger Every Year</h2>
                    <p>
                        From a small fitness center to one of the city's most trusted
                        gyms, our journey has always been driven by our members.
                    </p>
                </div>
                <div className="timeline">
                    <div className="timeline_item">
                        <div className="timeline_year">
                            2012
                        </div>
                        <div className="timeline_content">
                            <h3>Iron Gym Founded</h3>
                            <p>
                                Started with a single training hall and a vision
                                to help people become stronger.
                            </p>
                        </div>
                    </div>
                    <div className="timeline_item">
                        <div className="timeline_year">
                            2016
                        </div>
                        <div className="timeline_content">
                            <h3>1000+ Members</h3>
                            <p>
                                Expanded our facilities and welcomed our
                                1000th member.
                            </p>
                        </div>
                    </div>
                    <div className="timeline_item">
                        <div className="timeline_year">
                            2020
                        </div>
                        <div className="timeline_content">
                            <h3>Premium Equipment</h3>
                            <p>
                                Upgraded the gym with international-quality
                                strength and cardio machines.
                            </p>
                        </div>
                    </div>
                    <div className="timeline_item">
                        <div className="timeline_year">
                            2026
                        </div>
                        <div className="timeline_content">
                            <h3>5000+ Happy Members</h3>
                            <p>
                                Today Iron Gym continues to grow with expert
                                trainers and a thriving fitness community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stats">
                <div className="section_heading">
                    <span className="section_tag">
                        OUR ACHIEVEMENTS
                    </span>
                    <h2>Iron Gym In Numbers</h2>
                    <p>
                        Our commitment to excellence has helped thousands of
                        people transform their fitness journey.
                    </p>
                </div>
                <div className="stats_cards">
                    <div className="stat_card">
                        <h1>5000+</h1>
                        <p>Happy Members</p>
                    </div>
                    <div className="stat_card">
                        <h1>20+</h1>
                        <p>Certified Trainers</p>
                    </div>
                    <div className="stat_card">
                        <h1>15+</h1>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat_card">
                        <h1>12+</h1>
                        <p>Training Programs</p>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <div className="section_heading">
                    <span className="section_tag">
                        GALLERY
                    </span>
                    <h2>Take A Look Around</h2>
                    <p>
                        Explore our modern facilities, premium equipment,
                        and motivating training environment.
                    </p>
                </div>
                <div className="gallery_grid">
                    {gallery.map((image,index)=>(
                        <div className="gallery_item" key={index}>
                            <img src={image} alt="Gym"/>
                        </div>
                    ))}
                </div>
            </div>
            <Cta/>
        </div>
    )
}
export default About;