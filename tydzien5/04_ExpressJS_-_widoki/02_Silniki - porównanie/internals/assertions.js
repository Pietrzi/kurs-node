import axios from 'axios';

export const runAssertions = async () => {
  let data = await Promise.all([
    axios.get('http://localhost:3000/pug'),
    axios.get('http://localhost:3000/haml'),
    axios.get('http://localhost:3000/ejs'),
    axios.get('http://localhost:3000/hbs')
  ]);

  data = data
    .map(dataEntry => dataEntry.data)
    .map(dataEntry => dataEntry.replace(/[ \n\r]/ig, ''))
    .map((dtEntry, index) => {
      switch(index) {
        case 0:
          return {
            dtEntry,
            engine: 'pug'
          };
        case 1:
          return {
            dtEntry,
            engine: 'haml'
          };
        case 2:
          return {
            dtEntry,
            engine: 'ejs'
          };
        default:
          return {
            dtEntry,
            engine: 'handlebars'
          };
      }
    });

  for (let i = 0; i < data.length - 1; i++) {
    console.assert(
      data[i].dtEntry === data[i+1].dtEntry,
      `Should have the same data for ${data[i].engine} and ${data[i+1].engine}`,
      data[i], data[i+1]);
  }
};
