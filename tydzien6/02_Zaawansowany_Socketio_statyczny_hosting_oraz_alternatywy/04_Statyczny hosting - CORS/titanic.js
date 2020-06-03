import axios from 'axios';

// Use this variable to track how many times you tried to call the station
let times = 0;

// Add setInterval with try/catch and Axios call HERE /////////////

let interval = setInterval(async () => {
    let result;
    try {
      const { data } = await axios.post('http://localhost:3000/message', {
        message: 'Habla'
      });
      result = data.message;
    } catch (err) {
      result = err.message;
    }
  
    times++;
  
    if (times >= 10) {
      clearInterval(interval);
      result = `It looks like you will get your headlines after all, Mr. Ismay…`;
    }
  
    document.getElementById('ahoy').innerText = result;
  }, 2000);