window.incrementClicks = function() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", '/clicks', true);

  // Send the proper header information along with the request
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      console.log('Incremented clicks!');
      window.clicks = Number(window.clicks) + 1;
      document.getElementById('clicks').innerText = 'Current clicks: ' + window.clicks;
    }
  };

  xhr.send();
};
