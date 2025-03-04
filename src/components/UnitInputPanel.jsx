import "./UnitInputPanel.css"

export default function ({ type }) {

    let units = ["kg", "lbs"]

    if (type === "height") {
        units = ["cm", "feet"]
    }

    return (
        <div className="input-with-heading">
            <div >
                <h1>{type}</h1>
                <input type="number"></input>
            </div>
            <div >
                <h1>Unit:</h1>
                <select></select>
            </div>

        </div>



    );

}