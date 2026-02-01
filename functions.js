function multiply(a, b) {
  return a * b;
}

function format_name(first, last) {
  first = first.trim();
  last = last.trim();

  first = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
  last = last.charAt(0).toUpperCase() + last.slice(1).toLowerCase();

  return last + ", " + first;
}

function is_adult(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}

function get_even_numbers(input_list) {
  let evens = [];

  for (let i = 0; i < input_list.length; i++) {
    if (input_list[i] % 2 === 0) {
      evens.push(input_list[i]);
    }
  }

  return evens;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

module.exports = {
  multiply,
  format_name,
  is_adult,
  get_even_numbers,
  divide
};
