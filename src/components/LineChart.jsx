import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS } from 'chart.js/auto';

function LineChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Temperatura',
        data: [],
      },
    ],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
  axios
    .get('http://13.53.73.223/api/leiturashistory')
    .then(response => {
      console.log('Sensor Data:', response.data);
      const sensorData = response.data.filter(leitura => leitura.zona_id === 1);
      const lastTenSensorData = sensorData.slice(-10);

      const updatedChartData = {
        ...chartData,
        labels: lastTenSensorData.map(leitura => leitura.created_at),
        datasets: [
          {
            ...chartData.datasets[0],
            data: lastTenSensorData.map(leitura => leitura.temp),
          },
        ],
      };
      setChartData(updatedChartData);
    })
    .catch(error => {
      console.error(error);
    });

    
};
const options = {
  scales: {
    y: {
      suggestedMin: -10,
      suggestedMax: 45,
    },
  },
};

  return <Line data={chartData} options={options} />;
}

export default LineChart;