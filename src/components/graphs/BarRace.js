import ReactEcharts from "echarts-for-react";


var data = [];
for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
}

//Chart style
const style = {
    height: "50vh",
    width: "100%"
};

let option = {
    xAxis: {
        max: 'dataMax',
    },
    yAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 2 // only the largest 3 bars will be displayed
    },
    series: [{
        realtimeSort: true,
        name: 'X',
        type: 'bar',
        data: data,
        label: {
            show: true,
            position: 'right',
            valueAnimation: true
        }
    }],
    legend: {
        show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
};


export default function BarRace(props) {
    var echarts_react;
    
    function run () {
        var data = option.series[0].data;
        for (var i = 0; i < data.length; ++i) {
            if (Math.random() > 0.9) {
                data[i] += Math.round(Math.random() * 2000);
            }
            else {
                data[i] += Math.round(Math.random() * 200);
            }
        }
        //echarts_react.setOption(option);
    }

    setInterval(function () { console.log(echarts_react); }, 3000)

    return (
        <ReactEcharts 
            notMerge={true}
            lazyUpdate={true}
            option={option} 
            style={style}  
            opts={{renderer: 'svg'}} 
            className="bar-race-chart" 
            ref={(e) => { echarts_react = e; }}
            onChartReady={setInterval(function () { run(); }, 300)}    
        />
    );
} 