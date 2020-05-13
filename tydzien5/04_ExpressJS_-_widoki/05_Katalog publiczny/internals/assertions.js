import axios from 'axios';

export const runAssertions = async () => {
  const { data } = await axios.get('http://localhost:3000/rothko');

  console.assert(data.includes('<script src="rothko.js" type="text/javascript"></script>'),
    'Should have script tag', data);
  console.assert(data.includes('<title>Rothko</title>'), 'Should have title', data);
};
