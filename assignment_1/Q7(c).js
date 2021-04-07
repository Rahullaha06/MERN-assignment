let n = 5;
let row = 0;
while(row <= n +1){

    let col = 0;
    while(col < n -1){

        process.stdout.write("* ");
        
        col += 1;
    }
    if(col = (n-1)){
        while(col < n){
        process.stdout.write((row+1)+" ");
        col += 1;
        }
    
    }

    process.stdout.write("\n");
    n -= 1;
    row += 1;
}

// can't get the logic.. :(