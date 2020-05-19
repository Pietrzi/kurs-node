import io from 'socket.io-client';

const socket = io();

const form = document.querySelector("form");
const span = document.querySelector("span");

form.addEventListener("submit", e => {
    e.preventDefault();
    const value = document.querySelector("input").value
    socket.emit("messageName", value)
});

socket.on("foobar", (data, cb) => {
    span.innerHTML = data;
});