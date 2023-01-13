import './DashBoard.css'
import {car1 ,car2,car3,energy,range,dropFluid,tireWear} from '../img'
import CircelCard from './CircelCard';
import { useState } from 'react';
import Chart from './Chart';
import  BarChartt  from './BarChartt';
import CarCard from './CarCard';

const DashBoard = () => {

  const [data] = useState([{percentage: 45, name : 'Energy', icon : energy , color : '#fff',backgroundColor : "#A66FF0",textColor: 'white'},{percentage:57, name : 'Range', icon : range, color : '#FF7E86',backgroundColor : "rgba(255, 126, 134, 0.1);",textColor: 'black'
},{percentage:9, name : 'Drop Fluid', icon : dropFluid, color : '#A162F7',backgroundColor : "rgba(161, 98, 247, 0.1);",textColor: 'black'},{percentage:25, name : 'Tire Wear', icon : tireWear, color : '#F6CC0D',backgroundColor : "rgba(246, 204, 13, 0.1);",textColor: 'black'}])
 
const [information] = useState([
  {
    name: "Mini Cooper",
    img : car1,

  },
  {
    name: "Porsche 911 Carrera",
    img : car2,

  },
  {
    name: "Porsche 911 Carrera",
    img : car3,

  },
])

    return ( 
        <div className='main-content'>
                    <div className='cards'>
                     { data.map(data => (
                        <CircelCard data={data}/>))}
                    </div>
                    <div className='charts'>
                      <div className="chart-holder">
                        <h5>Miles Statistics</h5>
                        <div className="click">
                          <div className="clicks">
                            <button>Day</button>
                            <button>Week</button>
                            <button>Month</button>
                          </div>
                          <div className="textt">256 Miles</div>
                        </div>
                        <div className="chartt">
                        <BarChartt/>
                        </div>
                      </div>
                      <div className="chart-holder">
                      <h5>Car Statistics</h5>
                      <div className="click-line">
                          <div className="clicks-line">
                            <button>Day</button>
                            <button>Week</button>
                            <button>Month</button>
                          </div>
                          <div className="textt">20 February 2022</div>
                        </div>
                        <div className="chartt">
                        <Chart/>
                        </div>
                      </div>
                    </div>
                    <div className='cars'>
                        {information.map( i => (
                        <CarCard info={i}/>))}
                    </div>
                    </div>
     );
}
 
export default DashBoard;