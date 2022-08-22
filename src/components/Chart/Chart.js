import React from "react";
import ChartBar from './ChartBar'
import './Chart.css'
const Chart = props => {

    //extract only values from the dataPoints array which contains the datapoints object
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    //use the Math function to get the max. pass it a comma separated list of numbers, so use a spread operator
    const totalMaximum = Math.max(...dataPointValues)
    return <div className="chart">
        {
            props.dataPoints.map(dataPoint => 
            <ChartBar 
            key = {dataPoint.label}
            value = {dataPoint.value} 
            maxValue = {totalMaximum} 
            label = {dataPoint.label}
            />)
        }
    </div>
}

export default Chart