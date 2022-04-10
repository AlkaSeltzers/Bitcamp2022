grades = {}
var opts = ["Low Quality", "Average", "Fair Quality", "Good Quality", "Above Average", "Very Good", 
                "Excellent", "Superior", "Exceptional-A", "Exceptional-B", "Exceptional-C", "Exceptional-D"];

data.forEach(element => {
    zc = element["zipcode"]
    if(!(zc in Object.keys(grades))){
        grades[zc] = []
    }
    grades[zc].push(element["grade"])
})

yVals = []
zipcodes = Object.keys(grades)

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

zipcodes.forEach(zc => {
    rank = mode(grades[zc])
    yVals.push(opts.indexOf(rank))
})

colors = []
for(i = 0; i < zipcodes.length; i++){
  if(zipcodes[i] == zipcode){
    colors.push("#88c28d")
  }else{
    colors.push("#88bfc2")
  }
}

new Chart("myChart3", {
    type: "bar",
    data: {
        labels: zipcodes,
        datasets: [{
          backgroundColor: colors,
          data: yVals
        }]
      },   
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Average Quality for each Zipcode",
            fontSize: 24
        },
        scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Quality',
                fontSize: 12,
                fontStyle: 'bold'
              }
            }],
            xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'ZipCode',
                  fontSize: 12,
                    fontStyle: 'bold'
                }
              }]
          },
    }
});