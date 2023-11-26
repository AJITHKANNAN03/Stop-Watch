var msec=0,sec=0,min=0,hour=0;
var timer;
var display=document.querySelector(".display");
var laps=document.querySelector(".laps");

// this code to display the time in the display
function getTimer(){
    return(hour<10?"0"+hour:hour)+":"+(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec)+":"+(msec<10?"0"+msec:msec);
}
// this code for trigger the milliseconds and sequences
function run(){
    display.innerHTML=getTimer();
    msec++; 
    if(msec==100){
      msec=0;
      sec++ ; 
    }
    if(sec==60){
        sec=0;
        min++ ; 
      }
      if(min==60){
        min=0;
        hour++ ; 
      }
}
// code for start
function start(){
    if(!timer){
        timer=setInterval(run,10);
    }
}
// code for pause
function pause(){
    clearInterval(timer);
    timer=false;
}
// code to reset
function reset(){
    pause();
    msec=0;
    sec=0;
    min=0;
    hour=0;
    display.innerHTML=getTimer();
}
// code for restart
function restart(){
if(timer){
    reset();
    start();
}
}
// code for get laps
function lap(){
    if(timer){
        var li=document.createElement("li");
        li.innerHTML=getTimer();
        laps.appendChild(li);
    }
}
// code for resetLaps
function resetLaps(){
    laps.innerHTML="";
}