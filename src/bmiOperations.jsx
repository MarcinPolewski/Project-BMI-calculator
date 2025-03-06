export const BMICategories = {
    Underweight: {
        range: [0, 18.5],
        message: "You are underweight.",
        risk: "increased risk of health problems"
    },
    NormalWeight: {
        range: [18.5, 24.9],
        message: "You are at a healthy weight.",
        risk: "low risk of health problems"
    },
    Overweight: {
        range: [25, 29.9],
        message: "You are overweight.",
        risk: "increased risk of health problems"
    },
    Obese: {
        range: [30, Infinity],
        message: "You are obese.",
        risk: "high risk of health problems"
    }
};

export function convertToBMIUnits(weight, height) {
    let adjustedWeight = weight.value;
    let adjustedHeight = height.value;

    if (weight.unit === "lbs") {
        adjustedWeight *= 0.45;
    }
    if (height.unit === "feet") {
        adjustedHeight *= 30.48;
    }

    // convert cm to m
    adjustedHeight /= 100;

    return [adjustedWeight, adjustedHeight];
}



export function calculateBMI(weight, height) {
    return weight / (height * height);
}

export function howMuchToChangeWeight(weight, height) {
    let bmi = calculateBMI(weight, height);

    let normalWeightLowerBound = BMICategories.NormalWeight.range[0];
    let normalWeightUpperBound = BMICategories.NormalWeight.range[1];

    let expectedWeight = 0;
    if (bmi < normalWeightLowerBound) {
        expectedWeight = normalWeightLowerBound * height * height;
    }
    else if (bmi > normalWeightUpperBound) {
        expectedWeight = normalWeightUpperBound * height * height;
    }
    else {
        return 0;
    }
    return (expectedWeight - weight);
}
