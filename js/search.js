// this function will retrieve the data from the form -> uInput


var btn = document.getElementById("searchButton");
var doc_div = document.querySelector("#display");


async function getData() {
  // variables to collect data
    var op1 = document.querySelector('#type option:checked').value;
    var op2 = document.querySelector('#minprice option:checked').value;
    var op3 = document.querySelector('#maxprice option:checked').value;
    var op4 = document.querySelector('#part option:checked').value;
    var op5 = document.querySelector('#access option:checked').value;

    
    // if (op1 != null) {
    //     //do for all outs
    //     var queryOut1 = "&type=" + op1;
    // }
    // else {
    //     queryOut1 = "";
    // }
    
    var input;
    // var data = await input.json(); 
    // console.log(data);
    // doc_div.innerHTML =  data.type;
    


    if (op2 != null && op3 == null) {
    input = await fetch('https://www.boredapi.com/api/activity?accessibility=' + op5 + '&type=' + op1 + '&participants=' + op4 + '&price=' + op2);
    var data = await input.json(); 
    console.log(data);
    doc_div.innerHTML  = "a "+ data.acessibility + " " + data.type + " " + data.participants + "" + data.price;

    }
    else if(op3 != null && op2 == null){
        input = await fetch(`http://www.boredapi.com/api/activity?accessibility=${op5}&type=${op1}&paticipants=${op4}&price=${op3}`);
        var data = await input.json(); 
        console.log(data);
        doc_div.innerHTML = "b "+ data.acessibility + " " + data.type + " " + data.participants + "" + data.price;

    } 
    else {
        input = await fetch(`https://www.boredapi.com/api/activity?accessibility=${op5}&type=${op1}&paticipants=${op4}&minprice=${op2}&maxprice=${op3}`)
        var data = await input.json(); 
        console.log(data);
        doc_div.innerHTML =  "access "+data.acessibility + " " + data.type + " " + data.participants + " " + data.price +" "+ "else";
    }
}
btn.addEventListener('click', getData());



// http://www.boredapi.com/api/activity?accessibility=${access}&type=${type}&paticipants=var&price=var


// this is the link to query the api
// http://www.boredapi.com/api/activity?accessibility=var&type=var&paticipants=var&minprice=var&maxprice=var








// $(document).ready(function () {

//     var inputPreview = $("#uInput"),
//         input = $("option");

//     TweenMax.set(input, {
//         scale: 1.2,
//         alpha: 0
//     });
// });
// inputPreview.on("click", function(){

// var that = $(this);

// that.toggleClass("active");

// if(that.hasClass("active")){
    
//     TweenMax.staggerTo(input, 1.25, {
//     scale: 1,
//     alpha: 1,
//     ease: Elastic.easeOut
//     }, .1);   
// }
// else {
//     TweenMax.staggerTo(input, 1, {
//     scale: 1.2,
//     alpha: 0,
//     ease: Elastic.easeOut
//     }, .1);
// }
// });

// input.on("click", function() {

// var tlInput = new TimelineMax({
//     onComplete: done
// });

// var that = $(this),
//     siblings = that.siblings(".input"),
//     data = that.data("val"),
//     top = that.css("top");

// siblings.removeClass("active");

// tlInput.to(siblings, .25, {
//     alpha: 0
//     })
//     .to(that, .25, {
//     scale: 1.2
//     })
//     .to(that, .25, {
//     top: 0,
//     })
//     .set(inputPreview, {
//     display: "none"
//     })
//     .to(that, .25, {
//     scale: 1,
//     })
//     .to(that, .5, {
//     backgroundColor: "#1D77EF"
//     })
//     .set(inputPreview, {
//     text: data,
//     display: "block"
//     })
//     .to(that, .25, {
//     alpha: 0
//     })

// function done() {
//     inputPreview.removeClass("active");
//     that.css("top", top).addClass("active");

//     TweenMax.set(input, {
//     scale: 1.2,
//     alpha: 0,
//     backgroundColor: "#fff"
//     });
// }

// });

// // copy
// balapaCop("Select Input Interaction", "rgba(255,255,255,.5)");
// });


/********************************* note to self *****************************
    this will be a var --> var something = activity=value 
    
    a function for grabbing the data from search.html 
    validate price
    then fetch results
    Do I want to use JQuery?
    Turn the form into a obj?
*/