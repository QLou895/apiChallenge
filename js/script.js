var doc_div = document.querySelector("#stuff");
var btn = document.querySelector("#rand_btn");

//async means do your thing in the background so everything can continue to work
async function generateData(){
    //fetch data
    var response = await fetch("https://www.boredapi.com/api/activity");
    var data = await response.json();
    console.log(data);
    
    const typeUpper = data.type[0].toUpperCase() + data.type.substring(1);
    doc_div.innerHTML = "<div id='leftAlign'><strong>Activity:</strong> " + data.activity + "<br><strong>Accessibility:</strong> " + data.accessibility + "<br><strong>Type:</strong> " + typeUpper + "<br><strong>Participants:</strong> " + data.participants + "<br><strong>Price:</strong> " + data.price + "</div>";

}

btn.addEventListener('click', generateData);