import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./BMIFAQ.css";

function BMIFAQ() {
    const [active, setActive] = useState(null);
    const faqs = [
        {
            question: "What is BMI?",
            answer: "Body Mass Index (BMI) is a simple calculation that uses your height and weight to estimate whether your body weight falls within a healthy range."
        },
        {
            question: "Is BMI accurate for everyone?",
            answer: "BMI is a useful screening tool but it does not measure body fat directly. Athletes and people with high muscle mass may have a higher BMI without having excess body fat."
        },
        {
            question: "How often should I check my BMI?",
            answer: "Checking your BMI every few months is generally sufficient unless you are actively trying to gain or lose weight."
        },
        {
            question: "Can children use this BMI calculator?",
            answer: "No. This calculator is intended for adults. Children and teenagers require age- and sex-specific BMI charts."
        },
        {
            question: "What should I do if my BMI is high?",
            answer: "Focus on regular exercise, balanced nutrition, adequate sleep, and consult a healthcare professional if needed."
        }
    ];

    function toggle(index) {
        setActive(active === index ? null : index);
    }
    return (
        <section className="bmi_faq">
            <div className="section_heading">
                <span className="section_tag">BMI FAQ</span>
                <h2>Frequently Asked Questions</h2>
                <p>
                    Learn more about Body Mass Index and how it can help you
                    understand your overall health.
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

export default BMIFAQ;