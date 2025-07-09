let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let second=document.getElementById("second");


let set_clock=setInterval(()=>{
    let date_now = new Date();

let hr=date_now.getHours();
let min=date_now.getMinutes();
let sec=date_now.getSeconds();



let calc_hr = hr * 30 + min * 0.5;
    let calc_min = min * 6;
    let calc_sec = sec * 6;

hour.style.transform = `translate(-50%, -100%) rotate(${calc_hr}deg)`;
minute.style.transform = `translate(-50%, -100%) rotate(${calc_min}deg)`;
second.style.transform = `translate(-50%, -100%) rotate(${calc_sec}deg)`;

},1000
);
