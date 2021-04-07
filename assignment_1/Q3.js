var num1; 
var num2; 
var temp; 
var gcd;

num1 = 5;
num2 = 12;
while(num2 != 0){
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
}

gcd = num1;
console.log("GCD = ",gcd);
