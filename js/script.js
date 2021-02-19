var doc_div = document.querySelector("#stuff");
var btn = document.querySelector("#rand_btn");

//async means do your thing in the background so everything can continue to work
async function generateData(){
    //fetch data
    var response = await fetch("https://www.boredapi.com/api/activity");
    var data = await response.json();
    console.log(data);
    
    const typeUpper = data.type[0].toUpperCase() + data.type.substring(1);
    doc_div.innerHTML = "<br>Activity: " + data.activity + "<br>Accessibility: " + data.accessibility + "<br>Type: " + typeUpper + "<br>Participants: " + data.participants + "<br>Price: " + data.price;

}

btn.addEventListener('click', generateData); 

