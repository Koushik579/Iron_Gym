import '../App.css';

import ProgramHero from '../components/Programs/ProgramHero/ProgramHero';
import ProgramCards from '../components/Programs/ProgramCards/ProgramCards';
import Benefits from '../components/Programs/Benefits/Benefits';
import Schedule from '../components/Programs/Schedule/Schedule';
import FAQ from '../components/Programs/Faq/Faq';
import CTA from '../components/Cta';

function Programs(){
    return(
        <div className="main_body">
            <ProgramHero />
            <ProgramCards />
            <Benefits />
            <Schedule />
            <FAQ />
            <CTA />
        </div>
    );
}

export default Programs;