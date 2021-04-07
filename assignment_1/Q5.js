let n = 0421;
var count = 0;

if(n >= 1) 
++count;

while (n/10 >= 1){
    n = n/10;
    count++;
}
console.log(count);