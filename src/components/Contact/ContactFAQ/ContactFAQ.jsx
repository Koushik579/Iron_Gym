import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./ContactFAQ.css";

function ContactFAQ() {
    const [active, setActive] = useState(null);

    const faqs = [
        {
            question: "Do I need to book an appointment before visiting?",
            answer: "No. Walk-ins are always welcome during our working hours. However, booking an appointment ensures one of our trainers is available for you."
        },
        {
            question: "Do you offer a free trial session?",
            answer: "Yes. New visitors can enjoy one complimentary trial workout to experience our facilities and coaching."
        },
        {
            question: "Is parking available?",
            answer: "Yes. We provide free parking for all members and visitors."
        },
        {
            question: "Can I visit the gym before joining?",
            answer: "Absolutely. We encourage you to tour our facilities and meet our trainers before making a decision."
        },
        {
            question: "How quickly will I receive a response?",
            answer: "We usually respond to all inquiries within 24 hours during business days."
        }
    ];

    function toggle(index) {
        setActive(active === index ? null : index);
    }

    return (
        <section className="contact_faq">

            <div className="section_heading">
                <span className="section_tag">FAQ</span>
                <h2>Frequently Asked Questions</h2>
                <p>
                    Find quick answers to the questions we receive most often.
                </p>
            </div>

            <div className="faq_container">
                {faqs.map((faq, index) => (
                    <div className="faq_item" key={index}>
                        <button
                            className="faq_question"
                            onClick={() => toggle(index)}
                        >
                            <span>{faq.question}</span>

                            {active === index
                                ? <FaChevronUp />
                                : <FaChevronDown />
                            }
                        </button>
                        {active === index && (
                            <div className="faq_answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ContactFAQ;