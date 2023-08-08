/*

ประเภทของLoop
-codition Loop      Bool
-counting Loop      Number
-List Loop          array,list

*/

//while
// let i  =0;
// while(i<=10)
// {
//     console.log(i);
//     i++;
//    //Do something
// }

//FizzBuzz
//Range 1-20
let j = 0;
let range = 20;

while(j<=range)
{

    (j%3 === 0)&&(j%5===0)?console.log("FizzBuzz"):(j%3 === 0)?console.log("Fizz"):(j%5===0)?console.log("Buzz"): console.log(j);
    /*
   if((j%3 === 0)&&(j%5===0))
   {
        
        console.log("FizzBuzz");
    }
    else if(j%3 === 0)
    {
       console.log("Fizz");
       
    }
    else if(j%5===0)
    {
       console.log("Buzz");
    }
    else
    {
        console.log(j);
    }
*/
    j++;
}

