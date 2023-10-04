import React from 'react';
import { Line } from '@ant-design/plots';

const Orderscharts = ({trange}) => {
    const datalastyear = [
        {
            name: 'Last Year',
            Month: 'Nov.2022',
            Revenue: 3563,
        },
        {
            name: 'Last Year',
            Month: 'Dec.2022',
            Revenue: 6563,
        },
        {
            name: 'Last Year',
            Month: 'Jan.2023',
            Revenue: 5678,
        },
        {
            name: 'Last Year',
            Month: 'Feb.2023',
            Revenue: 5099,
        },
        {
            name: 'Last Year',
            Month: 'Mar.2023',
            Revenue: 4099,
        },
        {
            name: 'Last Year',
            Month: 'Apr.2023',
            Revenue: 8199,
        },
        {
            name: 'Last Year',
            Month: 'May2023',
            Revenue: 4799,
        },
        {
            name: 'Last Year',
            Month: 'Jun.2023',
            Revenue: 2099,
        },
        {
            name: 'Last Year',
            Month: 'Jul.2023',
            Revenue: 2499,
        },
        {
            name: 'Last Year',
            Month: 'Aug.2023',
            Revenue: 4599,
        },
        {
            name: 'Last Year',
            Month: 'Sep.2023',
            Revenue: 3599,
        },
        {
            name: 'Last Year',
            Month: 'Oct.2023',
            Revenue: 3699,
        },
    ]
    const datalastmonth = [
        {
            name: 'Last Month',
            Month: '1',
            Revenue: 352,
        },
        {
            name: 'Last Month',
            Month: '2',
            Revenue: 352,
        },
        {
            name: 'Last Month',
            Month: '3',
            Revenue: 202,
        },
        {
            name: 'Last Month',
            Month: '4',
            Revenue: 502,
        },
        {
            name: 'Last Month',
            Month: '5',
            Revenue: 402,
        },
        {
            name: 'Last Month',
            Month: '6',
            Revenue: 812,
        },
        {
            name: 'Last Month',
            Month: '7',
            Revenue: 472,
        },
        {
            name: 'Last Month',
            Month: '8',
            Revenue: 202,
        },
        {
            name: 'Last Month',
            Month: '9',
            Revenue: 242,
        },
        {
            name: 'Last Month',
            Month: '10',
            Revenue: 352,
        },
        {
            name: 'Last Month',
            Month: '11',
            Revenue: 352,
        },
        {
            name: 'Last Month',
            Month: '12',
            Revenue: 352,
        },
        {
            name: 'Last Month',
            Month: '13',
            Revenue: 202,
        },
        {
            name: 'Last Month',
            Month: '14',
            Revenue: 502,
        },
        {
            name: 'Last Month',
            Month: '15',
            Revenue: 402,
        },
        {
            name: 'Last Month',
            Month: '16',
            Revenue: 812,
        },
        {
            name: 'Last Month',
            Month: '17',
            Revenue: 472,
        },
        {
            name: 'Last Month',
            Month: '18',
            Revenue: 202,
        },
        {
            name: 'Last Month',
            Month: '19',
            Revenue: 242,
        },
        {
            name: 'Last Month',
            Month: '20',
            Revenue: 352,
        },
        {
            name: 'Last Month',
            Month: '21',
            Revenue: 352,
        },
        {
            name: 'Last Month',
            Month: '22',
            Revenue: 352,
        },
        {
            name: 'Last Month',
            Month: '23',
            Revenue: 202,
        },
        {
            name: 'Last Month',
            Month: '24',
            Revenue: 502,
        },
        {
            name: 'Last Month',
            Month: '25',
            Revenue: 402,
        },
        {
            name: 'Last Month',
            Month: '26',
            Revenue: 812,
        },
        {
            name: 'Last Month',
            Month: '27',
            Revenue: 472,
        },
        {
            name: 'Last Month',
            Month: '28',
            Revenue: 202,
        },
        {
            name: 'Last Month',
            Month: '29',
            Revenue: 242,
        },
        {
            name: 'Last Month',
            Month: '30',
            Revenue: 242,
        },
    ]
 const data = [
    {
        name: "Last Week",
        Month: "Monday",
        Revenue: 224
      },
      {
        name: "Last Week",
        Month: "Tuesday",
        Revenue: 125
      },
      {
        name: "Last Week",
        Month: "Wednesday",
        Revenue: 129
      },
      {
        name: "Last Week",
        Month: "Thursday",
        Revenue: 122
      },
      {
        name: "Last Week",
        Month: "Friday",
        Revenue: 222
      },
      {
        name: "Last Week",
        Month: "Saturday",
        Revenue: 128
      },
      {
        name: "Last Week",
        Month: "Sunday",
        Revenue: 225
      },
 ]
   


    const config = {
        data : trange == "WEEK" ? data : trange == "MONTH" ? datalastmonth : datalastyear ,
        xField: 'Month',
        yField: 'Revenue',
        seriesField: 'name',
        height: 150,
        // yAxis: {
        //   label: {
        //     formatter: (v) => `${v} %`,
        //   },
        // },
        legend: {
            position: 'top',
        },
        smooth: true,
        // @TODO 后续会换一种动画方式
        animation: {
            appear: {
                animation: 'path-in',
                duration: 2500,
            },
        },
    };

    return <Line {...config} />;
};
export default Orderscharts;
