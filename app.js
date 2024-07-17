let userScore =0;
let compChoice =0;

// Get the element

const choices =document.querySelectorAll(".choice")
const mesg = document.querySelector(".msg")

const ComputerChoice = () => {
    // rock,paper.choice
    const options =["rock","paper","scissors"]
    const randomValue = Math.floor(Math.random()*3)
    return options[randomValue]
}



const playGame =(userChoice) => {
    console.log("user choice =",userChoice)
    // generate comp choice 
    const compChoice = ComputerChoice()
    console.log("computer choice is ",compChoice)

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
showWinner(userWin)
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
    mesg.innerText ="game was draw. Play Again!"
};



const showWinner = (userWin)=>{
    if(userWin){
        console.log("you win the game");
        mesg.innerText ="You win the Game !"
    }else{
        console.log("you loss the game")
        mesg.innerText ="You loss the Game. Try Again !"

    }
}
