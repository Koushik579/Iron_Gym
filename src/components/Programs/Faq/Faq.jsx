import { useState } from "react";
import "./Faq.css";

function FAQ() {

    const [active, setActive] = useState(null);

    const faqs = [

        {
            question: "Do I need previous gym experience?",
            answer:
                "No. Our trainers guide beginners step by step and create personalized workout plans."
        },

        {
            question: "Can I change my training program later?",
            answer:
                "Absolutely. Your trainer can modify your program anytime based on your progress."
        },

        {
            question: "Do membership plans include diet guidance?",
            answer:
                "Yes. Standard and Premium memberships include personalized nutrition guidance."
        },

        {
            question: "What should I bring to my first workout?",
            answer:
                "Bring comfortable workout clothes, a water bottle, a towel, and lots of motivation."
        },

        {
            question: "Are personal trainers available?",
            answer:
                "Yes. Certified personal trainers are available for one-on-one coaching sessions."
        }

    ];

    function toggleFAQ(index){
        if(active === index){
            setActive(null);
        }
        else{
            setActive(index);
        }
    }

    return(
        <section className="faq">
            <div className="section_heading">
                <span className="section_tag">
                    FAQ
                </span>
                <h2>
                    Frequently Asked Questions
                </h2>
                <p>
                    Everything you need to know before joining Iron Gym.
                </p>
            </div>
            <div className="faq_container">
                {faqs.map((faq,index)=>(
                    <div
                        className="faq_item"
                        key={index}
                    >
                        <button
                            className="faq_question"
                            onClick={()=>toggleFAQ(index)}
                        >
                            <span>{faq.question}</span>
                            <span>
                                {active===index ? "−" : "+"}
                            </span>
                        </button>
                        {active===index && (
                            <div className="faq_answer">

                                {faq.answer}

                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;