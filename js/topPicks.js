

async function generatePick(mydiv, num){

    var keys = [3621244, 8779876, 6613428, 5881647, 8092359];

    var div = document.getElementById(mydiv);
    num -= 1;
    mykey = keys[num];

    var response = await fetch("https://www.boredapi.com/api/activity?key=" + mykey);
    var data = await response.json();
    console.log(data);


    
    const typeUpper = data.type[0].toUpperCase() + data.type.substring(1);
    div.innerHTML = "<strong>Activity: </strong>" + data.activity + "<br><strong>Accessibility: </strong>" + data.accessibility + "<br><strong>Type: </strong>" + typeUpper + "<br><strong>Participants: </strong>" + data.participants + "<br><strong>Price: </strong>" + data.price;

}
