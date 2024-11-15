import "./App.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Revenue from "./components/Revenue";
import totalWeek from "./hooks/totalWeek";
import Header from "./components/Header";

function App() {
    let daytotal = 0;
    let yesterdaytotal = 0;
    let weektotal = 0;

    const revenue = [
        {
            name: "Наличные",
            week: 0,
            difference: 0,
            data: [10000, 50000, 50000, 60000, 50000, 50000, 50000],
        },
        {
            name: "Безналичный рассчет",
            week: 0,
            difference: 0,
            data: [10000, 30000, 10000, 30000, 5000, 5000, 10000],
        },
        {
            name: "Кредитные карты",
            week: 0,
            difference: 0,
            data: [50000, 10000, 30000, 5000],
        },
        {
            name: "Количество гостей",
            week: 0,
            difference: 0,
            data: [36, 34, 52, 32, 45, 56, 23],
        },
    ];

    const options = {
        title: {
            text: null,
        },

        data: {
            table: "revenue",
        },

        yAxis: {
            title: {
                text: null,
            },
        },

        xAxis: {
            accessibility: {
                rangeDescription: "Range: 1 to 7",
            },
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false,
                },
                pointStart: 1,
            },
        },

        series: revenue,

        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500,
                    },
                    chartOptions: {
                        legend: {
                            layout: "horizontal",
                            align: "center",
                            verticalAlign: "bottom",
                        },
                    },
                },
            ],
        },
    };

    function total(arr) {
        for (const obj of arr) {
            daytotal += obj.data[1];
            yesterdaytotal += obj.data[0];
            weektotal += obj.week;
        }
    }

    totalWeek(revenue);
    total(revenue);

    return (
        <div className="App">
            <Header
                yesterdaytotal={yesterdaytotal}
                daytotal={daytotal}
                weektotal={weektotal}
            />
            <HighchartsReact highcharts={Highcharts} options={options} />
            {revenue.map((n, index) => (
                <Revenue value={n} key={index} />
            ))}
        </div>
    );
}

export default App;
