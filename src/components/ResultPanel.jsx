import BMIChart from "./BMIChart";

export default function ({ bmi }) {
    return (
        <>
            < p > Your BMI is: {bmi} </p >
            <BMIChart bmi={0} />
        </>

    );
}