import { BarChart, Bar,  XAxis,  Tooltip,  } from 'recharts';
import './BarChartt.css'
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
      pv: 6800,
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
  

const BarChartt = () => {
    return ( 
        <div className="bar-chart">
          <BarChart
          width={470}
          height={250}
          data={data}
          margin={{
            right: 25,
          }}
            >
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="pv" fill="#2884FF" />
          <Bar dataKey="uv" fill="#f5f5f5" />
        </BarChart>
        </div>
     );
}
 
export default BarChartt;