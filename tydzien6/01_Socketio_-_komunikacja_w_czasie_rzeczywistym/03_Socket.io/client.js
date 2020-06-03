import io from 'socket.io-client';
import throttle from 'lodash-es/throttle';

const socket = io();


///////////////////////////
socket.on('annoy', (data) => {
    document.getElementById('annoy-container').innerHTML = data;
  });
  
  socket.on('clear', (data) => {
    document.getElementById('annoy-container').innerHTML = '';
  });
  
  const reactToMouseMove = throttle((event) => {
    socket.emit('activity', { pageX: event.pageX, pageY: event.pageY });
  }, 1000);
///////////////////////////

// Add your listeners HERE

// Add your throttled! method HERE

// MOdify this line to use throttled method
window.addEventListener('mousemove', reactToMouseMove);