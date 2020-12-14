function calculator(num1, num2, op){
    if(op === "+"){
        console.log(num1 + num2);
    } else if(op === "-"){
        console.log(num1 - num2);
    } else if(op === "*"){
        console.log(num1 * num2);
    } else if(op !== "+"){
        console.log("invalid input");
    } else if(op !== "-"){
        console.log("invalid input");
    } else if(op !== "*"){
        console.log("invalid input");
    };
};
(calculator(8, 2, ""));