// this function will retrieve the data from the form -> uInput
var input = document.querySelector("form").elements;
// console.log(input);

function getData(){

  // select-option
  input
}
btn.addEventListener('click', generateData);


// http://www.boredapi.com/api/activity?accessibility=${access}&type=${type}&paticipants=var&price=var


// this is the link to query the api
// http://www.boredapi.com/api/activity?accessibility=var&type=var&paticipants=var&minprice=var&maxprice=var

/**
 * 
 * $(document).ready(function() {

  var inputPreview = $(".input-preview"),
      input = $(".input");

  TweenMax.set(input, {
    scale: 1.2,
    alpha: 0
  });

  inputPreview.on("click", function(){
    
    var that = $(this);
    
    that.toggleClass("active");
    
    if(that.hasClass("active")){
      
      TweenMax.staggerTo(input, 1.25, {
        scale: 1,
        alpha: 1,
        ease: Elastic.easeOut
      }, .1);   
    }
    else {
      TweenMax.staggerTo(input, 1, {
        scale: 1.2,
        alpha: 0,
        ease: Elastic.easeOut
      }, .1);
    }
  });

  input.on("click", function() {

    var tlInput = new TimelineMax({
      onComplete: done
    });

    var that = $(this),
      siblings = that.siblings(".input"),
      data = that.data("val"),
      top = that.css("top");

    siblings.removeClass("active");

    tlInput.to(siblings, .25, {
        alpha: 0
      })
      .to(that, .25, {
        scale: 1.2
      })
      .to(that, .25, {
        top: 0,
      })
      .set(inputPreview, {
        display: "none"
      })
      .to(that, .25, {
        scale: 1,
      })
      .to(that, .5, {
        backgroundColor: "#1D77EF"
      })
      .set(inputPreview, {
        text: data,
        display: "block"
      })
      .to(that, .25, {
        alpha: 0
      })

    function done() {
      inputPreview.removeClass("active");
      that.css("top", top).addClass("active");

      TweenMax.set(input, {
        scale: 1.2,
        alpha: 0,
        backgroundColor: "#fff"
      });
    }

  });
  
  // copy
  balapaCop("Select Input Interaction", "rgba(255,255,255,.5)");
});
 */










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


/********************************* note to self *****************************
    this will be a var --> var something = activity=value 
    
    a function for grabbing the data from search.html 
    validate price
    then fetch results
    Do I want to use JQuery?
    Turn the form into a obj?
*/