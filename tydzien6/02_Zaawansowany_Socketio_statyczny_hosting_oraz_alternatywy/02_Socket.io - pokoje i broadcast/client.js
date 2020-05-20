import io from 'socket.io-client';
import { generate } from 'randomstring';

// Add your code BELOW
// const socket = io({query: {clientId}});
// let clientId = generate();

// const form = document.querySelector("request-sender");

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     let value = document.getElementById('name').value
//     socket.emit('joinRoom', )
// })

let clientId = generate()


const socket = io({query: {clientId}})
const form = document.getElementById('request-sender')
form.addEventListener('submit', e => {
  e.preventDefault()
  let value = document.getElementById('name').value
  socket.emit('joinRoom', value)
})
socket.on('users', users => {
  console.log(users)
})