import "../App.css";

import BMIHeading from "../components/BMI/BMIHeading/BMIHeading";
import BMICalculator from "../components/BMI/BMICalculator/BMICalculator";
import BMICategories from "../components/BMI/BMICategories/BMICategories";
import HealthTips from "../components/BMI/HealthTips/HealthTips";
import BMIFAQ from "../components/BMI/BMIFAQ/BMIFAQ";
import BMICTA from "../components/BMI/BMICTA/BMICTA";

function Bmi() {
    return (
        <div className="main_body">
            <BMIHeading />
            <BMICalculator />
            <BMICategories />
            <HealthTips />
            <BMIFAQ />
            <BMICTA />
        </div>
    );
}

export default Bmi;