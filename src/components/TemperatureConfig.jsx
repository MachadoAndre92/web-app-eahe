import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TemperatureConfig = ({ zonaId }) => {
  const [temperatureData, setTemperatureData] = useState({
    threshold_min: 20, // Default value
    threshold_max: 25, // Default value
    trigger: 21,       // Default value
    temp: 22,          // Default value
  });

  const temperatureRange = Array.from({ length: 11 }, (_, index) => 16 + index);

  useEffect(() => {
    // Fetch temperature data based on zonaId
    axios
      .get(`http://13.53.73.223/api/config/zona/${zonaId}`)
      .then(response => {
        setTemperatureData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [zonaId]);

  const handleTemperatureChange = event => {
    const selectedTemp = parseFloat(event.target.value);
    setTemperatureData({ ...temperatureData, temp: selectedTemp });

    // Send a PUT request to update the temperature data
    axios
      .put(`http://13.53.73.223/api/config/${zonaId}`, {
        temp: selectedTemp,
      })
      .then(response => {
        // Handle the PUT request success if needed
        console.log('PUT request success:', response.data);
      })
      .catch(error => {
        console.error('PUT request error:', error);
      });
  };

  return (
    <div className="py-2 px-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="temperature">
        Temperatura Desejada:
      </label>
      <select
        id="temperature"
        name="temperature"
        value={temperatureData.temp}
        onChange={handleTemperatureChange}
        className="bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        {temperatureRange.map(tempValue => (
          <option key={tempValue} value={tempValue}>
            {tempValue}°C
          </option>
        ))}
      </select>
    </div>
  );
};

export default TemperatureConfig;
