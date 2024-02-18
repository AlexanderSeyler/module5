const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) =>
  num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9); // Generates a random alphanumeric ID
};

module.exports = { add, subtract, multiply, divide, generateRandomId };
