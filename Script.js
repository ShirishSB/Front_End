let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let counter = true;
let startWatch=true;
//click on start button
start.addEventListener('click', () => {
    counter = true;
    if(startWatch){
    stopWatch();
    start.style.color = "blue";
    startWatch=false;
    }
   
});
//click on stop button
stop.addEventListener('click', () => {
    counter = false;
    stop.style.color = "red";
    start.style.color = "white";
    startWatch=true;
});
//click on reset button
reset.addEventListener('click', () => {
    startWatch=true;
    counter = false;
    stop.style.color = "white";
    start.style.color = "white";
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';


});
//main functioning of timer
function stopWatch() {
    if (counter) {
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
        let hrString = hour;
        let minString = minute;
        let secString = second;
        if (hour < 10) {
            hrString = '0' + hrString;
        }
        if (minute < 10) {
            minString = '0' + minString;
        }
        if (second < 10) {
            secString = '0' + secString;
        }
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;

        setTimeout(stopWatch, 1000);
    }
}