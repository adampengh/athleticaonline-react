import React, { Component } from 'react'
import Chart from "chart.js";

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif"
Chart.defaults.global.legend.display = true;
//--Chart Style Options--//

const getDataPoints = (data) => {
    let object = {};
    data.forEach((item) => {
        const createdAt = new Date(item.createdAt);
        const month = createdAt.getMonth() + 1;
        if (!object[month]) {
            object[month] = 1;
        } else {
            object[month] += 1;
        }
    });
    return object;
};

const months = ["JAN", "FEB", "MARCH", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"];

export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const evaluationsByMonth = getDataPoints( this.props.filterEvaluations(this.props.evaluations, 365) );
        const treatmentsByMonth = getDataPoints( this.props.filterTreatments(this.props.treatments, 365) );

        // Setup and configure graph
        const ctx = this.chartRef.current.getContext("2d");
        const {height: graphHeight} = ctx.canvas;
        const {width: graphWidth} = ctx.canvas;

        let gradientLine = ctx.createLinearGradient(0, 0, graphWidth * 4, graphHeight * 2);
        gradientLine.addColorStop(0, "rgba(255, 102, 0, 0.5)");
        gradientLine.addColorStop(1, "rgba(255, 102, 0, 0.75)");

        let gradientFill = ctx.createLinearGradient(0, 0, graphWidth * 4, graphHeight * 2);
        gradientFill.addColorStop(0, "rgba(255, 102, 0, 0)");
        gradientFill.addColorStop(1, "rgba(255, 102, 0, 0.5)");

        let gradientLine2 = ctx.createLinearGradient(0, 0, graphWidth * 4, graphHeight * 2);
        gradientLine2.addColorStop(0, "rgba(255, 51, 0, 0.5)");
        gradientLine2.addColorStop(1, "rgba(255, 51, 0, 0.75)");

        let gradientFill2 = ctx.createLinearGradient(0, 0, graphWidth * 4, graphHeight * 2);
        gradientFill2.addColorStop(0, "rgba(255, 51, 0, 0)");
        gradientFill2.addColorStop(1, "rgba(255, 51, 0, 0.5)");

        let progress = document.getElementById('animationProgress');

        new Chart(ctx, {
            type: "line",
            data: {
                //Bring in data
                labels: months,
                datasets: [
                    {
                        label: "Evaluations",
                        data: Object.values(evaluationsByMonth),
                        fill: '+1',
                        borderColor: gradientLine,
                        borderWidth: 2,
                        backgroundColor: gradientFill,
                        pointBackgroundColor: "rgba(255, 102, 0, 1)",
                        pointBorderColor: "rgba(255, 102, 0, 1)",
                        pointBorderWidth: 2,
                        pointRadius: 1
                    },
                    {
                        label: "Treatments",
                        data: Object.values(treatmentsByMonth),
                        fill: 'origin',
                        borderColor: gradientLine2,
                        borderWidth: 2,
                        backgroundColor: gradientFill2,
                        pointBackgroundColor: "rgba(255, 0, 0, 1)",
                        pointBorderColor: "rgba(255, 0, 0, 1)",
                        pointBorderWidth: 2,
                        pointRadius: 1
                    }
                ]
            },
            options: {
                //Customize chart options
                animation: {
                    duration: 2000,
                    easing: 'easeInQuad',
                    onProgress: function(animation) {
                        progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
                    },
                    onComplete: function() {
                        progress.className = 'fadeOut';
					}
                },
                layout: {
                    padding: {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom'
                },
                maintainAspectRation: false,
                plugins: {
                    filler: {
                        propogate: true
                    }
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        ticks: {
                            display: true
                        },
                        gridLines: {
                            display: true,
                            drawBorder: true
                        }
                    }],
                    yAxes: [{
                        stacked: false,
                        ticks: {
                            display: true
                        },
                        gridLines: {
                            display: false,
                            drawBorder: true
                        }
                    }]
                },
                title: {
                    display: true,
                    position: 'top'
                }
            }
        });
    }

    render() {
        return (
            <div className="chart line">
                <progress
                    id="animationProgress"
                    max="1"
                    value="0"></progress>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
