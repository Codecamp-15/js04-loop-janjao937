
//ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100
let range = 100;
let isPrime = true;

for(let i = 1;i<=range;i++)
{
    if(i===1) continue;

    isPrime = true;
    for(let j = 2;j<= Math.sqrt(i);j++)//Check Root
    {
        if(i%j === 0)
        {
            //Not prime
            isPrime = false;
            break;
        }
    }

    if(isPrime)
    {
        console.log(i);
    }
}











//primeNumber.map((x)=>console.log(x));


// for(let j = 2;j<=currenNumberChecking;j++)//check num isPrime Or not
// {
//    if(range % currenNumberChecking!==0)
//    {
//        //not prime
//        primeNumber.push(currenNumberChecking);
//        return;
//    }

// }






// let arrayNumberForDivide = [2,3,5,7,11,13];

// let primeNumber =[];
// let range = 100;

// for(let i = 1;i<=100;i++)
// {
//     for(let j = 1;j<arrayNumberForDivide.length;j++)
//     {
//         if(i%arrayNumberForDivide[j] != 0)
//         {
//             primeNumber.push(i);
//         }
//     }
// }
// console.log(primeNumber);








// // for(let i = 1;i<=100;i++)
// // {
// //     //2-9 /
// //     for(let j = 0;j < arrayNumberForDivide.length;j++)
// //     {
       
// //         if(i%arrayNumberForDivide[j]===0)
// //         {
// //             continue;
// //         }
// //         else
// //         {
// //             primeNumber.push(i);
// //             break;
// //         }
// //     }
// // }

// //console.log(primeNumber);