import React, { Component } from "react";
import { Col } from "react-bootstrap";
import "./ProgressBar.scss";
import Chart from "react-apexcharts";
class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [92],
      colors: ["#20E647"],
      options: {
        chart: {
          height: 200,
          width: 200,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "80%",
            },
            dataLabels: {
              showOn: "always",
              value: {
                color: "#8f00ff",
                fontSize: "30px",
                show: true,
              },
            },
          },
        },
        labels: [""],
      },
    };
  }
  render() {
    return (
      <Col md={3}>
        <div>
          
        </div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          width={200}
          height={200}
        />
        <p className="text-center text-uppercase progress-bar-clr">completed</p>
      </Col>
    );
  }
}

export default ProgressBar;
