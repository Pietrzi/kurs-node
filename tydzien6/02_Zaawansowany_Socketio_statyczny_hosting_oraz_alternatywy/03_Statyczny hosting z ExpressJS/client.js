// Implement communication to `GET /hello` endpoint here, along with setting message in the container
import axios from 'axios';

(async function() {
  const result = await axios.get('/hello');

  const { data: { message } } = result;
  document.getElementById('result-container').innerText = message;
})();