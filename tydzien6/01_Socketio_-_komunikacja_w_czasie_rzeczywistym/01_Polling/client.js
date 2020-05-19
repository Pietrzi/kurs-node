import axios from 'axios';
import L from 'leaflet';

const map = L.map('map').setView([7.9869798,-79.0823964], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker;

(async function() {
  // Add your polling code HERE
})();


