
// This function will retrieve the data from the form -> uInput

var btn = document.getElementById("searchButton");
var doc_div = document.querySelector("#display");

function relabelData(dataName, dataValue){

    var label = "";

    switch(dataName){
        case 0: //price
            if (dataValue == 0){
                label = "Free";
            } else if (dataValue > 0 && dataValue < 0.2){
                label = "$1.00-$15.00";
            }else if (dataValue >= 0.2 && dataValue < 0.3){
                label = "$15.00-$25.00";
            }else if (dataValue >= 0.3 && dataValue < 0.5){
                label = "$25.00-$35.00";
            }else if (dataValue >= 0.5 && dataValue < 0.75){
                label = "$35.00-$45.00";
            }else if (dataValue >= 0.75 && dataValue < 1.0){
                label = "$55.00-$65.00";
            }else{
                label = "$65.00+";
            }
            break;
        case 1: //accessibility
            if(dataValue > 0 && dataValue <=0.25){
                label = "Effortless";
            }else if(dataValue > 0.25 && dataValue <=0.5){
                label = "Moderate";
            }else{
                label = "Concentrated";
            }
            break;
        default:
            label = "Renaming Error"
            console.log("data naming error");
    }
    return label;

}

async function getData() {

    //variables to collect data from search html
    doc_div.innerHTML="<img src='https://media.giphy.com/media/2y2Egeju1Fu7e/giphy.gif' style='display:block;margin-left: auto; margin-right:auto;' width=200px height=200px>";

    var op1 = document.querySelector('#type option:checked').value;
    var op2 = document.querySelector('#minprice option:checked').value;
    var op3 = document.querySelector('#maxprice option:checked').value;
    var op4 = document.querySelector('#part option:checked').value;
    var op5 = document.querySelector('#access option:checked').value;


    // Formating the retreaved data
    var queryAccess, queryParts, queryMax, queryMin, queryType;
    /*
        Change to "URL" obj
        URLSearchParams is a constructor 
        -- let url = new url('https://boredapi.com/api/activity'); | not placing the "?" due to low enderstanding on how search will behave.
        
        -- url.search.set() | test_1
        
        -- url search param (usp) | let usp = new URLSeachParams(str)
            --Allows the use of "for" loop and "set()" method


        -----------------------------pseudo----------------------------------------

        for loop to check all the collected data for null values. 
            If a null is found do not add to URL (or DELETE) name/value from USP 

        Take all values and add them to USP to create a search var?
        Or in for loop add them to USP till loops ends and add that to fetch?

    */
    // creating an obj to append to fetch
    const usp = new URLSearchParams({
        
        accessibility: op5,
        type: op1,
        participants: op4,
        minprice: op2,
        maxprice: op3
    });
 
    for([key,value] of usp) 

        console.log(`${key} => ${value}`);

        // broken
        if(`${key}` == null)
        {
         usp.delete(`${key}`);
        }
    }

     
    // Api fetch
    const url = new URL('https://www.boredapi.com/api/activity?');

    const response = await fetch( url + usp );
    const data = await response.json();

    console.log(response.url);
    console.log(data);
    console.log(usp);

    // Error Handling
    if (!data.error) {
        const typeUpper = data.type[0].toUpperCase() + data.type.substring(1);
        
        doc_div.innerHTML = "<strong>Activity: </strong>" + data.activity + "<br><strong>Accessibility: </strong>" + relabelData(1, data.accessibility) + "<br><strong>Type: </strong>" + typeUpper + "<br><strong>Participants: </strong>" + data.participants + "<br><strong>Price: </strong>" + relabelData(0, data.price);
    }else{
        doc_div.innerHTML = "Error: " + data.error;
    }
}

btn.addEventListener("click", getData);