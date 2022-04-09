zipcode = 20009
plot_data = []

mydata.forEach(element => {
    if (element["zipcode"] == zipcode){
        obj = {}
        obj[x] = element["price"]/element["nob"]
        obj[y] = element["nob"]
        plot_data.push(obj)    
    }
});
  
new Chart("myChart", {
type: "scatter",
data: {
    datasets: [{
    pointRadius: 4,
    pointBackgroundColor: "rgb(0,0,255)",
    data: plot_data
    }]
},
//ADD TITLES
options: {
    legend: {display: false},
    scales: {
    xAxes: [{ticks: {min: 40, max:160}}],
    yAxes: [{ticks: {min: 6, max:16}}],
    },
    title: {
    display: true,
    text: String(zipcode),
    fontSize: 16
    }
}
});