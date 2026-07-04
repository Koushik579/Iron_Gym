import { useState } from "react";
import "./PricingFAQ.css";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function PricingFAQ() {

    const faqs = [

        {
            question: "Can I cancel my membership anytime?",
            answer:
                "Yes. You can cancel your membership according to our cancellation policy without hidden charges."
        },

        {
            question: "Is there any joining fee?",
            answer:
                "No. We do not charge any joining fee. You only pay for your selected membership plan."
        },

        {
            question: "Can I upgrade my membership later?",
            answer:
                "Absolutely. You can upgrade from Basic to Standard or Premium whenever you like."
        },

        {
            question: "Do you provide personal trainers?",
            answer:
                "Yes. Premium members receive dedicated personal training sessions, while other plans can purchase them separately."
        },

        {
            question: "Do you offer diet plans?",
            answer:
                "Yes. Standard and Premium memberships include personalized nutrition guidance."
        },

        {
            question: "Can beginners join Iron Gym?",
            answer:
                "Absolutely. Our trainers create beginner-friendly workout programs and help you progress safely."
        }

    ];

    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pricing_faq">
            <div className="section_heading">
                <span className="section_tag">
                    FAQ
                </span>
                <h2>
                    Frequently Asked Questions
                </h2>
                <p>
                    Everything you need to know before becoming an
                    Iron Gym member.

                </p>
            </div>
            <div className="faq_container">
                {

                    faqs.map((faq,index)=>(
                        <div
                            className="faq_item"
                            key={index}
                        >
                            <button
                                className="faq_question"
                                onClick={() => toggleFAQ(index)}

                            >
                                <span>
                                    {faq.question}
                                </span>
                                {
                                    openIndex === index ? <FaChevronUp/> : <FaChevronDown/>
                                }
                            </button>
                            {
                                openIndex === index && (
                                    <div className="faq_answer">
                                        <p>
                                            {faq.answer}

                                        </p>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default PricingFAQ;