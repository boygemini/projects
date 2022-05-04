"use strict";
let y1 = document.getElementById("y1");
let n1 = document.getElementById("n1");
let y2 = document.getElementById("y2");
let n2 = document.getElementById("n2");
let y3 = document.getElementById("y3");
let n3 = document.getElementById("n3");

let Q1 = document.getElementById("q1");
let D1 = document.getElementById("datetime");
let D2 = document.getElementById("dateonly");
let Layer = document.getElementById("layer");
let fCont = document.getElementById("mm");
let calcForm = document.getElementById("calcform");
let errNote = document.getElementById("errornote");
let fContent = document.getElementById("frontContent"),
  resultPage = document.getElementById("result");

const countdownTimer = () => {
  let sec = document.getElementById("seconds"),
    min = document.getElementById("minutes"),
    hr = document.getElementById("hours"),
    dy = document.getElementById("days");

  let currentDate = new Date(),
    releaseDate = new Date("12/25/2022,23:59:59");

  let dateDifference = releaseDate - currentDate;

  let Days = Math.floor(dateDifference / (1000 * 60 * 60 * 24)),
    Hours = releaseDate.getHours() - currentDate.getHours(),
    Minutes = releaseDate.getMinutes() - currentDate.getMinutes(),
    Seconds = releaseDate.getSeconds() - currentDate.getSeconds();

  dy.innerText = Days;
  hr.innerText = Hours;
  min.innerText = Minutes;
  sec.innerText = Seconds;
};

setInterval(countdownTimer, 1000); //Starts Original Timer

//Display Calculator Forms
document.getElementById("calcform").style.display = "none";
document.getElementById("result").style.display = "none";

const displayForm = () => {
  errNote.style.display = "none";
  if (calcForm.style.display == "none") {
    calcForm.style.display = "flex";
  } else {
    calcForm.style.display = "none";
  }

  let Box = document.querySelectorAll(".box");
  Box.forEach((boxes) => {
    boxes.style.display = "none";
    Box[0].style.display = "flex";
  });

 y1.addEventListener("click", () => {
    Q1.style.display = "none";
    D2.style.display = "block";
    D2.className += " jumpin";
  });

  n1.addEventListener("click", () => {
    Q1.style.display = "none";
    D1.style.display = "block";
    D1.className += " jumpin";
  });

  window.onclick = function (event) {
    if (
      event.target == Layer ||
      event.target == fContent ||
      event.target == document.getElementById("mainsection")
    ) {
      calcForm.style.display = "none";
      console.log("hey");
    }
  };
};

//Initiate Calculator
const startCalculator = () => {
  let fContent = document.getElementById("frontContent"),
    resultPage = document.getElementById("result");

  let firstInput = document.getElementById("date1").value;
  let secondInput = document.getElementById("date2").value;
  let years = document.getElementById("iYears");
  let months = document.getElementById("iMonths");
  let weeks = document.getElementById("iWeeks");
  let days = document.getElementById("iDays");
  let hours = document.getElementById("iHours");
  let minutes = document.getElementById("iMinutes");
  let seconds = document.getElementById("iSeconds");

  let tyears = document.getElementById("tYears");
  let tmonths = document.getElementById("tMonths");
  let tweeks = document.getElementById("tWeeks");
  let tdays = document.getElementById("tDays");
  let thours = document.getElementById("tHours");
  let tminutes = document.getElementById("tMinutes");
  let tseconds = document.getElementById("tSeconds");

  setTimeout(() => {
    fContent.style.display = "none";
  }, 400);

  if (resultPage.style.display == "flex") {
    resultPage.className += " loadDown";
    fContent.className += " loadUp";
    setTimeout(() => {
      resultPage.className = resultPage.className.replace(" loadDown", "");
      fContent.className = fContent.className.replace("loadUp", "");
    }, 400);
  } else {
    fContent.className = " loadDown";
    resultPage.className += " loadUp";
    setTimeout(() => {
      resultPage.style.display = "flex";
    }, 400);
  }

  let date1 = new Date(firstInput);
  let date2 = new Date(secondInput);
  document.getElementById("dateInput1").innerText = date1.toDateString();
  document.getElementById("dateInput2").innerText = date2.toDateString();
  let Diff = date1 - date2;
  if (Diff < 0) {
    Diff = -Diff;
  }
  console.log(Diff);

  let Yrs, Mnths, Wks, Dys, Hrs, Mins, Secs;

  Yrs = Math.floor(Diff / (1000 * 60 * 60 * 24 * 30.4 * 12));
  Mnths = Math.floor(
    (Diff % (1000 * 60 * 60 * 24 * 30.4 * 12)) / (1000 * 60 * 60 * 24 * 30)
  );
  Wks = Math.floor(
    ((Diff % (1000 * 60 * 60 * 24 * 30.4 * 12)) % (1000 * 60 * 60 * 24 * 30)) /
      (1000 * 60 * 60 * 24 * 7)
  );
  Dys = Math.floor(
    (((Diff % (1000 * 60 * 60 * 24 * 30.4 * 12)) % (1000 * 60 * 60 * 24 * 30)) %
      (1000 * 60 * 60 * 24 * 7)) /
      (1000 * 60 * 60 * 24)
  );
  Hrs = Math.floor(
    (((Diff % (1000 * 60 * 60 * 24 * 30.4 * 12)) % (1000 * 60 * 60 * 24 * 30)) %
      (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
  );
  Mins = Math.floor(
    ((((Diff % (1000 * 60 * 60 * 24 * 30.4 * 12)) %
      (1000 * 60 * 60 * 24 * 30)) %
      (1000 * 60 * 60 * 24)) %
      (1000 * 60 * 60)) /
      (1000 * 60)
  );
  Secs = Math.floor(
    (((((Diff % (1000 * 60 * 60 * 24 * 30.4 * 12)) %
      (1000 * 60 * 60 * 24 * 30)) %
      (1000 * 60 * 60 * 24)) %
      (1000 * 60 * 60)) %
      (1000 * 60)) /
      1000
  );

  tyears.innerHTML = Math.floor(Diff / (1000 * 60 * 60 * 24 * 30.4 * 12));
  tmonths.innerHTML = Math.floor(Diff / (1000 * 60 * 60 * 24 * 30.4));
  tweeks.innerHTML = Math.floor(Diff / (1000 * 60 * 60 * 24 * 7));
  tdays.innerHTML = Math.floor(Diff / (1000 * 60 * 60 * 24));
  thours.innerHTML = Math.floor(Diff / (1000 * 60 * 60));
  tminutes.innerHTML = Math.floor(Diff / (1000 * 60));
  tseconds.innerHTML = Math.floor(Diff / 1000);

  years.innerHTML = Yrs;
  months.innerHTML = Mnths;
  weeks.innerHTML = Wks;
  days.innerHTML = Dys;
  hours.innerHTML = Hrs;
  minutes.innerHTML = Mins;
  seconds.innerHTML = Secs;

  console.log(resultPage.className);
};

//Check if date fields are correctly filled
const check = (X, Y) => {
  let checkErr = document.getElementById("errornote");
  let firstInput = document.getElementById(X).value;
  let secondInput = document.getElementById(Y).value;

  if (firstInput == "" || secondInput == "") {
    checkErr.style.display = "inline-block";
  } else {
    startCalculator();
    let calcForm = document.getElementById("calcform");
    calcForm.style.display = "none";
    checkErr.style.display = "none";
  }
};
 
//Notice
const closeNotice = () => {
  document.getElementById("notice").style.display = "none";
};

//Close Result
const done = () => {
  let resultPage = document.getElementById("result");
  let fContent = document.getElementById("frontContent");
  resultPage.className += " loadDown";
  fContent.className = " loadUp";

  setTimeout(() => {
    resultPage.style.display = "none";
    fContent.style.display = "block";
    resultPage.className = resultPage.className.replace(" loadDown", "");
    fContent.className = fContent.className.replace("loadUp", "");
  }, 400);
};

//Start Countdown
const beginCountDown = () => {
  let years = document.getElementById("iYears");
  let months = document.getElementById("iMonths");
  let weeks = document.getElementById("iWeeks");
  let days = document.getElementById("iDays");
  let hours = document.getElementById("iHours");
  let minutes = document.getElementById("iMinutes");
  let seconds = document.getElementById("iSeconds");

  let tyears = document.getElementById("tYears");
  let tmonths = document.getElementById("tMonths");
  let tweeks = document.getElementById("tWeeks");
  let tdays = document.getElementById("tDays");
  let thours = document.getElementById("tHours");
  let tminutes = document.getElementById("tMinutes");
  let tseconds = document.getElementById("tSeconds");

  setTimeout(() => {
    fContent.style.display = "none";
  }, 400);

  if (resultPage.style.display == "flex") {
    resultPage.className += " loadDown";
    fContent.className += " loadUp";
    setTimeout(() => {
      resultPage.className = resultPage.className.replace(" loadDown", "");
      fContent.className = fContent.className.replace("loadUp", "");
    }, 400);
  } else {
    fContent.className = " loadDown";
    resultPage.className += " loadUp";
    setTimeout(() => {
      resultPage.style.display = "flex";
    }, 400);
  }

  setInterval(() => {
    let dateInputed = document.getElementById("date3").value;
    let startDate = new Date(dateInputed);
    let currentDate = new Date();
    let dateDiff = startDate - currentDate;
    let Days;
    Days = Math.floor(dateDiff / 1000);
    seconds.innerHTML = Days;

    let Yrs, Mnths, Wks, Dys, Hrs, Mins, Secs;
    // let tYrs, tMnths, tWks, tDys, tHrs, tMins, tSecs;

    Yrs = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 30.4 * 12));
    Mnths = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24 * 30.4 * 12)) /
        (1000 * 60 * 60 * 24 * 30)
    );
    Wks = Math.floor(
      ((dateDiff % (1000 * 60 * 60 * 24 * 30.4 * 12)) %
        (1000 * 60 * 60 * 24 * 30)) /
        (1000 * 60 * 60 * 24 * 7)
    );
    Dys = Math.floor(
      (((dateDiff % (1000 * 60 * 60 * 24 * 30.4 * 12)) %
        (1000 * 60 * 60 * 24 * 30)) %
        (1000 * 60 * 60 * 24 * 7)) /
        (1000 * 60 * 60 * 24)
    );
    Hrs = Math.floor(
      (((dateDiff % (1000 * 60 * 60 * 24 * 30.4 * 12)) %
        (1000 * 60 * 60 * 24 * 30)) %
        (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );
    Mins = Math.floor(
      ((((dateDiff % (1000 * 60 * 60 * 24 * 30.4 * 12)) %
        (1000 * 60 * 60 * 24 * 30)) %
        (1000 * 60 * 60 * 24)) %
        (1000 * 60 * 60)) /
        (1000 * 60)
    );
    Secs = Math.floor(
      (((((dateDiff % (1000 * 60 * 60 * 24 * 30.4 * 12)) %
        (1000 * 60 * 60 * 24 * 30)) %
        (1000 * 60 * 60 * 24)) %
        (1000 * 60 * 60)) %
        (1000 * 60)) /
        1000
    );

    tyears.innerHTML = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 30.4 * 12));
    tmonths.innerHTML = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 30.4));
    tweeks.innerHTML = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 7));
    tdays.innerHTML = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    thours.innerHTML = Math.floor(dateDiff / (1000 * 60 * 60));
    tminutes.innerHTML = Math.floor(dateDiff / (1000 * 60));
    tseconds.innerHTML = Math.floor(dateDiff / 1000);

    years.innerHTML = Yrs;
    months.innerHTML = Mnths;
    weeks.innerHTML = Wks;
    days.innerHTML = Dys;
    hours.innerHTML = Hrs;
    minutes.innerHTML = Mins;
    seconds.innerHTML = Secs;
  }, 1000);
};

//Check is date field is correctly filled
const check2 = (X) => {
  let checkErr = document.getElementById("errornote2");
  let firstInput = document.getElementById(X).value;

  let startDate = new Date(firstInput);
  let currentDate = new Date();
  let dateDiff = startDate - currentDate;

  if (firstInput == "") {
    checkErr.style.display = "inline-block";
  } else if (dateDiff == 0 || dateDiff < 0) {
    checkErr.innerText = "Please enter a future date 🧐";
    checkErr.style.display = "inline-block";
  } else {
    beginCountDown();
    let calcForm = document.getElementById("calcform");
    calcForm.style.display = "none";
    checkErr.style.display = "none";
  }
};

//Menu for Mobile Devices
document.getElementById("menulist").style.height = "0px";
document.getElementById("menulist").style.padding = "0px";

const openMenu = () => {
  let menuList = document.getElementById("menulist");
  console.log(menuList.scrollHeight);

  if (menuList.style.height === "0px") {
    menuList.style.height = "70px";
    menuList.style.transition = ".3s ease-out";
  }
  if (menuList.scrollHeight === 70) {
    menuList.style.height = "0px";
    menuList.style.transition = ".2s ease-in-out";
  }
};
