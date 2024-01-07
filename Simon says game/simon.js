let gameSq=[];
let userSq=[];
let btns = ["yellow","red","purple","green"];
let started = false;
let level =0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started = true;
    }
    levelup();
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userSq = [];
    level++;
    h2.innerText=`level ${level}`;
    let randomidx=Math.floor(Math.random()*3);
    let randColor = btns[randomidx];
    let randbtn = document.querySelector(`.${randColor}`);
    
    
    gameSq.push(randColor);
    console.log(gameSq);
    btnflash(randbtn);

}

function check(idx){
   
    
    if(userSq[idx] === gameSq[idx]){
        if(userSq.length == gameSq.length){
         setTimeout(levelup , 1000);
        }
    }else{
        h2.innerHTML=`game over!! Your Score Was <b>${level}</b>  press any key to start`;
        reset();
    }
}
function btnpress(){
   let btn = this;
   userflash(btn);
   usercolor = btn.getAttribute("id");
   userSq.push(usercolor);
//    console.log(userSq);
     check(userSq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(b of allbtns){
    b.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameSq=[];
    userSq=[];
    level=0
}