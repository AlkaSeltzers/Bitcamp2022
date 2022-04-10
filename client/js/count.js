num = 12
counts = Array(num).fill(0);
var xValues = ["Low Quality", "Average", "Fair Quality", "Good Quality", "Above Average", "Very Good", 
                "Excellent", "Superior", "Exceptional-A", "Exceptional-B", "Exceptional-C", "Exceptional-D"];

data.forEach(element => {
    if (element["zipcode"] == zipcode){
        i = xValues.indexOf(element["grade"])
        counts[i] += 1;
    }
});

new Chart("myChart4", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
          backgroundColor: "#88bfc2",
          data: counts
        }]
      },   
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Number of Apartments by Quality",
            fontSize: 24
        },
        scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: '# of Apartments',
                fontSize: 12,
                fontStyle: 'bold'
              }
            }],
            xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Quality Ranking',
                  fontSize: 12,
                    fontStyle: 'bold'
                }
              }]
          },
    }
});