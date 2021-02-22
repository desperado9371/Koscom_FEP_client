import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

const Guage_chart = (props) => {
  const [resources, SetResource] = useState([30, 30, 30, 30]);
  useEffect(() => {
    setTimeout(() => {
      SetResource([
        resources[0] + (Math.random() - 0.4) * 10,
        resources[0] + (Math.random() - 0.4) * 10,
        resources[0] + (Math.random() - 0.4) * 10,
        resources[0] + (Math.random() - 0.4) * 10,
      ]);
    }, 1000);
  });

  return (
    <Chart
      chartType="Gauge"
      loader={<div>Loading Chart</div>}
      data={[
        ['Label', 'Value'],
        ['Memory', resources[0]],
        ['CPU', resources[1]],
        ['DISK', resources[2]],
        ['NETWORK', resources[3]],
      ]}
      options={{
        redFrom: 90,
        redTo: 100,
        yellowFrom: 75,
        yellowTo: 90,
        minorTicks: 5,
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

export default Guage_chart;
