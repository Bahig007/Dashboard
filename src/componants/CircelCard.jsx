import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './CircelCard.css'
const CircelCard = ({data}) => {
    return ( 
        <div className="circel-card">
            <div className="circel-icon" style={{backgroundColor:data.backgroundColor}}>
            <img src={data.icon} alt="" /></div>
            <p style={{
              color:data.textColor
            }}>{data.name}</p>
            <div className="circel-ratio">

            <CircularProgressbar value={data.percentage} text={`${data.percentage}%`} circleRatio={0.7} 
                    styles={{
                        trail: {
                       strokeLinecap: 'round',
                        transform: 'rotate(-126deg)',
                         transformOrigin: 'center center',
                               },
                       path: {
                         strokeLinecap: 'round',
                      transform: 'rotate(-126deg)',
                        transformOrigin: 'center center',
                           stroke: data.color,
                              },
                               text: {
                                fill: data.textColor,
                              },
          }}
          strokeWidth={10}
          
          
          />
            </div>
        </div>
     );
}
 
export default CircelCard;