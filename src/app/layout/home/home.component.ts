import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  // dashboard cards
  loopValue = 1;
  cardLoop = new Array(this.loopValue);

  cardInfo = [
    { name: 'First Quarter', value: '854692', icon: 'fa fa-area-chart fa-3x' },
    { name: 'Second Quarter', value: '98465', icon: 'fa fa-bar-chart fa-3x' },
    { name: 'Third Quarter', value: '654563', icon: 'fa fa-line-chart fa-3x' },
    { name: 'Fourth Quarter', value: '215868', icon: 'fa fa-pie-chart fa-3x' },
  ];

  lineChart: any = [];
  barChart: any = [];
  pieChart: any = [];
  donughtChart: any = [];
  bubbleChart: any = [];

  //  line chart
  chartColor = [
    'rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)', 'rgba(153, 102, 255, 0.8)', 'rgba(255, 159, 64, 0.8)'
  ];
  barChartColor = 'rgba(75, 192, 192, 0.8)';
  // lineChart = [];
  lcXAxisLabel = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  lineChartData = [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9];
  lcLegendTitle = 'Number of Items Sold in Months';
  lcTitle = 'Annual Report';

  lineData = {
    labels: this.lcXAxisLabel,
    datasets: [{
      label: this.lcLegendTitle,
      data: this.lineChartData,
      fill: true,
      lineTension: 0.2,
      backgroundColor: ['#5cb29fa1'],
      borderColor: ['#5cb29f'],
      borderWidth: 2
    }]
  };
  lineOptions = {
    title: {
      text: this.lcTitle,
      display: true
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  //  Bar chart
  // barChart = [];
  bcXAxisLabel = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  BarChartData1 = [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9];
  BarChartData2 = [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9];
  BarChartData3 = [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9];
  bcLegendTitle = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  bcTitle = 'Annual Report';
  barData: any;
  barOptions: any;
  //  Pie chart and diughnut
  // pieChart = [];
  doughnutChart = [];
  pcXAxisLabel = ['Red', 'Blue', 'Green'];
  pieChartData = [90, 74, 32];
  pcLegendTitle = ['Red', 'Blue', 'Green'];
  pcTitle = 'Annual Report';

  pieData = {
    labels: this.pcXAxisLabel,
    datasets: [{
      label: 'Pie Title',
      data: this.pieChartData,
      backgroundColor: this.chartColor,
      borderColor: this.chartColor,
      borderWidth: 1
    }]
  };
  pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      text: this.pcTitle,
      display: true
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  //  ===================================== B U B B L E   C H A R T =================================
  bubbleData: any = [];
  bubbleOptions: any;


  // ============================================== Bar Chart Function ===========================================
  generateBChartData() {
    this.BarChartData1 = [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9];
    this.BarChartData2 = [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9];
    this.BarChartData3 = [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9];
    for (let i = 1; i <= 3; i++) {
      for (let j = 0; j < 12; j++) {
        this['BarChartData' + i][j] = Math.floor(Math.random() * (50) + 1);
      }
    }


    this.barData = {
      labels: this.bcXAxisLabel,
      datasets: [
        {
          label: 'Consumption',
          data: this.BarChartData3,
          backgroundColor: this.chartColor[0],
          borderColor: this.chartColor[0],
          borderWidth: 2,
          fill: 'false',
          type: 'line',
        },
        {
          label: 'Performance',
          data: this.BarChartData1,
          backgroundColor: this.chartColor[3],
          borderColor: this.barChartColor[3],
          borderWidth: 1
        },
        {
          label: 'Throughput',
          data: this.BarChartData2,
          backgroundColor: this.chartColor[1],
          borderColor: this.chartColor[1],
          borderWidth: 1,
          // type : 'bubble'
        }
      ]
    };

    this.barOptions = {
      title: {
        text: this.bcTitle,
        display: true
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    this.barChart.data = this.barData;
    this.barChart.update();
  }
  // ============================================== Bubble Chart Function ===========================================
  generateSChartData() {
    this.bubbleOptions = {
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom'
        }]
      }
    };

    const genBubbleData = [
      {
        label: 'Q1',
        data: [],
        backgroundColor: this.chartColor[0],
        hoverBackgroundColor: this.chartColor[0]
      },
      {
        label: 'Q2',
        data: [],
        backgroundColor: this.chartColor[1],
        hoverBackgroundColor: this.chartColor[1]
      },
      {
        label: 'Q3',
        data: [],
        backgroundColor: this.chartColor[2],
        hoverBackgroundColor: this.chartColor[2]
      },
      {
        label: 'Q4',
        data: [],
        backgroundColor: this.chartColor[3],
        hoverBackgroundColor: this.chartColor[3]
      }
    ];
    const label = ['Q1', 'Q2', 'Q3', 'Q4'];
    const min = -25;
    const max = 50;

    // const currData = [];
    for (let i = 0; i < 20; i++) {
      const xVal = Math.floor(Math.random() * (max) + min);
      const yVal = Math.floor(Math.random() * (max) + min);
      const rVal = Math.floor(Math.random() * (20) + 10);
      const colorCode = this.chartColor[Math.floor(Math.random() * this.chartColor.length)];
      const quarter = label[Math.floor(Math.random() * label.length)];
      // console.log(xVal + '<<< >>>' + yVal + '<<< >>>' + rVal);

      if (quarter === 'Q1') {
        genBubbleData[0].data.push({ x: xVal, y: yVal, r: rVal });
      } else if (quarter === 'Q2') {
        genBubbleData[1].data.push({ x: xVal, y: yVal, r: rVal });
      } else if (quarter === 'Q3') {
        genBubbleData[2].data.push({ x: xVal, y: yVal, r: rVal });
      } else if (quarter === 'Q4') {
        genBubbleData[3].data.push({ x: xVal, y: yVal, r: rVal });
      }
    }
    this.bubbleData = {
      datasets: genBubbleData
    };

    // For a bubble chart
    this.bubbleChart.data = this.bubbleData;
    this.bubbleChart.update();

  }


  ngOnInit() {

    // Bar chart:
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: this.barData,
      options: this.barOptions
    });

    // bubble chart
    this.bubbleChart = new Chart('bubbleChart', {
      type: 'bubble',
      data: this.bubbleData,
      options: this.bubbleOptions
    });

    this.generateSChartData();
    this.generateBChartData();
    // Line chart:
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: this.lineData,
      options: this.lineOptions
    });


    // pie chart:
    this.pieChart = new Chart('pieChart', {
      type: 'pie',
      data: this.pieData,
      options: this.pieOptions
    });

    // pie chart:
    this.doughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: this.pieData,
      options: this.pieOptions
    });

    // init ends
  }

}
