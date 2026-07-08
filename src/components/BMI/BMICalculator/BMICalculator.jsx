import { useState } from "react";
import "./BMICalculator.css";

function BMICalculator() {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [bmi, setBMI] = useState(null);
    const [category, setCategory] = useState("");

    function calculateBMI(e) {
        e.preventDefault();

        if (!height || !weight || !age || !gender) {
            alert("Please fill all fields.");
            return;
        }

        const h = height / 100;
        const result = (weight / (h * h)).toFixed(1);

        setBMI(result);

        if (result < 18.5) {
            setCategory("Underweight");
        } else if (result < 25) {
            setCategory("Normal Weight");
        } else if (result < 30) {
            setCategory("Overweight");
        } else {
            setCategory("Obese");
        }
    }

    function resetCalculator() {
        setHeight("");
        setWeight("");
        setAge("");
        setGender("");
        setBMI(null);
        setCategory("");
    }

    return (
        <section className="bmi_calculator">
            <div className="calculator_card">
                <h2>Calculate Your BMI</h2>
                <form onSubmit={calculateBMI}>
                    <div className="input_group">
                        <input
                            type="number"
                            placeholder="Height (cm)"
                            value={height}
                            onChange={(e)=>setHeight(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Weight (kg)"
                            value={weight}
                            onChange={(e)=>setWeight(e.target.value)}
                        />
                    </div>
                    <div className="input_group">
                        <input
                            type="number"
                            placeholder="Age"
                            value={age}
                            onChange={(e)=>setAge(e.target.value)}
                        />
                        <select
                            value={gender}
                            onChange={(e)=>setGender(e.target.value)}
                        >
                            <option value="">Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="btn_group">
                        <button type="submit">
                            Calculate BMI
                        </button>
                        <button
                            type="button"
                            className="reset_btn"
                            onClick={resetCalculator}
                        >
                            Reset
                        </button>
                    </div>
                </form>
                {bmi && (
                    <div className="result_card">
                        <h3>Your BMI</h3>
                        <h1>{bmi}</h1>
                        <p>{category}</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default BMICalculator;