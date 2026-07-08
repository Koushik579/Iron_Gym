import "./ContactForm.css";

function ContactForm() {
    return (
        <section className="contact_form_section">
            <div className="section_heading">
                <span className="section_tag">SEND A MESSAGE</span>
                <h2>Let's Talk About Your Fitness Goals</h2>
                <p>
                    Fill out the form below and our team will contact you as
                    soon as possible.
                </p>
            </div>

            <form className="contact_form">

                <div className="input_group">
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                    />
                </div>

                <div className="input_group">
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                    />

                    <select required>
                        <option value="">Select Program</option>
                        <option>Weight Loss</option>
                        <option>Strength Training</option>
                        <option>Muscle Building</option>
                        <option>CrossFit</option>
                        <option>Yoga</option>
                    </select>
                </div>

                <textarea
                    rows="8"
                    placeholder="Tell us about your fitness goals..."
                    required
                ></textarea>

                <button type="submit">
                    Send Message
                </button>

            </form>
        </section>
    );
}

export default ContactForm;