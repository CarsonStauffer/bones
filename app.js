var colors = [
  "#e41a1c",
  "#377eb8",
  "#4daf4a",
  "#984ea3",
  "#ff7f00",
  "#F1C40F",
  "#a65628",
  "#f781bf",
  "#68cdd6",
  "#1ABC9C",
  "#961627"
]

var labels = [
  "Q1 2015",
  "Q2 2015",
  "Q3 2015",
  "Q4 2015",
  "Q1 2016",
  "Q2 2016",
  "Q3 2016",
  "Q4 2016",
  "Q1 2017",
  "Q2 2017",
  "Q3 2017",
  "Q4 2017",
  "Q1 2018",
  "Q2 2018",
  "Q3 2018",
  "Q4 2018",
  "Q1 2019"
]

var actionData = [
  73.46,
  70.62,
  60.95,
  57.69,
  52.05,
  42.7,
  40.85,
  29.56,
  37.19,
  31.76,
  13.84,
  9.4,
  9.09,
  8.63,
  15.41,
  14.19,
  9.91
]

var adventureData = [
  67.76,
  66.48,
  65.49,
  60,
  51.83,
  39.23,
  44.21,
  27.94,
  34.98,
  33.6,
  16.27,
  9.98,
  10.61,
  8.44,
  12.16,
  11.96,
  7.06
]

var casualData = [
  65.45,
56.59,
52.29,
51.32,
49.49,
39.78,
37.24,
29.79,
35.86,
28.49,
12.56,
7.15,
6.52,
9.48,
9.94,
6.23,
3.58
]

var earlyAccessData = [
  63.16,
53.57,
40,
46.88,
36.54,
20.97,
22.62,
26.72,
16.3,
20.34,
14.29,
3.53,
8.48,
2.25,
13.51,
12.75,
9.86
]

var indieData = [
  67.11,
65.23,
57.99,
56.81,
47.83,
38.67,
40.32,
28.63,
37.55,
30.32,
14.38,
9.13,
9.59,
7.14,
9.98,
9.71,
4.78
]

var massivelyMultiplayerData = [
  28.57,
77.78,
33.33,
100,
55.56,
22.73,
53.85,
13.33,
38.89,
15,
25,
16.67,
19.23,
30.77,
38.89,
36.67,
17.65
]

var racingData = [
  65,
78.95,
52.94,
70.59,
51.85,
38.71,
23.08,
31.25,
31.25,
32.43,
19.23,
8.93,
12.12,
3.13,
18.42,
9.09,
12.5
]

var rpgData = [
  65.22,
62.5,
62.5,
57.89,
57.14,
35.98,
48.46,
18.52,
33.12,
30.19,
23.18,
17.94,
15.49,
9.17,
16.88,
21.21,
6.8
]

var simulationData = [
  62.2,
64.15,
47.62,
46.39,
46.92,
36.44,
40.53,
22.61,
36.96,
27.15,
18.81,
13.11,
14.04,
8.25,
14.04,
15.32,
8.19
]

var sportsData = [
  50,
65,
45.83,
50,
45.16,
33.96,
21.88,
12.99,
26.15,
20.31,
9.72,
6.76,
6.85,
5,
19.61,
13.46,
4.55
]

var strategyData = [
  67.52,
61.76,
51.82,
57.14,
44.94,
36.25,
40.7,
18.65,
25.89,
26.32,
16.36,
11.19,
14.29,
7.59,
7.83,
10.05,
8.72
]

function onLoad() {
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Adventure',
        data: adventureData,
        borderColor: colors[0],
        backgroundColor: colors[0]
      },
      {
        label: 'Action',
        data: actionData,
        borderColor: colors[1],
        backgroundColor: colors[1]
      },
      {
        label: 'Casual',
        data: casualData,
        borderColor: colors[2],
        backgroundColor: colors[2],
        hidden: true
      },
      {
        label: 'Early Access',
        data: earlyAccessData,
        borderColor: colors[3],
        backgroundColor: colors[3],
        hidden: true
      },
      {
        label: 'Indie',
        data: indieData,
        borderColor: colors[4],
        backgroundColor: colors[4],
        hidden: true
      },
      {
        label: 'Massively Multiplayer',
        data: massivelyMultiplayerData,
        borderColor: colors[5],
        backgroundColor: colors[5],
        hidden: true
      },
      {
        label: 'Racing',
        data: racingData,
        borderColor: colors[6],
        backgroundColor: colors[6]
      },
      {
        label: 'RPG',
        data: rpgData,
        borderColor: colors[7],
        backgroundColor: colors[7]
      },
      {
        label: 'Simulation',
        data: simulationData,
        borderColor: colors[8],
        backgroundColor: colors[8]
      },
      {
        label: 'Sports',
        data: sportsData,
        borderColor: colors[9],
        backgroundColor: colors[9]
      },
      {
        label: 'Strategy',
        data: strategyData,
        borderColor: colors[10],
        backgroundColor: colors[10]
      },
    ]
    },
    options: {
      elements: {
        line: {
          fill: false,
          borderWidth: 2
        },
        point: {
          borderWidth: 1
        }
      },
      title: {
        display: true,
        text: "Genre Success on Steam"
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            labelString: "Paid Games with over 20,000 Estimated Owners on Steam Spy",
            display: true
          },
          ticks: {
            beginAtZero: true,
            callback: function(value, index, values) {
              return value + '%';
            }
          }
        }]
      },
      tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function(tooltipItems, data) {
            return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.yLabel + '%';
          }
        }
      }
    }
  });
}
