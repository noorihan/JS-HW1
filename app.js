let number = parseInt(prompt("Give any number:"));

if(number%2 == 0){
    document.write(`${number} is Even`);
}
else if (number%2 > 0){
    document.write(`${number} is Odd`);
}
else{
    document.write("The input is not a number");
}

