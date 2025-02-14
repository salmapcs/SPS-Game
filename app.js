let userScore =0;
let compScore =0;

// Get the element

const choices =document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara =document.querySelector("#user-score")
const compScorePara =document.querySelector("#comp-score")



const ComputerChoice = () => {
    // rock,paper.choice
    const options =["rock","paper","scissors"]
    const randomValue = Math.floor(Math.random()*3)
    return options[randomValue]
}



const playGame =(userChoice) => {
    // console.log("user choice =",userChoice)
    // generate comp choice 
    const compChoice = ComputerChoice()
    // console.log("computer choice is ",compChoice)

    if(userChoice === compChoice){
        // draw game
        drawGame()
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors , rock
           userWin= compChoice ==="paper" ? false:true;
        }else if(userChoice === "paper"){
            // rock .scissors
            userWin= compChoice ==="scissors" ? false :true;
        }else {
            // rock ,paper
           userWin= compChoice ==="rock"?false:true;
        }
showWinner(userWin ,userChoice ,compChoice)
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log("user choice is ",userChoice);
        playGame(userChoice)
    })
});



const drawGame =() =>{
    console.log("game was draw")
    msg.innerText ="Game was draw. Play Again!";
msg.style.backgroundColor ="black";
};



const showWinner = (userWin ,userChoice ,compChoice )=>{
    if(userWin){
        // chnge the score 
        userScore++;
        userScorePara.innerText =userScore
        msg.innerText =`You win the Game ! Your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor ="green";

    }else{
        // chnge the score
        compScore++;
        compScorePara.innerText =compScore
        msg.innerText ="You loss the Game. Try Again !";;
        msg.style.backgroundColor ="red";

    }
}


