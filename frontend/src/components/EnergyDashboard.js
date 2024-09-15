import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EnergyDashboard = () => {
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    const fetchEnergyData = async () => {
      const response = await axios.get('/api/energy');
      setEnergyData(response.data);
    };
    fetchEnergyData();
  }, []);

  return (
    <div>
      <h1>Home Energy Usage</h1>
      <ul>
        {energyData.map((data) => (
          <li key={data._id}>
            Device: {data.device}, Consumption: {data.consumption} kWh
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnergyDashboard;
