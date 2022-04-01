"use strict";

const Search = document.getElementById("go");

Search.addEventListener("click", createNewCard);

function createNewCard(e) {
  e.preventDefault();
  createCard();
  document.getElementById("display").innerHTML =
    "<div class = 'loadercontainer'><div class = 'loader'>Loading... </div></div>";
}

function createCard() {
  let Input = document.getElementById("search");
  let input = Input.value || "https://api.github.com/users";

  let req = new XMLHttpRequest();

  req.open("GET", input, true);

  req.onreadystatechange = function () {
    if (req.readyState < 3 || req.status < 200) {
      document.getElementById("display").innerHTML =
        "<div class = 'loadercontainer'><div class = 'loader'>Loading... </div></div>";
    }

    if (req.status == 404) {
      document.getElementById("display").innerHTML =
        "<div class = 'nfcontainer'><div class = 'notfound'>Sorry, not found 🤮 <br> Error : " +
        req.status +
        "</div></div>";
    }

    if (req.readyState == 4 && req.status == 200) {
      let Result = JSON.parse(this.responseText);
      let Output = " ";
      for (let i in Result) {
        Output +=
          " <div class='card'>" +
          "<img id=   alt='' src=" +
          Result[i].avatar_url +
          " width='100%' height='200px'></img>" +
          "<div class='cardcontent' id='clientCardInfo'>" +
          "<h4>ID : <span>" +
          Result[i].id +
          Math.round(Math.random(Math.floor) * 14234134) +
          "</span></h4>" +
          "<div class = 'cardContent'>" +
          "<h5><span class='label'>Username</span><span class='detail'>" +
          Result[i].login +
          "</span></h5>" +
          "<h5><span class='label'>Age</span><span class='detail'>" +
          Math.round(Math.random(Math.floor) * 20 + 20) +
          "</span></h5>" +
          "<h5><span class='label'>Visit Github Page</span><a class='detail' href=" +
          Result[i].html_url +
          " target = '_blank'><svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='20' height='20' viewBox='0 0 172 172' style=' fill:#000000;'><g transform='translate(6.106,6.106) scale(0.929,0.929)'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='none' stroke-linecap='butt' stroke-linejoin='none' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><g fill='#00e1ff' stroke='#00e1ff' stroke-width='13' stroke-linejoin='round'><path d='M153.1875,14.78125c2.28438,0 4.03125,1.74687 4.03125,4.03125v40.3125c0,2.28438 -1.74687,4.03125 -4.03125,4.03125c-2.28438,0 -4.03125,-1.74687 -4.03125,-4.03125v-30.63855l-62.35053,62.35052c-0.80625,0.80625 -1.88072,1.2099 -2.82135,1.2099c-0.94062,0 -2.0151,-0.40365 -2.82135,-1.2099c-1.6125,-1.47812 -1.6125,-4.0302 0,-5.6427l62.35052,-62.35053h-30.63855c-2.28437,0 -4.03125,-1.74687 -4.03125,-4.03125c0,-2.28438 1.74688,-4.03125 4.03125,-4.03125zM92.71875,41.65625c2.28437,0 4.03125,1.74687 4.03125,4.03125c0,2.28438 -1.74688,4.03125 -4.03125,4.03125h-60.46875c-5.24062,0 -9.40625,4.16562 -9.40625,9.40625v80.625c0,5.24062 4.16563,9.40625 9.40625,9.40625h80.625c5.24063,0 9.40625,-4.16563 9.40625,-9.40625v-60.46875c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125c2.28438,0 4.03125,1.74688 4.03125,4.03125v60.46875c0,9.675 -7.79375,17.46875 -17.46875,17.46875h-80.625c-9.675,0 -17.46875,-7.79375 -17.46875,-17.46875v-80.625c0,-9.675 7.79375,-17.46875 17.46875,-17.46875z'></path></g><path d='M0,172v-172h172v172z' fill='none' stroke='none' stroke-width='1' stroke-linejoin='miter'></path><g fill='#00e1ff' stroke='none' stroke-width='1' stroke-linejoin='miter'><path d='M112.875,14.78125c-2.28437,0 -4.03125,1.74687 -4.03125,4.03125c0,2.28438 1.74688,4.03125 4.03125,4.03125h30.63855l-62.35052,62.35053c-1.6125,1.6125 -1.6125,4.16457 0,5.6427c0.80625,0.80625 1.88072,1.2099 2.82135,1.2099c0.94062,0 2.0151,-0.40365 2.82135,-1.2099l62.35053,-62.35052v30.63855c0,2.28438 1.74687,4.03125 4.03125,4.03125c2.28438,0 4.03125,-1.74687 4.03125,-4.03125v-40.3125c0,-2.28438 -1.74687,-4.03125 -4.03125,-4.03125zM32.25,41.65625c-9.675,0 -17.46875,7.79375 -17.46875,17.46875v80.625c0,9.675 7.79375,17.46875 17.46875,17.46875h80.625c9.675,0 17.46875,-7.79375 17.46875,-17.46875v-60.46875c0,-2.28437 -1.74687,-4.03125 -4.03125,-4.03125c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125v60.46875c0,5.24062 -4.16562,9.40625 -9.40625,9.40625h-80.625c-5.24062,0 -9.40625,-4.16563 -9.40625,-9.40625v-80.625c0,-5.24063 4.16563,-9.40625 9.40625,-9.40625h60.46875c2.28437,0 4.03125,-1.74687 4.03125,-4.03125c0,-2.28438 -1.74688,-4.03125 -4.03125,-4.03125z'></path></g><path d='' fill='none' stroke='none' stroke-width='1' stroke-linejoin='miter'></path><path d='' fill='none' stroke='none' stroke-width='1' stroke-linejoin='miter'></path></g></g></svg></a></h5>" +
          "</div>" +
          "</div>" +
          "</div>";
      }

      document.getElementById("display").innerHTML = Output;
    }
  };

  req.onerror = function () {
    document.getElementById("display").innerHTML =
      "<div class = 'nfcontainer'><div class = 'notfound'>Sorry, not found. 🤮 <br> Please check your internet connnection.<br> Error : " +
      req.status +
      "</div></div>";
  };

  req.send();
}

//EXTRASS

// Search.addEventListener("click", searchUser);

// function searchUser(e){
//     e.preventDefault();

//    let req = new XMLHttpRequest();
//    req.open("GET", "https://api.github.com/users", true)

//    req.onload = function(){
//        if(req.status == 200){
//            let Result = JSON.parse(req.responseText);
//            let Output = document.getElementById("card")
//            let display = document.getElementById("display");
//            for(let i in Result){
//             let newOutput = Output.cloneNode(true);
//             newOutput.id = "card"
//             display.innerHTML = Result[i].login
//            }
//        }
//    }
//    req.send()
// }

// //WORK ON THIS LATER
// for(let i = 0; i <= 10; i++){
//     let clientCard = document.getElementById(Card);
//     let cloneCard = clientCard.cloneNode(true);
//     let Holder = document.getElementById(Container);
//     cloneCard.style.display = "block"
//     Holder.appendChild(cloneCard)[i]; // Create New Cards for the Resulted Users.
//     document.getElementById(avi).src = "/PRACTICES/HTML:CSS/IMAGES/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg"
//     document.getElementById("clientID").innerHTML = i;
//     document.getElementById("p").style.display = "none"
// }
