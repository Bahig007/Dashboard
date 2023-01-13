import './Card.css';
import { love,rewind2,man2 } from '../img';
const Card = ({pic}) => {
    return ( 
        <div className="card-container">
            <div className="heading">
                <h4>Porshe 718 Cayman S</h4>
                <img src={love} alt="" />
            </div>

            <p>Coupe</p>

            <div className="card-picture">
               <img src={pic} alt="" />
            </div>

            <div className="icon-holder">
                <div className="icons-holder">

                    <div className="img">
                    <img src={man2} alt="" /> 
                    <p>4</p>
                    </div>

                    <div className="img">
                    <img src={rewind2} alt="" />
                     <p>Manual</p> 
                     </div>

                </div>
                <div className="text"> <span>$400</span>/d</div>
            </div>
        </div>
     );
}
 
export default Card;