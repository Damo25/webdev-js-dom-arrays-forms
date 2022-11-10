
(function (){
    //start
    
    document.getElementById("myHeading").innerHTML = "damo"

    document.querySelector("nav ul li").setAttribute("class", "currentPage")

    let myFirstLink = document.querySelector("nav ul li a")
    myFirstLink.setAttribute("a href=","https://www.google.com")

    let myBtn = document.getElementById("myTestEvent")
    myBtn.addEventListener("click", function(){
        console.info("i was clicked")
    })



    function myFunction(ev){
console.info(ev.target)
    }

    //background colour picker

    let bodyElement = document.querySelector("body")
    let redBtn = document.querySelector(".red")
    redBtn.addEventListener("click", function(){
        bodyElement.setAttribute("class", "redBack")
    })


     //end
})()   