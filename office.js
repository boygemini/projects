document.getElementById("form2").style.display = "none";
document.getElementById("form3").style.display = "none";

let formOne = document.getElementById("form1"),
    formTwo = document.getElementById('form2'),
    formThree = document.getElementById("form3");

document.getElementById("next").addEventListener("click", (e)=>{
    e.preventDefault();
    
    if(formTwo.style.display == "none"){
        let userEmail = document.getElementById("useremail").value;
        document.getElementById("email-input").innerHTML = userEmail || ".";

        formOne.className += " moveOut"
        document.getElementById("option").className += " fadeAway"

        setTimeout(()=>{
            document.getElementById("option").classList.remove("fadeAway")
            document.getElementById("option").style.display = "none"
        },200)

        setTimeout(()=>{
            formOne.style.display = "none"
            formOne.classList.remove(" moveOut")
        },250);

        setTimeout(()=>{
            formTwo.style.display = "block"
            formTwo.className += " moveIn"   
        },300);
    }
})


document.getElementById("option-git").addEventListener("click", (e)=>{
    window.location = "https://github.com/login?allow_signup=false&client_id=e37ffdec11c0245cb2e0&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3De37ffdec11c0245cb2e0%26redirect_uri%3Dhttps%253A%252F%252Flogin.live.com%252FHandleGithubResponse.srf%26response_type%3Dcode%26scope%3Dread%253Auser%2B%2Buser%253Aemail%26state%3D65D12EA1E7CE9418"
})


document.getElementById("option").addEventListener("click", (e)=>{
    if(formThree.style.display == "none"){
        formOne.className += " moveOut"
        document.getElementById("option").className += " fadeAway"

        setTimeout(()=>{
            document.getElementById("option").classList.remove("fadeAway")
            document.getElementById("option").style.display = "none"
        },200)
        setTimeout(()=>{
            formOne.style.display = "none"
            formOne.classList.remove(" moveOut")
        },250);

        setTimeout(()=>{
            formThree.style.display = "block"
            formThree.className += " moveIn"   
        },400)
    }
})


document.getElementById('back2').addEventListener("click", (e)=>{
    e.preventDefault();
    if(formOne.style.display == "none"){
        formThree.className += " reverseMoveOut"

        setTimeout(()=>{
            document.getElementById("option").style.display = "block"
        },200);

        setTimeout(()=>{
            formThree.style.display = "none"
            formThree.className = formThree.className.replace(" reverseMoveOut", " ")
        },250);

        setTimeout(()=>{
            formOne.style.display = "block"
            formOne.className += " reverseMoveIn"   
        },400)
    }
})