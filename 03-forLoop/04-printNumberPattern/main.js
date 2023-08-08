let numText ="";
let maxRow = 8;

for(let x =1; x<=8; x++)
{
    for(let y =1; y<=x; y++)
    {
        numText += String(y);
    }
    numText+="\n";
}
console.log(numText);