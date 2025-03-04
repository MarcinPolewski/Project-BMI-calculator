import UnitInputPanel from "./UnitInputPanel"
import ResultPanel from "./ResultPanel"

export default function CalculatePanel() {

    let isInputGiven = true;

    let bmi = 10.0;

    return (
        <>
            <div>
                <UnitInputPanel type="weight" />
                <UnitInputPanel type="height" />
            </div>
            {isInputGiven && <ResultPanel bmi={bmi} />}
        </>
    );
}