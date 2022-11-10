
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

     //end
})()   