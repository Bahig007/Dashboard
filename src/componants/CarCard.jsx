import './CarCard.css'
import { rewind,gear,zater,recommend } from '../img';
const CarCard = ({info}) => {
    return ( 
        
                    <div className="card-holder">
                        <div className="card-name">                               
                         <img src={recommend} alt="" />
                                <h4>64% Recommend</h4></div>
                            <div className="card-pic"><img src={info.img} alt="" /></div>
                            <div className="car-name">{info.name}</div>
                            <div className="icons"> 
                              <div className="icons-holder">
                              <img src={rewind} alt="" />
                              <p>132/k</p>
                              <img src={gear} alt="" />
                              <img src={zater} alt="" />
                              </div>
                                <div className="icon-text">$32/h</div>
                                </div>
                        </div>
        
       
     );
}
 
export default CarCard;