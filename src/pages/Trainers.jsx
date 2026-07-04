import '../App.css';

import TrainerHero from '../components/Trainers/TrainerHero/TrainerHero';
import TrainerCards from '../components/Trainers/TrainerCards/TrainerCards';
import WhyCoach from '../components/Trainers/WhyCoach/WhyCoach';
import Certifications from '../components/Trainers/Certifications/Certifications';
import TrainingProcess from '../components/Trainers/TrainingProcess/TrainingProcess';
import CTA from '../components/Trainers/CTA/CTA';

function Trainers(){

    return(

        <div className="main_body">
            <TrainerHero />
            <TrainerCards />
            <WhyCoach />
            <Certifications />
            <TrainingProcess />
            <CTA/>
        </div>

    );

}

export default Trainers;