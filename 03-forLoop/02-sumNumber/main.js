/*
ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้

- หาผลรวมตัวเลขทุกตัว
- หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
- หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)
  
*/

let sum = 0;
let sumOdd,sumEven;
let sumOddSquare = 0;
let sumEvenSquare = 0;


for(let i = 1;i<=100;i++)
{
    sum+=i;
    if(i%2===0)
    {
        sumEven+=i;
        oddEvenSquare += i**2;// **square
    }
    else
    {   
        sumOdd+=i;
       
    }

    if(i%3===0) sumOddSquare += i**2;// **square
   

}


console.log("Sum:"+sum);
console.log("Odd Sum"+sumOdd);
console.log("Even Sum"+sumEven);
console.log("square sum:" +`${sumEvenSquare+sumOddSquare}`);

