import WeighChangePlanner from "../WeightChangePlanner/WeightChangePlanner";
import { calculateBMI, convertToBMIUnits, howMuchToChangeWeight } from "../../bmiOperations"

import "./ResultPanel.css";

export default function ({ heightWithUnit, weightWithUnit }) {

    const [weight, height] = convertToBMIUnits(weightWithUnit, heightWithUnit)
    let bmi = calculateBMI(weight, height);
    let weightDifference = howMuchToChangeWeight(weight, height);

    let weightDifferenceContent = "Your BMI is: " + bmi + ". ";
    let isWeightNormal = false;
    if (weightDifference < 0) {
        weightDifferenceContent += "You need to loose " + (Math.abs(weightDifference)) + " kg"
    }
    else if (weightDifference > 0) {
        weightDifferenceContent += "You need to gain " + weightDifference + " kg";
    }
    else {
        weightDifferenceContent += "Your weight is perfect, nothing to change";
        isWeightNormal = true;
    }

    return (
        <div id="result-panel" className="panel">
            <h2>Result</h2>
            {weightDifferenceContent}
            {!isWeightNormal && <WeighChangePlanner currentWeight={weight} weightDifference={weightDifference} />}
            {/* <BMIChart bmi={0} /> */}
        </div>

    );
}