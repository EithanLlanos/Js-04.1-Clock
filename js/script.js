let hours=00;
let minutes=02;
let seconds=5;
let miliseconds=1000;
let qwer=true;
function ver(){
        qwer=setInterval(count,1000);
}
function count(){
    // miliseconds--;
    seconds--
    let time=hours.toString().padStart(2,'0')+':'+minutes.toString().padStart(2,'0')+':'+seconds.toString().padStart(2,'0')+':'+miliseconds.toString().padStart(3,'0');
    timer.innerHTML=time;
    if(seconds==0){
        clearInterval(qwer)
    }
    
}

