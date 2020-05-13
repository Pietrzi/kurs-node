import axios from 'axios';

export const runAssertions = async () => {
  const { data } = await axios.get('http://localhost:3000/helpers');
  const dataWithoutWhitespace = data.replace(/[ \n\r]/ig, '');

  const hasItalicText = dataWithoutWhitespace.includes('<i>Ishould&lt;be&gt;italic</i>');
  console.assert(hasItalicText,'Should have italic entry');

  const hasBorderedItalic = dataWithoutWhitespace.includes(
    '<divstyle="border:1pxsolidblack;border-radius:5px;"><i>Ishould&lt;be&gt;italicintheframe</i></div>');
  console.assert(hasBorderedItalic, 'Should have border with italic text');
};
