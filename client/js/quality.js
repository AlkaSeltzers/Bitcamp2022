max_nob = 0;
max_price = 0;
num = 12
avg = Array(num).fill(0);
counts = Array(num).fill(0);
var xValues = ["Low Quality", "Average", "Fair Quality", "Good Quality", "Above Average", "Very Good", 
                "Excellent", "Superior", "Exceptional-A", "Exceptional-B", "Exceptional-C", "Exceptional-D"];
var barColors = ["pink","red", "orange","yellow","green", "darkCyan", "blue","navy","purple","brown","gray","black"];

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
          backgroundColor: barColors,
          data: avg
        }]
      },   
    options: {
    legend: {display: false},
    title: {
        display: true,
        text: "Average Price Per Room by Quality"
    }
    }
});