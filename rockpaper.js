function rps(player1, player2){
    if (player1 === "rock" && player2 === "rock") {
       return "tie!";
    } else if  (player1 === "rock" && player2 === "paper") {
        return"player 2 wins!";
    } else if (player1 === "rock" && player2 === "scissors") {
        return "player 1 wins!";
    } else if (player1 === "paper" && player2 === "rock") {
        return "player 1 wins!";
    } else if (player1 === "paper" && player2 === "paper") {
        return "tie!";
    } else if (player1 === "paper" && player2 === "scissors") {
        return "player 2 wins!";
    } else if (player1 === "scissors" && player2 === "rock") {
        return "player 2 wins!";
    } else if (player1 === "scissors" && player2 === "paper") {
        return "player 1 wins!";
    } else if (player1 === "scissors" && player2 === "scissors") {
        return "tie!";
    } else if (player1 !== "rock"|| player1 !== "paper" || player1 !== "scissors" || player2 !== "rock" || player2 !== "paper" || player2 !== "scissors") {
        return "Wrong Input!";
    };

};
    

  

console.log(rps("paper", "paper"));