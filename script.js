let you = 0;
let comp = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
let user = document.querySelector("#user-select");
let computer = document.querySelector("#comp-select");
let youpoint = document.querySelector("#user-point");
let comppoint = document.querySelector("#computer-point");
let button = document.querySelector("#start");



function compChoice(){
    let comp = Math.floor( Math.random() * 3 ) + 1;
if(comp == 1){
    comp = "Rock";
}
else if(comp == 2){
    comp = "Paper";
}
else{
    comp = "Scissor";
}
return comp;
}

rock.addEventListener("click", () =>{
    user.innerText = "Rock";
})
paper.addEventListener("click", () =>{
    user.innerText = "Paper";
})
scissor.addEventListener("click", () =>{
    user.innerText = "Scissor";
})

button.addEventListener("click", () => {
    let compdata = compChoice();
    if(user.innerText == compdata ){
        computer.innerText = compdata;
    }
    else if(user.innerText == "Rock" && compdata == "Paper"){
        comppoint.innerText = ++comp;
        computer.innerText = compdata;
    }
    else if(user.innerText == "Rock" && compdata == "Scissor"){
        youpoint.innerText = ++you;
        computer.innerText = compdata;
    }
    else if(user.innerText == "Paper" && compdata == "Rock"){
        youpoint.innerText = ++you;
        computer.innerText = compdata;
    }
    else if(user.innerText == "Paper" && compdata == "Scissor"){
        comppoint.innerText = ++comp;
        computer.innerText = compdata;
    }
    else if(user.innerText == "Scissor" && compdata == "Rock"){
        comppoint.innerText = ++comp;
        computer.innerText = compdata;
    }
    else if(user.innerText == "Scissor" && compdata == "Paper"){
        youpoint.innerText = ++you;
        computer.innerText = compdata;
    }
})