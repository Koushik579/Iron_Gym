import "../App.css";

import ContactHero from "../components/Contact/ContacHero/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo/ContactInfo";
import ContactForm from "../components/Contact/ContactForm/ContactForm";
import BusinessHours from "../components/Contact/BusinessHours/BusinessHours";
import Map from "../components/Contact/Map/Map";
import ContactFAQ from "../components/Contact/ContactFAQ/ContactFAQ";
import ContactCTA from "../components/Contact/ContactCTA/ContactCTA";

function Contact(){
    return(
        <div className="main_body">
            <ContactHero/>
            <ContactInfo/>
            <ContactForm/>
            <BusinessHours/>
            <Map/>
            <ContactFAQ/>
            <ContactCTA/>

        </div>
    );
}

export default Contact;