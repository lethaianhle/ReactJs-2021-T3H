let clockElem = document.querySelector(".js-clock");

let timerElem = clockElem.querySelector(".js-clock-timer");

let key = setInterval(() => {
    timerElem.innerText = new Date().toLocaleString(); 
}, 1000);

setTimeout(() => {
   clearInterval(key);
}, 5000);

function startWatch() {
    setInterval(() => {
        
    }, interval);
}
