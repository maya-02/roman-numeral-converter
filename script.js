// Get references to DOM elements
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

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

// Function to find the largest Roman numeral for a given number
const findLargestRomanNumeral = (num) => {
  for (let i = 0; i < romanNumerals.length; i++) {
    if (num >= romanNumerals[i].val) {
      return romanNumerals[i];
    }
  }
};

// Recursive function to convert a number to Roman numeral
const getNumeral = (num, outputStr) => {
  if (num > 0) {
    const numeralObj = findLargestRomanNumeral(num);
    num -= numeralObj.val;
    outputStr += numeralObj.numeral;
    return getNumeral(num, outputStr);
  } else {
    return outputStr;
  }
};

// Check and validate user input
const checkUserInput = (e) => {
  e.preventDefault(); // Prevent form submission and page refresh
  const inputValue = numberInput.value.trim();

  if (inputValue === "") {
    output.innerText = "Please enter a number";
    return;
  }

  const inputInt = parseInt(inputValue);

  if (isNaN(inputInt)) {
    output.innerText = "Please enter a valid number";
    return;
  } else if (inputInt < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (inputInt >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  } else {
    const outputString = getNumeral(inputInt, "");
    output.innerText = outputString;
  }

  numberInput.value = ""; // Clear input after conversion
};

// Event listeners
convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput(e);
  }
});
