import axios from 'axios';

const updateMessage = data => {
};

const requestTimer = async (time, id) => {
};

window.submitData = () => {
  const time = document.getElementById('time').value;

  updateMessage({ total: time, remaining: time, complete: false });

  const form = document.getElementById('time-submit');
  if (form) {
    form.style.display = 'none';
    requestTimer(time);
  }
};

