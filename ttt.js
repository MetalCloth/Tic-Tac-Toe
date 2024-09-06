let buttons=document.querySelectorAll(".box");
let reset=document.getElementById("reset");
let turn=true;
let win=document.getElementById("win");
let container=document.querySelector("#win");
const pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const disabledboxes=()=>{
    for(let boxx of buttons){
        boxx.disabled=true;
    }
};
const enableboxes=()=>{
    for(let boxx of buttons){
        boxx.disabled=false;
        boxx.innerText="";
    }
};
const tryAgain=()=>{
    win.innerText="";
    turn=true;
    enableboxes();
}

buttons.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn ){
    
            box.innerText="O"; 

        }
        else{
            box.innerText="X";
        }
        turn=!turn;
        box.disabled=true;
        checkwinner();
        checkdraw();
    });
    

});

const checkdraw=()=>{
    let c=0;
    for(let i=0;i<9;i++){
       if(buttons[i].innerText!=""){
        c++;
       }
    }
    if(c==9){
        win.innerText='DRAW!!!';
        disabledboxes();
    }
   
}
const showWinner=(winner)=>{
    win.innerText=`${winner} WIN!!!`;
    disabledboxes();
};
const checkwinner=()=>{
    let c=0;
    for(let i of pattern){
        let p1=buttons[i[0]].innerText;
        let p2=buttons[i[1]].innerText;
        let p3=buttons[i[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
                showWinner(p1);
            }
            
        }
        
    }
};
reset.addEventListener("click",tryAgain);