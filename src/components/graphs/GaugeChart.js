import ReactEcharts from "echarts-for-react";

//Chart style
const style = {
    height: "30vh",
    width: "100%"
};

let option = {
    series: [{
        type: 'gauge',
        radius: '100%', // this
        center: ['50%', '80%'],
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 1,
        splitNumber: 8,
        axisLine: {
            lineStyle: {
                width: 6,
                color: [
                    [0.33, '#FF6E76'],
                    [0.66, '#FDDD60'],
                    [1, '#7CFFB2']
                ]
            }
        },
        pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '12%',
            width: 20,
            offsetCenter: [0, '-60%'],
            itemStyle: {
                color: 'auto'
            }
        },
        axisTick: {
            length: 12,
            lineStyle: {
                color: 'auto',
                width: 2
            }
        },
        splitLine: {
            length: 20,
            lineStyle: {
                color: 'auto',
                width: 5
            }
        },
        axisLabel: {
            color: '#464646',
            fontSize: 20,
            distance: -120,
            formatter: function (value) {
                if (value === 0.875) {
                    return 'Positive';
                }
                else if (value === 0.5) {
                    return 'Neutral';
                }
                else if (value === 0.125) {
                    return 'Negative';
                }
            }
        },
        detail: {
            fontSize: 20,
            offsetCenter: [0, '0%'],
            valueAnimation: true,
            formatter: function (value) {
                return Math.round(value * 100) + '%';
            },
            color: 'auto'
        },
        data: [{
            value: 0.70,
            name: 'tweets'
        }]
    }]
};

export default function GaugeChart(props) {
    return (
        <ReactEcharts option={option} style={style} className="gauge-chart" />
    );

} 