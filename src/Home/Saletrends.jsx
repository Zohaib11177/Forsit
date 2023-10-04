import React from 'react';
import { Line } from '@ant-design/plots';

const SalesTrend = () => {
    const data = [
        {
            name: 'Social Media',
            Month: 'Jan.',
            Revenue: 20,
        },
        {
            name: 'Social Media',
            Month: 'Feb.',
            Revenue: 50,
        },
        {
            name: 'Social Media',
            Month: 'Mar.',
            Revenue: 40,
        },
        {
            name: 'Social Media',
            Month: 'Apr.',
            Revenue: 81.4,
        },
        {
            name: 'Social Media',
            Month: 'May',
            Revenue: 47,
        },
        {
            name: 'Social Media',
            Month: 'Jun.',
            Revenue: 20.3,
        },
        {
            name: 'Social Media',
            Month: 'Jul.',
            Revenue: 24,
        },
        {
            name: 'Social Media',
            Month: 'Aug.',
            Revenue: 33.3,
        },
        {
            name: 'Social Media',
            Month: 'Sep.',
            Revenue: 35.5,
        },
        {
            name: 'Social Media',
            Month: 'Oct.',
            Revenue: 33,
        },
        {
            name: 'Social Media',
            Month: 'Nov.',
            Revenue: 33.3,
        },
        {
            name: 'Social Media',
            Month: 'Dec.',
            Revenue: 40,
        },
        {
            name: 'Influencer Marketing',
            Month: 'Jan.',
            Revenue: 50,
        },
        {
            name: 'Influencer Marketing',
            Month: 'Feb.',
            Revenue: 25,
        },
        {
            name: 'Influencer Marketing',
            Month: 'Mar.',
            Revenue: 15,
        },
        {
            name: 'Influencer Marketing',
            Month: 'Apr.',
            Revenue: 31.4,
        },
        {
            name: 'Influencer Marketing',
            Month: 'May',
            Revenue: 27,
        },
        {
            name: 'Influencer Marketing',
            Month: 'Jun.',
            Revenue: 20.3,
        },
        {
            name: 'Influencer Marketing',
            Month: 'Jul.',
            Revenue: 24,
        },
        {
            name: 'Influencer Marketing',
            Month: 'Aug.',
            Revenue: 33.3,
        },
        {
            name: 'Influencer Marketing',
            Month: 'Sep.',
            Revenue: 35.5,
        },
        {
            name: 'Influencer Marketing',
            Month: 'Oct.',
            Revenue: 35,
        },
        {
            name: 'Influencer Marketing',
            Month: 'Nov.',
            Revenue: 33.3,
        },
        {
            name: 'Influencer Marketing',
            Month: 'Dec.',
            Revenue: 20,
        },
        {
            name: 'Direct Customers',
            Month: 'Jan.',
            Revenue: 30,
        },
        {
            name: 'Direct Customers',
            Month: 'Feb.',
            Revenue: 25,
        },
        {
            name: 'Direct Customers',
            Month: 'Mar.',
            Revenue: 45,
        },
        {
            name: 'Direct Customers',
            Month: 'Apr.',
            Revenue: 81.4,
        },
        {
            name: 'Direct Customers',
            Month: 'May',
            Revenue: 47,
        },
        {
            name: 'Direct Customers',
            Month: 'Jun.',
            Revenue: 20.3,
        },
        {
            name: 'Direct Customers',
            Month: 'Jul.',
            Revenue: 24,
        },
        {
            name: 'Direct Customers',
            Month: 'Aug.',
            Revenue: 33.3,
        },
        {
            name: 'Direct Customers',
            Month: 'Sep.',
            Revenue: 29,
        },
        {
            name: 'Direct Customers',
            Month: 'Oct.',
            Revenue: 32,
        },
        {
            name: 'Direct Customers',
            Month: 'Nov.',
            Revenue: 33.3,
        },
        {
            name: 'Direct Customers',
            Month: 'Dec.',
            Revenue: 40,
        },

    ]


    const config = {
        data,
        xField: 'Month',
        yField: 'Revenue',
        seriesField: 'name',
        height: 150,
        yAxis: {
          label: {
            formatter: (v) => `${v} %`,
          },
        },
        // label: {
           
        //     // formatter: (datum) => `${datum.Revenue}%`, // Format the label with the $ sign
        //   },
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
export default SalesTrend;
