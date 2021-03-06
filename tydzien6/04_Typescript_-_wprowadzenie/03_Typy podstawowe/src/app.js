const questionTransformer = (what) => {
  return what.length + [...what].reduce((memo, letter) => {
    memo += letter.charCodeAt(0);
    return memo;
  }, 0);
};

const whatIsTheMeaningOf = (what) => {
  switch (what) {
    case '10':
      return 'To make joy and happiness'
    case '15':
      return 'To make perfect pancakes'
    case '889':
      return 42;
    default:
      return 'I do not the answer to that question'
  }
};

const response = whatIsTheMeaningOf(questionTransformer('universe'));
console.assert(response === '42', 'Should provide a proper answer', response);
