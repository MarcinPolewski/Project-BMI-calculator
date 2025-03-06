export default function CalculatePanel({ unitChanged, valueChanged, weightWithUnit, heightWithUnit }) {
    return (
        <div id="calculate-panel" className="panel">
            <h2>Provide your parameters</h2>
            <UnitInputPanel type="weight" onUnitChange={unitChanged} onValueChanged={valueChanged} unit={weightWithUnit.unit} value={weightWithUnit.value} />
            <UnitInputPanel type="height" onUnitChange={unitChanged} onValueChanged={valueChanged} unit={heightWithUnit.unit} value={heightWithUnit.value} />
        </div>
    );
}