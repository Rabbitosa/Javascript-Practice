function rps(player1, _player2){
    if (player1 !=="rock"||"paper"||"scissors" || player2 !=="rock"||"paper"||"scissors"){
        return "Wrong Input!";
    }else if (player1 == "rock" && _player2 == "rock"){
       return "tie!";
    }else if  (player1 == "rock" && _player2 == "paper"){
        return"player 2 wins!";
    }else if (player1 == "rock" && _player2 == "scissors"){
        return "player 1 wins!";
    }else if (player1 == "paper" && _player2 == "rock"){
        return "player 1 wins!";
    }else if (player1 == "paper" && _player2 == "paper"){
        return "tie!";
    }else if (player1 == "paper" && _player2 == "scissors"){
        return "player 2 wins!";
    }else if (player1 == "scissors" && _player2 == "rock"){
        return "player 2 wins!";
    }else if (player1 == "scissors" && _player2 == "paper"){
        return "player 1 wins!";
    }else if (player1 == "scissors" && _player2 == "scissor"){
        return "tie!";
    };
};
    

  

console.log(rps("rock", "scissors"));