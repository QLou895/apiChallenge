//this file will have the functions for collecting the data from the search.htlm and dislplay the results to the user.


var doc_div = document.querySelector("#menuList");
var btn = document.querySelector("#searchButton");

//async means do your thing in the background so everything can continue to work
async function generateData() {
    
    //response waits for the data to be fetched from the api
    var response = await fetch("https://www.boredapi.com/api/activity, { method: 'POST', }");//idk if this will work

    //converts the raw data to a javaScript obj
    var data = await response.json();
    console.log(data);
    
    doc_div.innerHTML = data.minprice;

}

btn.addEventListener('click', generateData);

/********************************* note to self *****************************

    Do I want to use JQuery?
    Turn the form into a obj?
*/