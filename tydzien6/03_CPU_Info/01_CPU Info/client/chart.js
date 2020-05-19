import Chart from 'chart.js';

export const getCanvas = (id) => {
  const canvas = document.createElement('canvas');
  canvas.id = id;
  return canvas;
};

export const createChart = (context, label, initialData) =>
  new Chart(context, {
    type: 'line',
    data: {
      datasets: [
        {
          label,
          borderColor: 'red',
          backgroundColor: 'red',
          data: initialData,
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unit: 'second',
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    },
  });

export const addCanvasToElement = (node, canvas) => {
  if (node) {
    node.appendChild(canvas);
    canvas.width = 600;
    canvas.height = 400;
    canvas.style.width = '600px';
    canvas.style.height = '400px';
  }
};

export const updateChart = (chart, newData) => {
  chart.data.datasets.forEach((dataset) => {
    dataset.data = newData;
  });

  chart.update();

  return chart;
};

export const getChartData = (chart) => chart.data.datasets[0].data;
