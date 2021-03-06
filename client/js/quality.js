num = 12
avg = Array(num).fill(0);
counts = Array(num).fill(0);
var xValues = ["Low Quality", "Average", "Fair Quality", "Good Quality", "Above Average", "Very Good", 
                "Excellent", "Superior", "Exceptional-A", "Exceptional-B", "Exceptional-C", "Exceptional-D"];

data.forEach(element => {
    if (element["zipcode"] == zipcode){
        i = xValues.indexOf(element["grade"])
        price = element['price']/element['nob']
        counts[i] += 1;
        avg[i] += price
    }
});

for(i = 0; i < num; i++){
    avg[i] = avg[i]/counts[i]
}

new Chart("myChart2", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
          backgroundColor: "#88c28d",
          data: avg
        }]
      },   
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Average Price Per Room by Quality",
            fontSize: 24
        },
        scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Price per Room',
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
          tooltips: {
            callbacks: {
               label: function(t, d) {
                  var yLabel = t.yLabel;
                  return " " + counts[avg.indexOf(yLabel)] + " Apartments";
               }
            }
         }
    }
});