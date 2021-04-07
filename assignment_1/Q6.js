let rev = 0;
let num = 1721;

 while (num != 0) {
  rev *= 10;
  rev += num % 10;
  num -= num % 10;
  num /= 10;
 }
 console.log(rev);