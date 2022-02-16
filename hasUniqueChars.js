// Write your code below
const checkTheValue = (input) => {
  const splitVal = input.split('');
  const storedSet = new Set(input);
  const convertedVal = [...storedSet];
  if (splitVal.length !== convertedVal) {
    return false;
  } else {
    return true;
  }
};

const hashUnique = checkTheValue('Gabriell');
console.log(hashUnique);
