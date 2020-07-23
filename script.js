/* =============================== PENGATURAN ANGKA ========================= */
const numbers = document.querySelectorAll(".number");

/* ========================== KONSTANTA HENDLER ANGKA ======================= */
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

/*  hendler input angka */
const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

/* pengaturan pencet angka*/
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

/* ========================== FUNGSI LAYAR KALKULATOR =========================*/
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

/* ============================= FUNGSI OPERATOR ========================== */
const operators = document.querySelectorAll(".operator");

/* hendler operasi*/
const inputOperator = (operator) => {
  if(calculationOperator === '') {
    prevNumber = currentNumber;
  };
  calculationOperator = operator;
  currentNumber = '';
}
operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.value);
  });
});


/* pengoperasian */
const calculate = () => {
  let x = parseFloat(prevNumber);
  let y = parseFloat(currentNumber);

  switch (calculationOperator) {
    case "+":
      result =  x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
    default:
      result = "no value found";
      break;
  };
    currentNumber = result;
    calculationOperator = '';
};

/* fungsi sama dengan */
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener ('click', (event) => {
  calculate();
  updateScreen(currentNumber);
});

/* ============================ FUNGSI TOMBOL AC ============================*/
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener('click', () =>{
  clearAll()
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber ='';
  calculationOperator ='';
  currentNumber = '0';
  result = '0';
}

/* ============================= FUNGSI DECIMAL ============================= */
const decimal = document.querySelector(".decimal");

const inputDecimal = (dot) => {
  if(currentNumber.includes('.')) {
    return alert("sudah ditambahkan sayang");
  }
  currentNumber += dot;
};

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

/* ======================= FUNGSI PERSEN ====================================== */
const percent = document.querySelector(".percentage");

percent.addEventListener('click', () => {
  percentOpt(currentNumber);
});

const percentOpt = (percentNumber) => {
  let y = parseFloat(percentNumber)
  currentNumber = y / 100;
};
