let hours=00;
let minutes=01;
let seconds=00;
let miliseconds=1000;
let ind=0;
let qwer;
function ver(){
        let timer=document.getElementById('timer')
        timer.innerHTML=timerUI(false);
        qwer=setInterval(count,0005);
}
function count(){
    miliseconds=miliseconds-5;
    ind++;
    if(seconds==0 & miliseconds==0 & minutes==0 & hours==0){
        timer.innerHTML=timerUI(true);
        clearInterval(qwer)
    }
    if(miliseconds==1000){ seconds++; miliseconds=0}
    else if(miliseconds==-5){ seconds--; miliseconds=995;}
    if(seconds==60){ minutes++; seconds=0}
    else if(seconds==-1){ minutes--; seconds=59}

    if(ind==5){ind=0;timer.innerHTML=timerUI(true);}
    
}

function timerUI(i){
    if(!i & miliseconds==1000){
        return hours.toString().padStart(2,'0')+':'+minutes.toString().padStart(2,'0')+':'+seconds.toString().padStart(2,'0')+':'+"000";    
    }
    return hours.toString().padStart(2,'0')+':'+minutes.toString().padStart(2,'0')+':'+seconds.toString().padStart(2,'0')+':'+miliseconds.toString().padStart(3,'0');
    
}