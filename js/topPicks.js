var doc_div = document.querySelector("#stuff");


//async means do your thing in the background so everything can continue to work

var keys = [3621244, 8779876, 6613428, 5881647, 8092359];


async function generatePick(mydiv, num){

    var div = document.querySelector(mydiv);
    
    num -= 1;
    mykey = keys[num];

    var response = await fetch("https://www.boredapi.com/api/activity?key=" + mykey);
    var data = await response.json();
    console.log(data);


    
    // const typeUpper = data.type[0].toUpperCase() + data.type.substring(1);
    // div.innerHTML = "Activity: " + data.activity + "<br>Accessibility: " + data.accessibility + "<br>Type: " + typeUpper + "<br>Participants: " + data.participants + "<br>Price: " + data.price;

}

document.addEventListener("load", generatePick("#activity1", 5));