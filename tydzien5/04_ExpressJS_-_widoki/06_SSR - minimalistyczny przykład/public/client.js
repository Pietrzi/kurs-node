console.log('I am ready to hydrate!');

setTimeout(() => {
  console.log('Hydrating!');

  // This will hydrate the data
  document.getElementById('specs-info-cpu').innerText = (window.__INITIAL_DATA__ || {}).cpu;
  document.getElementById('specs-info-arch').innerText = (window.__INITIAL_DATA__ || {}).arch;

  // This will simulate activity
  setInterval(() => {
    document.getElementById('current-date').innerText = new Date().toISOString();
  }, 1000);
}, 2000);