let hr = document.querySelector("#hrs");
let mn = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {

    let Day = new Date();
    let hh = new Date().getHours()*30;
    let mm = new Date().getMinutes()*6;
    let ss = new Date().getSeconds()*6;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;


// digital clock


let h = document.getElementById('hours')
let m = document.getElementById('minutes')
let s = document.getElementById('seconds')
let time = document.getElementById('ampm')


let hrs = new Date().getHours();
let min = new Date().getMinutes();
let sc = new Date().getSeconds();

let pm = hrs >= 12 ? 'PM' : 'am'


if(hrs > 12){
    hrs = hrs - 12
}


h.innerHTML = hrs;
m.innerHTML = min;
s.innerHTML = sc;
time.innerHTML = pm ;
})