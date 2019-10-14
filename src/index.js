module.exports = function multiply(first, second) {
  let firstNumber = first.split('').reverse().map(item => +item);
  let secondNumber = second.split('').reverse().map(item=> +item);
  let stack = [];
  for(let i = 0; i< firstNumber.length; i++){
    let dozens = 0;
    for (let f = 0; f< secondNumber.length; f++) {
      if (stack[i + f]) dozens += stack[i + f];
      let result = firstNumber[i] * secondNumber[f] + dozens;
      if (result > 9) {
        dozens = Math.trunc(result / 10);
        result = result % 10;
      } else dozens = 0;
      stack[i + f] = result;
    }
    if (dozens) stack.push(dozens);
  }
  return stack.reverse().join('');
}