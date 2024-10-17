let factorial = 10
let factorial_count = 1;
while (factorial> 1){
	numbernew = factorial--;
	factorial_count *= numbernew
        if(factorial_count > 1000){
        console.log("factorial greater than 1000, please try again")
        break;
          }
        console.log(factorial_count);
}