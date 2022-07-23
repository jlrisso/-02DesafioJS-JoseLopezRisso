
/**
 * 
 * @Author: JOSE LOPEZ RISSO 
 * @Email: jal.risso@gmail.com
 * @Date: 22-07-2022 
 * @License: 
 * 
 * 
 **/




const MAX_SAFE_INTEGER = 12;

let myNumber = Math.trunc(Number(prompt("Dame un numero positivo para sumar sus cifras: ")));
const result = sumDigits(myNumber);
console.log(result);



function sumDigits(number){
    if (!number || number <0 || `${number}`.length> MAX_SAFE_INTEGER) return -1;
    if (number<10) return number;
    
    const numArray=number.toString().split('');
    let sum=0, myString=`${number} = `;
    
    for(let i=0, len = numArray.length; i< len; sum+= +numArray[i], myString+=`${numArray[i++]} + `);

    console.log(myString=myString.slice(0,myString.length-2)+`= ${sum}`);
    return sumDigits(sum);
}






