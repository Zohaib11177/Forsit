import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoDualAxes = () => {
 const data = [
  {
    "week": "Current Week",
    "day": "Monday",
    "sale": 2499
  },
  {
    "week": "Current Week",
    "day": "Tuesday",
    "sale": 1554
  },
  {
    "week": "Current Week",
    "day": "Wednesday",
    "sale": 1919
  },
  {
    "week": "Current Week",
    "day": "Thursday",
    "sale": 1278
  },
  {
    "week": "Current Week",
    "day": "Friday",
    "sale": 2252
  },
  {
    "week": "Current Week",
    "day": "Saturday",
    "sale": 1821
  },
  {
    "week": "Current Week",
    "day": "Sunday",
    "sale": 2570
  },
  {
    "week": "Last Week",
    "day": "Monday",
    "sale": 1657
  },
  {
    "week": "Last Week",
    "day": "Tuesday",
    "sale": 1640
  },
  {
    "week": "Last Week",
    "day": "Wednesday",
    "sale": 1784
  },
  {
    "week": "Last Week",
    "day": "Thursday",
    "sale": 1054
  },
  {
    "week": "Last Week",
    "day": "Friday",
    "sale": 2416
  },
  {
    "week": "Last Week",
    "day": "Saturday",
    "sale": 2345
  },
  {
    "week": "Last Week",
    "day": "Sunday",
    "sale": 2715
  },
  
]

  
  const config = {
    data,
    xField: 'day',
    yField: 'sale',
    seriesField: 'week',
    height: 150,
    
    legend: {
      position: 'top',
    },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 2500,
      },
    },
  };

  return <Line {...config} />;
};
export default DemoDualAxes;
