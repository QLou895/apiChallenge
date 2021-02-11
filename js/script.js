var doc_div = document.querySelector("#stuff");
var btn = document.querySelector("#searchButton");

//async means do your thing in the background so everything can continue to work
async function generateData(){
    //fetch data
    var response = await fetch("https://www.boredapi.com/api/activity");
    var data = await response.json();
    console.log(data);
    
    doc_div.innerHTML = data.minprice;

}

btn.addEventListener('click', generateData);