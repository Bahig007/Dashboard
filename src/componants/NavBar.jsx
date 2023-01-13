import './NavBar.css'
import {logo ,line,booking,logout,shape,man,bag,shopping,services,calender,Message} from '../img'
 import { Link } from 'react-router-dom';
const NavBar = () => {
    
    return ( 
       <>
        <div className="links">
            <div className="logo"><img src={logo} alt="logo"/> <h1> Motiv.</h1></div>
            <div className="buttons">

            <div className="button">
            <img src={line} alt="logo"/>
            <Link to='/'>Dashboard</Link>
            </div>

            <div className="button">
            <img src={man} alt="logo"/>
            <Link >Assets</Link>
            </div>

            <div className="button">
            <img src={booking} alt="logo"/>
            <Link to='/Booking'>Booking</Link>
            </div>

            <div className="button">
            <img src={bag} alt="logo"/>
            <Link >Sell Cars</Link>
            </div>

            <div className="button">
            <img src={shopping} alt="logo"/>
            <Link >Buy Cars</Link>
            </div>

            <div className="button">
            <img src={services} alt="logo"/>
            <Link >Services</Link>
            </div>

            <div className="button">
            <img src={calender} alt="logo"/>
            <Link >Calender</Link>
            </div>

            <div className="button">
            <img src={Message} alt="logo"/>
            <Link >Messages</Link>
            </div>



            
            </div>
        </div>
        <div className="settings">
            <div className="button">
            <img src={shape} alt="logo"/>
            <Link to='/'>Settings</Link>
            </div>

            <div className="button">
            <img src={logout} alt="logo"/>
            <Link to='/'>Log out</Link>
            </div></div>
            
            
       </>
     );
}
 
export default NavBar;