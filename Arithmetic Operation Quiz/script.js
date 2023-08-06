// Global variables
let num1, num2, operator, correctAnswer;

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random arithmetic operation
function generateQuestion() {
  num1 = getRandomNumber(1, 20);
  num2 = getRandomNumber(1, 20);
  const operators = ['+', '-', '*', '/'];
  operator = operators[getRandomNumber(0, operators.length - 1)];
  correctAnswer = eval(`${num1} ${operator} ${num2}`);
  document.getElementById('question').textContent = `${num1} ${operator} ${num2} = ?`;
  document.getElementById('result').textContent = '';
  document.getElementById('answer').value = '';
}

// Function to check the user's answer
function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById('answer').value);
  if (isNaN(userAnswer)) {
    document.getElementById('result').textContent = 'Please enter a valid number.';
  } else {
    if (userAnswer === correctAnswer) {
      document.getElementById('result').textContent = 'Correct!';
    } else {
      document.getElementById('result').textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
    }
  }
}

// Generate the first question on page load
generateQuestion();
