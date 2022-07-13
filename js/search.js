
// This function will retrieve the data from the form -> uInput

var btn = document.getElementById("searchButton");
var doc_div = document.querySelector("#display");

function relabelData(dataName, dataValue){
    // parameters:
    // dataName = price, accessibility
    // dataValue = data.price, data.accessibility

    // call function = relabelData(0, data.price);

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

    if(op1 == null){
        queryType = "";
    }else{
        queryType = "type=" + op1;
    }

    if(op2 == null){
        queryMin = "";
    }else{
        queryMin = "minprice="+ op2;
    }

    if(op3 == null){
        queryMax = "";
    }else{
        queryMax = "maxprice="+ op3;
    }

    if(op5 == null){
        queryAccess = "";
    }else{
        queryAccess = "accessibility="+ op5;
    }

    if(op4 == null){
        queryParts = "";
    }else{
        queryParts = "participants="+ op4;
    }
    // Api fetch
    const response = await fetch('https://www.boredapi.com/api/activity?'+ queryAccess + '&' + queryType + '&' + queryParts + '&' + queryMin + '&' + queryMax);
    const data = await response.json();

    console.log(response.url);
    console.log(data);

        // Error Handling
    if (!data.error) {
        const typeUpper = data.type[0].toUpperCase() + data.type.substring(1);
        
        doc_div.innerHTML = "<strong>Activity: </strong>" + data.activity + "<br><strong>Accessibility: </strong>" + relabelData(1, data.accessibility) + "<br><strong>Type: </strong>" + typeUpper + "<br><strong>Participants: </strong>" + data.participants + "<br><strong>Price: </strong>" + relabelData(0, data.price);
    }else{
        doc_div.innerHTML = "Error: " + data.error;
    }
}

btn.addEventListener("click", getData);