
let range = 20;

// //FizzBuzz
// //1-20

for(let i = 1;i <= range;i++)//find even number
{
    if((i%3===0)&&(i%5===0))
    {
        console.log("FizzBuzz");
    }
    else if(i%3 === 0)
    {
       console.log("Fizz");
       
    }
    else if(i%5===0)
    {
       console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}//end Loop++

//FizzBuzz
//1-20

for(let i = 0;i++ <= range; )//find even number     //i++ but loop not end
{
    if((i%3===0)&&(i%5===0))
    {
        console.log("FizzBuzz");
    }
    else if(i%3 === 0)
    {
       console.log("Fizz");
       
    }
    else if(i%5===0)
    {
       console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}

///continue //โดนข้ามเป็น loop รอบถัดไป
for(let i = 1;i <= range;i++)//find even number
{
    if((i%3===0)&&(i%5===0))
    {
        console.log("FizzBuzz");
    }
    else if(i%3 === 0)
    {
      continue;
       
    }
    else if(i%5===0)
    {
       console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}

//Concat string ต่อ string

let str = "";
for(let k;k<=10;k++)
{
    if(k%3 === 0)continue;
    str += k;

}

console.log(str);

//Remove a,e,i,o,u
let src = "codecamp";
let result ="";//cdcmp

for(let l=0; l<src.length;l++){
    if((src[l] == "a")||(src[l] == "e")||(src[l] == "i")||(src[l] == "o")||(src[l] == "u"))
    {
        continue;
    }
    result += src[l];
  
}

console.log(result);

///src[0] = "c"
//src.lengthn

[1,2,3,4].map((num)=>num*10)//10 20 30 40


//Nested Loop
//Multiplication Table
for(let x = 1;x<=12;x++)
{
    for(let y = 1;y<=12;y++ )
    {
        console.log(`${x} x ${y} = ${x*y} ` );
    }
}