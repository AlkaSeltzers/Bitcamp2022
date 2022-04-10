zipcode = 20009
plot_data = []
max_nob = 0;
max_price = 0;

data.forEach(element => {
    if (element["zipcode"] == zipcode){
        obj = {}
        a = element["price"]/element["nob"]
        obj["x"] = a
        obj["y"] = element["nob"]
        if (element['nob'] > max_nob){
            max_nob = element['nob']
        }
        if (a > max_price){
            max_price = a
        }
        plot_data.push(obj)    
    }
});
  
max_price = Math.ceil(max_price / 50000) * 50000;

new Chart("myChart", {
type: "scatter",
data: {
    datasets: [{
    pointRadius: 4,
    pointBackgroundColor: "rgb(0,0,255)",
    data: plot_data
    }]
},
options: {
    legend: {display: false},
    scales: {
    xAxes: [{
        ticks: {min: 0, max:max_price},
        scaleLabel: {
            display: true,
            labelString: "Price per room",
            fontSize: 12,
            fontStyle: 'bold'
        }
        }],
    yAxes: [
        {ticks: {min: 0, max:max_nob},
        scaleLabel: {
            display: true,
            labelString: "Number of Bedrooms",
            fontSize: 12,
            fontStyle: 'bold'
        }
        }],
    },
    title: {
    display: true,
    text: "Houses in Zip Code:" + String(zipcode),
    fontSize: 16
    }
}
});