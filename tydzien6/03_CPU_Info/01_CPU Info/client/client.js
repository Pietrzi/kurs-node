import io from 'socket.io-client';

// Handlebars imports
import checkboxes from './hbs/checkboxes.handlebars';
import header from './hbs/header.handlebars';
import main from './hbs/main.handlebars';

// Chart helpers
import {
  addCanvasToElement,
  createChart,
  getCanvas,
  getChartData,
  updateChart,
} from './chart';

const socket = io();
const mainContainer = document.getElementById('content-container');

let localConfig = {};
let osData = {};

const charts = {};

const updateGraphs = (data) => {
  console.log('Should update graphs', data);
};

const updateView = (config, data) => {
  console.log('Will update view', config, data);
};

window.updateAvailableStats = (input) => {
  console.log('Will update available stats', input);
};
