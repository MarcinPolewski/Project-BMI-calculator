import UnitInputPanel from "../UserInputPanel/UnitInputPanel"
import ResultPanel from "../ResultPanel/ResultPanel"
import { useState } from "react";

import "./MainPanel.css";

const defaultHeightState = {
    "value": "",
    "unit": "cm"
};

const defaultWeightState =
{
    "value": "",
    "unit": "kg"
}


export default function MainPanel() {

    const [weightWithUnit, setWeight] = useState(defaultWeightState);
    const [heightWithUnit, setHeight] = useState(defaultHeightState);

    let isInputGiven = (weightWithUnit.value > 0 && heightWithUnit.value > 0 && weightWithUnit.unit && heightWithUnit.unit);

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
        <div id="main-panel">
            <div id="calculate-panel">
                <UnitInputPanel type="weight" onUnitChange={unitChanged} onValueChanged={valueChanged} unit={weightWithUnit.unit} value={weightWithUnit.value} />
                <UnitInputPanel type="height" onUnitChange={unitChanged} onValueChanged={valueChanged} unit={heightWithUnit.unit} value={heightWithUnit.value} />
            </div>
            {isInputGiven && <ResultPanel heightWithUnit={heightWithUnit} weightWithUnit={weightWithUnit} />}
        </div >
    );
}