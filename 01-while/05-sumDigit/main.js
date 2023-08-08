
let digit = +prompt("EnterNumber");
let sum = 0;
let count =0;

while(digit)
{
    let remainder = digit%10;
    digit=(digit-remainder)/10;
    
    sum += remainder;        
}

console.log(sum);