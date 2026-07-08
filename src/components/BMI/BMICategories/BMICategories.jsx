import "./BMICategories.css";

function BMICategories() {

    const categories = [
        {
            title: "Underweight",
            range: "< 18.5",
            color: "#3b82f6",
            description: "You may need to gain weight through a balanced diet and strength training."
        },
        {
            title: "Normal",
            range: "18.5 - 24.9",
            color: "#22c55e",
            description: "Your BMI is within the healthy range. Maintain your lifestyle."
        },
        {
            title: "Overweight",
            range: "25 - 29.9",
            color: "#f59e0b",
            description: "Consider regular exercise and a healthy diet to reduce excess weight."
        },
        {
            title: "Obese",
            range: "30+",
            color: "#ef4444",
            description: "Consult a healthcare professional and begin a structured fitness plan."
        }
    ];

    return (
        <section className="bmi_categories">
            <div className="section_heading">
                <span className="section_tag">BMI GUIDE</span>
                <h2>BMI Classification</h2>
                <p>
                    Use the chart below to understand what your BMI score means.
                </p>
            </div>
            <div className="category_cards">

                {categories.map((item) => (
                    <div className="category_card" key={item.title}>
                        <div
                            className="category_circle"
                            style={{ background: item.color }}
                        >
                            {item.range}
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BMICategories;