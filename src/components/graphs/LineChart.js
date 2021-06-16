import ReactEcharts from "echarts-for-react";

//Import json file. Used in {options}.
//const data = require("../src/fakeDB/pieChartData");

//Array of names for legend in {options}
//const dataNames = data.map(i => i.name);

//Chart style
const style = {
    height: "50vh",
    width: "100%"
};

// Data (import later)
var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 100; i++) {
    xAxisData.push(i);
    data1.push((Math.sin(i / 5) * (i / 5 -10) + 10 + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5) + 5 + i / 6) * 5);
}

// Chart options
let option = {
    //title: {
    //    text: 'Number of tweets per day'
    //},
    //legend: {
    //    data: ['bar', 'bar2']
    //},
    toolbox: {
        // y: 'bottom',
        feature: {
            //magicType: {
            //    type: ['stack', 'tiled']
            //},
            //dataView: {},
            //saveAsImage: {
            //    pixelRatio: 2
            //}
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        emphasis: {
            focus: 'series'
        },
        animationDelay: 300
    }, 
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: 300,
};

export default function LineChart(props) {
    return (
        <ReactEcharts option={option} style={style}  opts={{renderer: 'svg'}} className="line-chart" />
    );
} 