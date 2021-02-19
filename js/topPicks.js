// generatePick("activity3", 5);
//async means do your thing in the background so everything can continue to work
var doc_div = document.getElementById('activity3');

async function generatePick(num){

    var keys = [3621244, 8779876, 6613428, 5881647, 8092359];

    // var doc_div = document.getElementById('activity3');
    // console.log(doc_div.innerText);
    num -= 1;
    mykey = keys[num];

    var response = await fetch("https://www.boredapi.com/api/activity?key=" + mykey);
    var data = await response.json();
    console.log(data);


    
    const typeUpper = data.type[0].toUpperCase() + data.type.substring(1);
    doc_div.innerHTML = "Activity: " + data.activity + "<br>Accessibility: " + data.accessibility + "<br>Type: " + typeUpper + "<br>Participants: " + data.participants + "<br>Price: " + data.price;

}

generatePick(5);
