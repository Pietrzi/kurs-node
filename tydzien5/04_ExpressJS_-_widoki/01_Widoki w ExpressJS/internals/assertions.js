import axios from 'axios';

export const runAssertions = async () => {
  let { data } = await axios.get('http://localhost:3000/hello?greet=Jane');

  const hasTitle = data.includes('<title>Hello World!</title>');
  console.assert(hasTitle, 'Should have proper title ', data);

  let hasGreeting = data.includes('<h1>Hello Jane</h1>');
  console.assert(hasGreeting, 'Should have proper greeting on first try', data);

  data = (await axios.get('http://localhost:3000/hello?greet=Mike')).data;
  hasGreeting = data.includes('<h1>Hello Mike</h1>');
  console.assert(hasGreeting, 'Should have proper greeting on second try', data);
};
