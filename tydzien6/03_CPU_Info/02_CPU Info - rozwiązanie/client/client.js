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

const mainContainer = document.getElementById('content-container');

let localConfig = {};
let osData = {};

const charts = {};

const updateGraphs = (data) => {
  data.forEach((newData) => {
    const chartId = `chart-${newData.key}`;

    let existingChart = charts[newData.key];
    if (!existingChart) {
      const canvas = getCanvas(chartId);
      existingChart = {
        chart: createChart(canvas.getContext('2d'), newData.key, [
          {
            t: new Date(),
            y: newData.value,
          },
        ]),
        canvas,
      };

      charts[newData.key] = existingChart;
    } else {
      const currentChartData = getChartData(existingChart.chart);
      const updatedData = [
        ...currentChartData,
        {
          t: new Date(),
          y: newData.value,
        },
      ].slice(-10);

      existingChart.chart = updateChart(existingChart.chart, updatedData);
    }

    addCanvasToElement(document.getElementById('charts'), existingChart.canvas);
  });
};

const getMainTemplate = (checkboxesTpl, headerTpl) => {
  return main({
    checkboxes: checkboxesTpl,
    header: headerTpl,
  });
};

const socket = io();

const updateView = (config, data) => {
  // General view
  const { general } = data;

  let tplContext = {};
  if (general) {
    tplContext = Object.keys(general).map((key) => ({
      key,
      value: general[key],
    }));
  }
  const headerTpl = header(tplContext);

  // Available stats
  const mappedAvailable = Object.keys(config).map((key) => ({
    id: key,
    title: config[key].title,
    checked: config[key].selected,
  }));
  const checkboxTpl = checkboxes(mappedAvailable);

  mainContainer.innerHTML = getMainTemplate(checkboxTpl, headerTpl);

  const displayData = Object.keys(data)
    .filter((dataKey) => dataKey !== 'general')
    .filter((dataKey) => config[dataKey].selected)
    .map((key) => ({
      key,
      value: data[key],
    }));

  setTimeout(() => updateGraphs(displayData));
};

socket.on('config', (config) => {
  localConfig = config;
  updateView(localConfig, osData);
});

socket.on('data', (data) => {
  osData = { ...osData, ...data };
  updateView(localConfig, osData);
});

window.updateAvailableStats = (input) => {
  const stat = input.id;
  const relatedStat = localConfig[stat];
  if (relatedStat) {
    localConfig[stat].checked = input.checked;

    if (input.checked) {
      socket.emit('join', stat);
    } else {
      socket.emit('leave', stat);
    }
  }
};
