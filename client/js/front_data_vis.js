plot_data = []
max_nob = 0;
max_price = 0;
count = 0;
sum_nob = 0;
sum_price = 0;

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
        count += 1;
        sum_nob += element['nob']
        sum_price += a

        plot_data.push(obj)    
    }
});

document.getElementById("average").innerHTML = "Average Price per Room: " + Math.round(sum_price/count)
                                                
document.getElementById("average2").innerHTML = "Average Number of Bedrooms: " + Math.round(sum_nob/count)


max_price = Math.ceil(max_price / 50000) * 50000;
max_nob = Math.ceil(max_nob / 5) * 5;

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