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
        const sensorData = response.data;
        const updatedChartData = {
          ...chartData,
          labels: sensorData.map(leitura => leitura.created_at),
          datasets: [
            {
              ...chartData.datasets[0],
              data: sensorData.map(leitura => leitura.temp),
            },
          ],
        };
        setChartData(updatedChartData);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return <Line data={chartData} />;
}

export default LineChart;