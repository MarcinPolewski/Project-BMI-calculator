import UnitInputPanel from "./UnitInputPanel"
import ResultPanel from "./ResultPanel"
import { useState } from "react";

const defaultState = {
    "value": 0,
    "unit": ""
};

export default function CalculatePanel() {



    const [weight, setWeight] = useState(defaultState);
    const [height, setHeight] = useState(defaultState);

    let isInputGiven = false;
    if (weight.value > 0 && height.value > 0 && weight.unit && height.unit) {
        isInputGiven = true;
    }

    let bmi = 10.0;

    function valueChanged(type, newValue) {
        const callable = type === "height" ? setHeight : setWeight;

        callable((oldObject) => {
            return {
                ...oldObject,
                value: newValue
            }
        });
    }

    function unitChanged(type, newUnit) {
        const callable = type === "height" ? setHeight : setWeight;

        callable((oldObject) => {
            return {
                ...oldObject,
                unit: newUnit
            }
        });
    }

    return (
        <>
            <div>
                <UnitInputPanel type="weight" onUnitChange={unitChanged} onValueChanged={valueChanged} unit={weight.unit} value={weight.value} />
                <UnitInputPanel type="height" onUnitChange={unitChanged} onValueChanged={valueChanged} unit={height.unit} value={height.value} />
            </div>
            {isInputGiven && <ResultPanel bmi={bmi} />}
        </>
    );
}