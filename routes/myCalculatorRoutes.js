const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");
const { log } = require("../logger/logger");

router.post("/add", (req, res) => {
  const { num1, num2 } = req.query;
  const callerId = calculatorController.generateRandomId();
  const result = calculatorController.add(parseInt(num1), parseInt(num2));
  log(callerId, `Add operation performed: ${num1} + ${num2} = ${result}`);
  res.json({ callerId, result });
});

router.get("/subtract", (req, res) => {
  const { num1, num2 } = req.query;
  const callerId = calculatorController.generateRandomId();
  const result = calculatorController.subtract(parseInt(num1), parseInt(num2));
  log(callerId, `Subtract operation performed: ${num1} - ${num2} = ${result}`);
  res.json({ callerId, result });
});

router.get("/multiply", (req, res) => {
  const { num1, num2 } = req.query;
  const callerId = calculatorController.generateRandomId();
  const result = calculatorController.multiply(parseInt(num1), parseInt(num2));
  log(callerId, `Multiply operation performed: ${num1} * ${num2} = ${result}`);
  res.json({ callerId, result });
});

router.get("/divide", (req, res) => {
  const { num1, num2 } = req.query;
  const callerId = calculatorController.generateRandomId();
  const result = calculatorController.divide(parseInt(num1), parseInt(num2));
  log(callerId, `Divide operation performed: ${num1} / ${num2} = ${result}`);
  res.json({ callerId, result });
});

module.exports = router;
