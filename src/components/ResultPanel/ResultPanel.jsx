import WeighChangePlanner from "../WeightChangePlanner/WeightChangePlanner";
import { calculateBMI, convertToBMIUnits, howMuchToChangeWeight } from "../../bmiOperations"

import "./ResultPanel.css";

export default function ({ heightWithUnit, weightWithUnit }) {

    const [weight, height] = convertToBMIUnits(weightWithUnit, heightWithUnit)
    let bmi = calculateBMI(weight, height);
    let weightDifference = howMuchToChangeWeight(weight, height);

    let weightDifferenceContent;
    let isWeightNormal = false;
    if (weightDifference < 0) {
        weightDifferenceContent = <p>You need to loose {-1 * weightDifference} kg </p>
    }
    else if (weightDifference > 0) {
        weightDifferenceContent = <p>You need to gain {weightDifference}</p>
    }
    else {
        weightDifferenceContent = <p> Your weight is perfect, nothing to change </p>
        isWeightNormal = true;
    }

    return (
        <div id="result-panel">
            < p > Your BMI is: {bmi} </p >
            {weightDifferenceContent}
            {!isWeightNormal && <WeighChangePlanner currentWeight={weight} weightDifference={weightDifference} />}
            {/* <BMIChart bmi={0} /> */}
        </div>

    );
}