//clock rotation:

setInterval(()=>{
    // console.log("prashu bad")
    d =  new Date();
    var digitTime = document.getElementById("digitTime");
    var date = document.getElementById("date");
    var hTime = d.getHours();
    var hr = document.getElementById("hr");
    // console.log(htime)
    var mtime = d.getMinutes();
    var min = document.getElementById("min");
    // console.log(mtime)
    var stime = d.getSeconds();
    var sec = document.getElementById("sec");
    // console.log(stime*6)
    var hRotation = 30*hTime + mtime/2;
    var mRotation = 6*mtime;
    var sRotation = 6*stime;
    // console.log(stime);
    digitalClock(digitTime,date);
    
    
    hour.style.transform   = `rotate(${hRotation}deg)`
    minute.style.transform = `rotate(${mRotation}deg)`
    second.style.transform = `rotate(${sRotation}deg)`
},1000);

// dark theme toggle:

const toggle = document.querySelector('.toggle')

toggle.addEventListener('click',(e)=>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    }else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})

//digital clock//

function digitalClock(digitTime,date){
    setInterval(()=>{
    var dateValue = new Date();
    // console.log("sec "+dateValue.getSeconds());
    // console.log("min "+dateValue.getMinutes());
    // console.log("hr "+dateValue.getHours());
    var hourTime = dateValue.getHours();
    var amPm = "AM";
    if(hourTime > 12){
        amPm ="PM";
        hourTime = hourTime % 12 ;

    }
    hourTime += ' ';
    var dateStr = hourTime.padStart(2,'0') +" : "+dateValue.getMinutes() +" "+amPm;
    digitTime.innerHTML =dateStr;
    var week = dateValue.getDay();
    var day_date = dateValue.getDate();
    var weekDay ="";
    switch(week){
        case 0:
            weekDay = "Sunday";
            break;
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tuesday";
            break;
        case 3:
            weekDay = "Wednesday";
            break;
        case 4:
            weekDay = "Thursday";
            break;
        case 5:
            weekDay = "Friday";
            break;
        case 6:
            weekDay = "Saturday";
            break;
    }
    var month = dateValue.getMonth();
    var monthStr ="";
    switch(month){
        case 0:
            monthStr = "JAN";
            break;
        case 1:
            monthStr = "FEB";
            break;
        case 2:
            monthStr = "MAR";
            break;
        case 3:
            monthStr = "APR";
            break;
        case 4:
            monthStr = "MAY";
            break;
        case 5:
            monthStr = "JUN";
            break;
        case 6:
            monthStr = "JUL";
            break;
        case 7:
            monthStr = "AUG";
        case 8:
            monthStr = "SEP";
        case 9:
            monthStr = "OCT";
        case 10:
            monthStr = "NOV";
        case 11:
            monthStr = "DEC";

    }



    date.innerHTML =`${weekDay}, ${monthStr} <span id="date-highlight">${ day_date}</span></span>`;

    },1000);
}
    