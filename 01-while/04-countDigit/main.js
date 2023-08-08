/*ให้เขียนโค้ดเพื่อนับจำนวนหลักเลขโดด  
    - รับค่าตัวเลขจากผู้ใช้งาน  
    - แสดงผลลัพธ์เป็นจำนวนหลักของตัวเลข
*/

let digitInput = +prompt("Enter Number");
//let digitInput = +"+5000";

let counting = 1;

let i = 0

if(i<1) i *= -1;

while(digitInput>=10)
{
    //console.log(digitArray[i]);
    console.log(digitInput);
    digitInput /= 10
    counting++;
}
console.log(counting);

/*
///Teacher Code solution1
let input = +prompt("Enter Number");
let n =0;
let count= 1;

if(n<1) n = -n;

while(input>=10)
{
    input/=10;
    count++;
}
console.log(count);

///TeacherCode solution2

while(j)
{
    let remainder = n%10;
    n = (n-remainder)/10;
}
console.log(n);
*/