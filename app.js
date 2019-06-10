function onLoad() {
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [2015, 2016, 2017, 2018],
      datasets: [{
        label: 'Adventure',
        data: [.5, .43, .48, .67],
        borderColor: "#3e95cd"
      },
      {
        label: 'Action',
        data: [.6, .33, .91, .22],
        borderColor: "#8e5ea2"
      }
    ]
    },
    options: {
      scales: {
        // xAxes: [{
        //   type: 'time',
        //   distribution: 'series'
        // }],
        yAxes: [{
          // labelString: "Percent Successful",
          // display: true,
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
