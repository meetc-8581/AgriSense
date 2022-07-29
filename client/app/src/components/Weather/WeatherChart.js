import React from "react";
import ReactApexChart from "react-apexcharts";

function WeatherChart(props) {
  //   console.log(props.data);
  const chartData = {
    series: [{ data: props.data.slice(0, 12) }],
    options: {
      chart: {
        height: 800,
        type: "area",
        zoom: {
          autoScaleYaxis: true,
        },
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ffc652"],
      },
      xaxis: {
        type: "datetime",
        // min: new Date().getTime(),
        // max: new Date().getTime(),
        tickAmount: 1,
        labels: {
          show: true,
          //   format: "h TT",
          datetimeFormatter: {
            // year: "yyyy",
            // month: "MMM 'yy",
            // day: "dd MMM",
            hour: "HH TT",
          },
          style: {
            fontSize: "12px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            fontSize: "12px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
          },
        },
      },

      fill: {
        type: "gradient",
        gradient: {
          //   shade: "dark",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: [], // optional, if not defined - uses the shades of same color in series
          inverseColors: false,
          //   opacityFrom: 1,
          //   opacityTo: 0,
          //   stops: [0, 50, 100],
          colorStops: [
            {
              offset: 30,
              color: "#edc599",
              opacity: 0.7,
            },
            // {
            //   offset: 40,
            //   color: "#",
            //   opacity: 0.7,
            // },
            {
              offset: 50,
              color: "#98c9ac",
              opacity: 0.7,
            },
            // {
            //   offset: 60,
            //   color: "#",
            //   opacity: 0.7,
            // },
            // {
            //   offset: 70,
            //   color: "#",
            //   opacity: 0.7,
            // },
            {
              offset: 80,
              color: "#55cde6",
              opacity: 0.7,
            },
          ],
        },
      },

      tooltip: {
        x: {
          show: false,
          title: "Size: ",
          format: "dd/MM ddd h TT",
        },
        marker: {
          show: false,
        },
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow_box">' +
            "<span>" +
            series[seriesIndex][dataPointIndex] +
            "° F " +
            "</span>" +
            "</div>"
          );
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -6,
        style: {
          //   fontWeight: "bold",
          fontFamily: "Poppins, sans-serif",
          colors: ["#000"],
          marginBottom: "10px",
        },
        background: {
          enabled: false,
          foreColor: "#000",
          padding: 4,
          borderRadius: 2,
          borderWidth: 1,
          //   borderColor: "#fff",
          opacity: 0.7,
        },
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
        width={800}
      />
    </div>
  );
}

export default WeatherChart;
