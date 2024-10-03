//Get references to DOM elements
const numberInput = document.getElementById("number");
const convertBtn= document.getElementById("convert-btn");
const output= document.getElementById("output");

const romanNumerals = [
  { numeral: 'M', val: 1000 },
  { numeral: 'CM', val: 900 },
  { numeral: 'D', val: 500 },
  { numeral: 'CD', val: 400 },
  { numeral: 'C', val: 100 },
  { numeral: 'XC', val: 90 },
  { numeral: 'L', val: 50 },
  { numeral: 'XL', val: 40 },
  { numeral: 'X', val: 10 },
  { numeral: 'IX', val: 9 },
  { numeral: 'V', val: 5 },
  { numeral: 'IV', val: 4 },
  { numeral: 'I', val: 1 }
];




const findLargestRomanNumeral = (num) =>{
  console.log("roman numeral", num);
  for (let i=0;i<romanNumerals.length;i++)  {
    if(num >= romanNumerals[i].val){
      return romanNumerals[i]
    }
  }
}
const getNumeral = (num,outputStr) =>{
  if (num > 0){
    console.log("process Numeral", num);
    const numeralObj=findLargestRomanNumeral(num);
    console.log(numeralObj.val);
    num-=numeralObj.val;
    console.log("num is",num);
    outputStr += numeralObj.numeral;
    console.log("output",outputStr);
    return getNumeral(num,outputStr);
  }
  else{
    return outputStr;
  }

}

//Check and validate user input
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);
  console.log(inputInt);
  let outputString="";
  if (isNaN(inputInt)){
    output.innerText="Please enter a valid number";
    return;
  }
  else if (inputInt < 1){
    output.innerText="Please enter a number greater than or equal to 1";
    return;
  }
  else if (inputInt >= 4000){
    output.innerText="Please enter a number less than or equal to 3999";
    return;
  }
  else{
    outputString=getNumeral(inputInt,outputString);
    console.log("finished else")
  }
  console.log("outputString");
  output.innerText=outputString;
  numberInput.value="";
}

//event listeners
convertBtn.addEventListener("click", checkUserInput);

convertBtn.addEventListener("keydown",(e)=>{
  if (e.key == "Enter"){
    checkUserInput();
  }
})