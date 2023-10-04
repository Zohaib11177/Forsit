import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = ({cat}) => {
  const dataall = [
    {
      name: 'Revenue',
      Month: 'Jan.',
      Revenue: 18.9,
    },
    {
      name: 'Revenue',
      Month: 'Feb.',
      Revenue: 28.8,
    },
    {
      name: 'Revenue',
      Month: 'Mar.',
      Revenue: 39.3,
    },
    {
      name: 'Revenue',
      Month: 'Apr.',
      Revenue: 51.4,
    },
    {
      name: 'Revenue',
      Month: 'May',
      Revenue: 47,
    },
    {
      name: 'Revenue',
      Month: 'Jun.',
      Revenue: 50.3,
    },
    {
      name: 'Revenue',
      Month: 'Jul.',
      Revenue: 44,
    },
    {
      name: 'Revenue',
      Month: 'Aug.',
      Revenue: 35.6,
    },
    {
      name: 'Revenue',
      Month: 'Sep.',
      Revenue: 35.6,
    },
    {
      name: 'Revenue',
      Month: 'Oct.',
      Revenue: 45.6,
    },
    {
      name: 'Revenue',
      Month: 'Nov.',
      Revenue: 35.6,
    },
    {
      name: 'Revenue',
      Month: 'Nov.',
      Revenue: 41.6,
    },
  ];
  const dataallkid = [
    {
      name: 'Revenue',
      Month: 'Jan.',
      Revenue: 5,
    },
    {
      name: 'Revenue',
      Month: 'Feb.',
      Revenue: 12,
    },
    {
      name: 'Revenue',
      Month: 'Mar.',
      Revenue: 15,
    },
    {
      name: 'Revenue',
      Month: 'Apr.',
      Revenue: 18,
    },
    {
      name: 'Revenue',
      Month: 'May',
      Revenue: 10,
    },
    {
      name: 'Revenue',
      Month: 'Jun.',
      Revenue: 19,
    },
    {
      name: 'Revenue',
      Month: 'Jul.',
      Revenue: 11,
    },
    {
      name: 'Revenue',
      Month: 'Aug.',
      Revenue: 7,
    },
    {
      name: 'Revenue',
      Month: 'Sep.',
      Revenue: 20,
    },
    {
      name: 'Revenue',
      Month: 'Oct.',
      Revenue: 11,
    },
    {
      name: 'Revenue',
      Month: 'Nov.',
      Revenue: 18,
    },
    {
      name: 'Revenue',
      Month: 'Dec.',
      Revenue: 8,
    },
  ];
  const datamen = [
    {
      name: 'Revenue',
      Month: 'Jan.',
      Revenue: 15,
    },
    {
      name: 'Revenue',
      Month: 'Feb.',
      Revenue: 10,
    },
    {
      name: 'Revenue',
      Month: 'Mar.',
      Revenue: 19,
    },
    {
      name: 'Revenue',
      Month: 'Apr.',
      Revenue: 11,
    },
    {
      name: 'Revenue',
      Month: 'May',
      Revenue: 7,
    },
    {
      name: 'Revenue',
      Month: 'Jun.',
      Revenue: 20,
    },
    {
      name: 'Revenue',
      Month: 'Jul.',
      Revenue: 11,
    },
    {
      name: 'Revenue',
      Month: 'Aug.',
      Revenue: 5,
    },
    {
      name: 'Revenue',
      Month: 'Sep.',
      Revenue: 18,
    },
    {
      name: 'Revenue',
      Month: 'Oct.',
      Revenue: 13,
    },
    {
      name: 'Revenue',
      Month: 'Nov.',
      Revenue: 20,
    },
    {
      name: 'Revenue',
      Month: 'Dec.',
      Revenue: 12,
    },
  ];
  const datawomen = [
    {
      name: 'Revenue',
      Month: 'Jan.',
      Revenue: 11,
    },
    {
      name: 'Revenue',
      Month: 'Feb.',
      Revenue: 7,
    },
    {
      name: 'Revenue',
      Month: 'Mar.',
      Revenue: 20,
    },
    {
      name: 'Revenue',
      Month: 'Apr.',
      Revenue: 11,
    },
    {
      name: 'Revenue',
      Month: 'May',
      Revenue: 17,
    },
    {
      name: 'Revenue',
      Month: 'Jun.',
      Revenue: 12,
    },
    {
      name: 'Revenue',
      Month: 'Jul.',
      Revenue: 13,
    },
    {
      name: 'Revenue',
      Month: 'Aug.',
      Revenue: 20,
    },
    {
      name: 'Revenue',
      Month: 'Sep.',
      Revenue: 12,
    },
    {
      name: 'Revenue',
      Month: 'Oct.',
      Revenue: 21,
    },
    {
      name: 'Revenue',
      Month: 'Nov.',
      Revenue: 9,
    },
    {
      name: 'Revenue',
      Month: 'Dec.',
      Revenue: 18,
    },
  ];
  const config = {
    data : cat == "Kid" ? dataallkid : cat == "Women" ? datawomen : cat == "Men" ? datamen : dataall,
    isGroup: true,
    xField: 'Month',
    yField: 'Revenue',
    seriesField: 'name',
    height: 204,
    color: ['#727CF5', '#727CF5'],
    yAxis: {
      label: {
        formatter: (v) => `${v}K `,
      },
    },
    label: {
      position: 'middle',
      layout: [
        {
          type: 'interval-adjust-position',
        }, 
        {
          type: 'interval-hide-overlap',
        }, 
        {
          type: 'adjust-color',
        },
      ],
      formatter: (datum) => `$${datum.Revenue}K`, 
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;