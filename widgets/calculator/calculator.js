var Calculator = function() {
  var calculatorEl = document.getElementById('calculator'),
    	sum = 0;
  this.displayText = '';
  this.displayEl = calculatorEl.querySelector('#display');
  this.equation = [];
  calculatorEl.addEventListener('click', this.handleButtonClick.bind(this));
};

Calculator.prototype.handleButtonClick = function(evt) {
  var targetEl = evt.target;
  if (targetEl.id === 'solve-key') {
    this.solve();
  } else if (targetEl.classList.contains('num-key')) {
    this.applyNum(targetEl.innerHTML);
  } else if (targetEl.classList.contains('op-key')) {
    this.applyOp(targetEl.innerHTML);
  }
  this.updateDisplay();
};

Calculator.prototype.solve = function() {
  var result = eval(this.equation.join(''));
  this.equation = [result];
  this.displayText = result;
  this.updateDisplay();
};

Calculator.prototype.applyOp = function(op) {
  if (this.equation.length === 3) {
    this.solve();
  }
  this.equation.push(op);
};

Calculator.prototype.applyNum = function(num) {
  var n = num.toString(),
			equationLen = this.equation.length;
  if (equationLen === 2) {
    // num is first digit of 2nd operand, so we clear the display
    this.displayText = this.equation[2] = n;
  } else if (equationLen === 3) {
    // num is part of 2nd operand, so we concat
    this.displayText += n;
    this.equation[2] = this.displayText;
  } else {
    // num is part of 1st operand
    this.displayText += n;
    this.equation[0] = this.displayText;
  }

  this.updateDisplay();
};

Calculator.prototype.updateDisplay = function() {
  this.displayEl.innerHTML = this.displayText;
};

// instantiate an instance
var calculator = new Calculator();	
