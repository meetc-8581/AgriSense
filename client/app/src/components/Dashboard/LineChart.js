import React from "react";
import Chart from "react-apexcharts";

function Chart1(props) {
  let chartCategory = [];
  let chartSeries = [];

  props.data.forEach((e) => {
    let date = new Date(e.timestamp);
    chartCategory.push(date.getTime());
    chartSeries.push(e.avg.toFixed(2));
  });

  // console.log(" chartCategory", chartCategory);
  // console.log(" chartSeries", chartSeries);

  let chartOptions = {
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: true,
          tools: {
            download: false,
            pan: false,
          },
        },
      },
      xaxis: {
        type: "datetime",
        categories: chartCategory,
        title: {
          text: "Time",
        },
        labels: {
          datetimeFormatter: {
            year: "yyyy",
            month: "MMM 'yy",
            day: "dd MMM",
            hour: "HH:mm",
          },
        },
      },
      yaxis: {
        min: props.minLimit,
        max: props.maxLimit,
        reversed: props.seriesLable === "Moisture",
        title: {
          text: props.seriesLable,
          floating: true,
          margin: 10,
          style: {
            fontSize: "12px",
            color: "#666",
            fontFamily: undefined,
            fontWeight: "bold",
          },
        },
      },
      stroke: {
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
        markers: {
          size: 4,
          colors: ["#FFA41B"],
          strokeColors: "#fff",
          strokeWidth: 9,
          hover: {
            size: 7,
          },
        },
        title: {
          text: "Temperature",
          align: "centre",
          style: {
            fontSize: "16px",
            color: "#666",
          },
        },
      },
    },
    series: [
      {
        name: props.seriesLable,
        data: chartSeries,
      },
    ],
  };

  // console.log("chartOPtions inside chart1", chartOptions);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="line"
            width="600"
          />
        </div>
      </div>
    </div>
  );
}

export default Chart1;
