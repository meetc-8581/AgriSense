import React from "react";
import ReactApexChart from "react-apexcharts";

function CurrentDataCard(props) {
  // console.log(props);
  const circleChartInput = {
    series: [props.data],
    options: {
      chart: {
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 360,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
          },
          track: {
            background: "#fff",
            strokeWidth: "80%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: false,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -30,
              show: false,
              color: "#888",
              fontSize: "5px",
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              offsetY: 10,
              color: "#111",
              fontSize: "25px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["percent"],
    },
  };

  return (
    <div className="current-data-card">
      <div>
        <div className="current-data-card-lable">{props.dtype}</div>
        <div>{props.data}</div>
      </div>
      <div>
        <ReactApexChart
          options={circleChartInput.options}
          series={circleChartInput.series}
          type="radialBar"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}

export default CurrentDataCard;
