import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const defaultWeightChangePerMonth = 2.0; // in kg

function ParameterPanel({ onDurationChange, onWeightChangeRateChange, duration, weightChangeRate }) {
    return <div className="unit-input-panel">
        <div >
            <h5>Duration in months</h5>
            <input type="number" value={duration} onChange={onDurationChange}></input>
        </div>
        <div>
            <h5>Weight change per month kg/month</h5>
            <input type="number" value={weightChangeRate} onChange={onWeightChangeRateChange}></input>
        </div>
    </div >
}

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

function WeighChangeChart() {

    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <LineChart data={data} margin={{ top: 20 }} accessibilityLayer>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d"></Line>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default function WeighChangePlanner({ currentWeight, weightDifference }) {

    const [weightChangePerMonth, setWeightChangePerMonth] = useState(defaultWeightChangePerMonth)

    const durationInMonths = Math.abs(weightDifference) / weightChangePerMonth;

    function handleWeightChangeRateChange(event) {
        console.log(event.target.value);
        setWeightChangePerMonth(event.target.value);
    }

    function handleDurationChange(event) {
        const newDuration = event.target.value;
        const newWeightChangeValue = parseFloat(Math.abs(weightDifference)) / parseFloat(newDuration);

        console.log(newWeightChangeValue);
        setWeightChangePerMonth(newWeightChangeValue);
    }


    return (
        <div>
            <h3>Weight Change Calulator</h3>
            <p>Use input fiels below to caluclate duration or weight change per month</p>
            <ParameterPanel
                onDurationChange={handleDurationChange}
                onWeightChangeRateChange={handleWeightChangeRateChange}
                duration={durationInMonths}
                weightChangeRate={weightChangePerMonth} />
            {/* <WeighChangeChart /> */}
        </div>
    )

}