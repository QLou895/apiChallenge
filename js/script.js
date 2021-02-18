var doc_div = document.querySelector("#stuff");
var btn = document.querySelector("#rand_btn");

//async means do your thing in the background so everything can continue to work
async function generateData(){
    //fetch data
    var response = await fetch("https://www.boredapi.com/api/activity");
    var data = await response.json();
    console.log(data);
    
    const typeUpper = data.type[0].toUpperCase() + data.type.substring(1);
    doc_div.innerHTML = "Key: " + data.key + "<br>Activity: " + data.activity + "<br>Price: " + data.price + "<br>Participants: " + data.participants + "<br>Type: " + typeUpper + "<br>Accessibility: " + data.accessibility;

}

btn.addEventListener('click', generateData);