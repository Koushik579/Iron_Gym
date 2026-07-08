import "./BMIHeading.css";

function BMIHeading() {
    return (
        <section className="bmi_heading">
            <span className="section_tag">
                BODY MASS INDEX
            </span>
            <h1>
                Know Your Body,
                <br />
                Improve Your Health
            </h1>
            <p>
                Calculate your Body Mass Index (BMI) in seconds and
                understand where you stand. Use our calculator to
                monitor your fitness journey and maintain a healthy lifestyle.
            </p>
        </section>
    );
}

export default BMIHeading;