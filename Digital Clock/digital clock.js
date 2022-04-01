function clock(){
    let $watch = new Date();
    let Hours = document.getElementById("hours"),
    Minutes = document.getElementById("minutes"),
    Seconds = document.getElementById("secs"),
    Day = document.getElementById("day"),
    dayName = document.getElementById("dayname"),
    Month = document.getElementById("month"),
    Year = document.getElementById("year"),
    Greeting = document.getElementById("greet"),
    Period = document.getElementById("am-pm");

    let dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let monArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July","Aug", "Sept", "Oct", "Nov", "Dec"]

    Hours.innerHTML =  " " + $watch.getHours() + " ";
    Minutes.innerHTML =  " " + $watch.getMinutes() + " ";
    Seconds.innerHTML =  " " + $watch.getSeconds() + " ";
    Day.innerHTML = " " + $watch.getDate() + " ";
    dayName.innerHTML = " " + dayArr[$watch.getUTCDay()] + " ";
    Month.innerHTML = " " + monArr[$watch.getUTCMonth()] + " ";
    Year.innerHTML =  " " + $watch.getFullYear() + " ";
    
    
    if($watch.getHours() == 0){
        Hours.innerHTML = " 12 ";
    }

    if($watch.getHours() > 12){
        Hours.innerHTML = " 0" + ($watch.getHours() - 12) + " "
    }

    if($watch.getHours() >= 22){
        Hours.innerHTML = " " + ($watch.getHours() - 12) + " "
    }

    if($watch.getHours() < 10 && $watch.getHours() > 0){
        Hours.innerHTML =  " 0" + $watch.getHours() + " ";
    }

    if($watch.getMinutes() < 10){
        Minutes.innerHTML =  " 0" + $watch.getMinutes() + " ";
    }

    if($watch.getSeconds() < 10){
        Seconds.innerHTML =  " 0" + $watch.getSeconds() + " ";
    }

    if($watch.getHours() < 6){
        Greeting.innerHTML = "Good Morning!"
        Period.innerHTML = "AM"
        Period.style.backgroundColor = "#e77810";
        Greeting.parentElement.style.backgroundColor = "#0c1c2c"
    }

    if($watch.getHours() >= 6 && $watch.getHours() <=11){
        Greeting.innerHTML = "Good Morning!"
        Period.innerHTML = "AM"
        Period.style.backgroundColor = "#e2b727";
        Greeting.parentElement.style.backgroundColor = "#1bb0eb"
    }

    if($watch.getHours() >=12 && $watch.getHours() <=16){
        Greeting.innerHTML = "Good Day!"
        Period.innerHTML = "PM"
        Period.style.backgroundColor = "#0c1c2c";
        Greeting.parentElement.style.backgroundColor = "#e77810"
    }

    if($watch.getHours() > 16){
        Greeting.innerHTML = "Good Evening!"
        Period.innerHTML = "PM"
        Period.style.backgroundColor = "#258119";
        Greeting.parentElement.style.backgroundColor = "#294663"
    }

    
};


function milliSeconds(){

    let $swatch = new Date();
    let Ms = document.getElementById("milli");
    Ms.innerHTML = " " + $swatch.getMilliseconds() + " ";
    if($swatch.getMilliseconds() < 100){
        Ms.innerHTML = " 0" + $swatch.getMilliseconds() + " ";
    }

    if($swatch.getMilliseconds() < 10){
        Ms.innerHTML = " 00" + $swatch.getMilliseconds() + " ";
    };
};

setInterval((function tick() {
    let Sounds = new Audio('/PRACTICES/HTML:CSS/ClockTick.mp3')
    Sounds.play();
}),1000)

setInterval(clock, 1000)
setInterval(milliSeconds, 1)