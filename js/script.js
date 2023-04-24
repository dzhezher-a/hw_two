window.onload = function () {
  let x = +prompt("Enter the first number: ");
  let y = +prompt("Enter the second number: ");

  let add = x + y;
  let sub = x - y;
  let mul = x * y;
  let div = x / y;

  let result = `
${x} + ${y} = ${add}
${x} - ${y} = ${sub}
${x} * ${y} = ${mul}
${x} / ${y} = ${div}
`;

  alert(result);
};
