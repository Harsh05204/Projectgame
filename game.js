let userscore = 0;
let compscore = 0;
let msg = document.querySelector("#msg")
let choices = document.querySelectorAll(".choice");
let userbord= document.querySelector("#user-score");
let compbord=document.querySelector("#comp-score")

const Compchoise =()=>{
    let comp = ["rock","paper","seser"];
    let idx = Math.floor(Math.random()*3);
    return comp[idx];
}
const drawgame = ()=>{
      msg.innerText="Match was Draw"
      msg.style.backgroundColor="darkblue"
}
const playgame=(Userchoice)=>{
   console.log("user choice is",Userchoice);
   const compChoice=Compchoise();
   console.log("computer choice",compChoice);
   if(Userchoice===compChoice){
      drawgame();
   }
   else if(Userchoice!==compChoice){
       if(Userchoice==="rock"){
         if(compChoice==="paper"){
            msg.innerText="You Lose";
            msg.style.backgroundColor="red"; 
            compscore++;
            compbord.innerText=compscore;
         }
         else{
            msg.innerText="You Win!";
            msg.style.backgroundColor="green";
            userscore++;
            userbord.innerText=userscore;
         }
       }
       else if(Userchoice==="paper"){
         if(compChoice==="seser"){
            msg.innerText="You Lose";
            msg.style.backgroundColor="red"; 
            compscore++;
            compbord.innerText=compscore;
         }
         else{
            msg.innerText="You Win!";
            msg.style.backgroundColor="green";
            userscore++;
            userbord.innerText=userscore;
         }
       }
       else{
         if(compChoice==="rock"){
            msg.innerText="You Lose";
            msg.style.backgroundColor="red"; 
            compscore++;
            compbord.innerText=compscore;
         }
         else{
            msg.innerText="You Win!";
            msg.style.backgroundColor="green";
            userscore++;
            userbord.innerText=userscore;
         }
       }
   }
}
choices.forEach((choice)=>{
  console.log(choice);
  choice.addEventListener("click",()=>{
    const Userchoice = choice.getAttribute("id")
      //  console.log("choice was clicked",Userchoice);
       playgame(Userchoice);
  });
});