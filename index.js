var screenWidth = innerWidth

if (screenWidth > 375){
    console.log(document.querySelector(".bg").setAttribute("src", "images/bg-intro-desktop.png"))
}

var count = document.querySelectorAll("input").length
var inputs = document.querySelectorAll("input")

for (var i = 0; i < count; i++){
    getNumber(i)
}

function getNumber(number){
    var inputs = document.querySelectorAll("input")[number]
    var errorImg = document.querySelectorAll(".error-img")[number]
    var errorMsg = document.querySelectorAll(".alert")[number]
    var email = document.getElementById("email")

    // console.log(inputs)

    document.querySelector(".claim").addEventListener("click", function(){
        var check = inputs.value === ""

        // console.log(check)

        if(email.value.includes("@" && ".com") === false){
            document.querySelectorAll("input")[2].classList.add("error")
            document.querySelectorAll(".error-img")[2].classList.add("error-show")
            document.querySelectorAll(".alert")[2].classList.add("alert-on")
        }
        
        if(check == true){
            inputs.classList.add("error")
            errorImg.classList.add("error-show")
            errorMsg.classList.add("alert-on")
            
        }else if(check === false){

            inputs.classList.remove("error")
            errorImg.classList.remove("error-show")
            errorMsg.classList.remove("alert-on")
        }
        
    })
}