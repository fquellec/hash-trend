import ReactEcharts from "echarts-for-react";

//Chart style
const style = {
    height: "50vh",
    width: "100%"
};



export default function PieChart(props) {
    let option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: 'Sentiment detected',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                color: ['#3fc380', '#2D5C7F', '#ec644b'],
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: props.data.Positive, name: 'Positive'},
                    {value: props.data.Neutral, name: 'Neutral'},
                    {value: props.data.Negative, name: 'Negative'},
                ]
            }
        ]
    };

    return (
        <ReactEcharts option={option} style={style} className="pie-chart" />
    );

} 