import "./UnitInputPanel.css"

export default function ({ type, onUnitChange, onValueChanged, unit, value }) {

    let units = ["kg", "lbs"]

    if (type === "height") {
        units = ["cm", "feet"]
    }

    return (
        <div className="unit-input-panel">
            <div >
                <h5>{type}</h5>
                <input type="number" value={value} onChange={(event) => { onValueChanged(type, event.target.value) }}></input>
            </div>
            <div >
                <h5>Unit</h5>
                <select value={unit} onChange={(event) => { onUnitChange(type, event.target.value) }}>
                    {units.map((option, idx) => (
                        <option key={idx} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

        </div>



    );

}