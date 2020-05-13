import axios from 'axios';

export const runAssertions = async () => {
  const { data } = await axios.get('http://localhost:3000/results');
  const dataWithoutWhitespace = data.replace(/[ \n\r]/ig, '');

  const hasHeaderField = dataWithoutWhitespace.includes('<h1>Matchresults</h1>');
  console.assert(hasHeaderField, 'Should have one of the header fields');

  const hasBurnleyRow = dataWithoutWhitespace.includes(
    '<tr><td>2019-08-10</td><td>BurnleyFC</td><td>SouthamptonFC</td><td>3-0</td></tr>'
  );
  console.assert(hasBurnleyRow, 'Should have Burnley results');
};
