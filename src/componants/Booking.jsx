
import { useState } from 'react';
import './Booking.css'
import { car1, car3,car2,car4,car5,car6,car7,car8 ,boxs,sort1} from '../img';
import Card from './Card';
const Booking = () => {
const [pic] = useState([car1,car4,car3,car2,car5,car6,car7,car8,car3])

    return ( 
        <div className='booking-container'>
            <h1>Booking</h1>
            <div className="controls">
                <div className="select">

             <select name="Version" id="Version" >
                 <option value="volvo">New</option>
                 <option value="saab">Old</option>
             </select>
             <select name="cars" id="cars" >
                 <option value="volvo">volvo</option>
                 <option value="saab">Saab</option>
                 <option value="mercedes">Mercedes</option>
                 <option value="audi">Audi</option>
             </select>

                </div>
                <div className="sort">
                    <div className="svg"><img src={boxs} alt="" /></div>
                    <div className="svg"><img src={sort1} alt="" /></div>
                </div>
</div>



            <div className="car-cards">
                {
                    pic.map( picture => (
                        <Card pic={picture}/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Booking;