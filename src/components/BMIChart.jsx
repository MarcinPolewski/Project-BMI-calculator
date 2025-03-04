import "./BMIChart.css"

export default function ({ bmi }) {
    return (
        <div className="bmi-chart">
            <div className="bmi-chart-general-box">
                <div className="bmi-chart-specyfic-box">
                    <div className="bmi-chart-box severe-bmi">Severe<br />thinness</div>
                    <div className="bmi-chart-box moderate-bmi">Moderate<br />thinness</div>
                    <div className="bmi-chart-box mild-bmi">Mild<br />thinness</div>
                </div>
                <h6>Underweight</h6>
            </div>

            <div className="bmi-chart-general-box">
                <div className="bmi-chart-specyfic-box">
                    <div className="bmi-chart-box normal-bmi">Normal<br /></div>
                </div>
                <h6>Normal</h6>
            </div>

            <div className="bmi-chart-general-box ">
                <div className="bmi-chart-specyfic-box">
                    <div className="bmi-chart-box overweight-bmi">pre-obese<br /></div>
                </div>
                <h6>Overweight</h6>
            </div>


            <div className="bmi-chart-general-box">
                <div className="bmi-chart-specyfic-box">
                    <div className="bmi-chart-box first-bmi"> Class<br />I</div>
                    <div className="bmi-chart-box second-bmi">Class<br />II</div>
                    <div className="bmi-chart-box third-bmi">Class<br />III</div>
                </div>
                <h6>Obese</h6>
            </div>
        </div>
    );
} 