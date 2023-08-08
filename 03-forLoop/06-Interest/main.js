/*
- ให้คำนวณเงินฝากสะสมโดยปีที่ 1 มีเงินเริ่มต้น 100,000 ธนาคารให้ดอกเบี้ยร้อยละ 2.5 ต่อปี
- โดยจ่ายดอกเบี้ยปีละครั้ง ดอกเบี้ยที่ได้จะสะสมและทบยอดไปในเงินฝากปีถัดไป
- เมื่อครบ 10 ปี จะมียอดเงินฝากสะสมเท่าใด (ไม่มีการฝากเพิ่มและถอนออก)
*/
/*ดอกเบี้ย = [(เงินต้น x อัตราดอกเบี้ย (%) x จำนวนวันที่ฝากในงวดนั้น) / จำนวนวันทั้งปี]*/

// let yearRange =10;
// let day = 365;
// let starterMoney = 100000;
// let interestRate = 2.5;
// let interest = 0;


// for(let i = 1;i<= yearRange;i++)
// {
//     interest = (starterMoney*(2.5/100)*day)/day;
//    // console.log(interest);
//     starterMoney+=interest;
// }
// console.log("Bath:"+starterMoney);

//year 1 | [ดอกเบี้ย [100000*(2.5)]  + 100000 ]เงินต้น+ดอก 
//yer  2 | เงินดอก1*2.5 +เงินต้นทบดอก1


const interestPer=(2.5/100);
let cash = 100_000;
const year = 10;

let compoundInterest = 0;
let currentInterest = 0;
let tempCompound = cash;

for(let i = 1;i<=year;i++)
{
    console.log(`Year${i}`);
    currentInterest = (tempCompound*interestPer);
    compoundInterest = currentInterest+tempCompound;
    tempCompound = compoundInterest;

    
    console.log(currentInterest);
}



