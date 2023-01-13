import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


import './Chart.css'


const data = [
    {
      name: '7AM',
      uv: 4000,
      pv: 2300,
      amt: 2300,
    },
    {
        name: '7AM',
        uv: 4000,
        pv: 2300,
        amt: 2300,
      },
    {
      name: '9AM',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
        name: '9AM',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
    {
      name: '11AM',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '6AM',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '9AM',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '11AM',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '7AM',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  



const Chart = () => {





    return ( 
        <div className="chart"> 



            <AreaChart
          width={470}
          height={250}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
            <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#FF764C" stopOpacity={0.2}/>
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
          <XAxis dataKey="name" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#FF764C" fill="url(#colorUv)" />
        </AreaChart>
        </div>
     );
}
 
export default Chart;
