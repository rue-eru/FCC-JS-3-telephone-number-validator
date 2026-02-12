/*

const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

checkBtn.addEventListener('click', checkValid);
clearBtn.addEventListener('click', clear);

function checkValid() {
    if (!userInput.value) {
        alert("Please provide a phone number");
    }
}

function clear() {
    if (userInput.value !== "") {
        return userInput.value = ""
    }
}


const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');




checkBtn.addEventListener('click', () => {
    if (!userInput.value) {
        alert("Please provide a phone number");
    }
})

clearBtn.addEventListener('click', () => {
    if (userInput.value !== "") {
        return userInput.value = "";
    }
})

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkValid(userInput.value);
    userInput.value = '';
  }
});
*/

const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

//main checking function
checkBtn.addEventListener('click', () => {
  // regex for number codes
  const country = '^(1\\s?)?';
  const area = '(\\([0-9]{3}\\)|[0-9]{3})';
  const inbetween = '[\\s\\-]?';
  const number = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const regexNum = new RegExp(`${country}${area}${inbetween}${number}`);

  // function adds results-div and with ternary uses regex
    result.innerHTML = regexNum.test(userInput.value)
    ? "Valid US number: " + userInput.value
    : "Invalid US number: " + userInput.value
})


//event listeners 

checkBtn.addEventListener('click', () => {
    if (!userInput.value) {
        alert("Please provide a phone number");
    }
})

clearBtn.addEventListener('click', () => {
    if (result.innerHTML !== "") {
      result.innerHTML = "";
      userInput.value = ""
    }
    if (userInput.value !== "") {
        return ;
    }
})
