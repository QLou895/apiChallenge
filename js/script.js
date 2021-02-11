//this file will have the functions for collecting the data from the search.htlm and dislplay the results to the user.


var doc_div = document.querySelector("#menuList");
var btn = document.querySelector("#searchButton");

// a function to pull the values from the form
    // validate and check price range

    // var type = form.type.value

//the fetch function

//async means do your thing in the background so everything can continue to work
async function generateData() {
    
    //response waits for the data to be fetched from the api
    var response = await fetch(`https://www.boredapi.com/api/${type}/`);//use string interpolation
    // "https://www.boredapi.com/api/"+ activity + "=" + value if you concatinate

    //converts the raw data to a javaScript obj
    var data = await response.json();
    console.log(data);
    
    doc_div.innerHTML = data.minprice;

}

btn.addEventListener('click', generateData);

/********************************* note to self *****************************
    this will be a var --> var something = activity=value 
    
    a function for grabbing the data from search.html 
    validate price
    then fetch results
    Do I want to use JQuery?
    Turn the form into a obj?
*/