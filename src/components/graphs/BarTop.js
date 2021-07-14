import ReactEcharts from "echarts-for-react";

//Chart style
const style = {
    height: "50vh",
    width: "100%"
};

export default function BarTop(props) {
    var yAxisData = [];
    var xAxisData = [];
    props.data.forEach(element => {yAxisData.push(element.name);xAxisData.push(element.value)});

    const option = {
        grid: {
            left: '30%',
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            inverse: true,
            data: yAxisData 
        },
        series: [{
            data: xAxisData,
            color: '#2D5C7F',
            type: 'bar'
        }]
    };

    return (
        <ReactEcharts option={option} style={style}  opts={{renderer: 'svg'}} className="bar-top" />
    );
} 