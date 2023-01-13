import './App.css'
import NavBar from './componants/NavBar'
import Booking from './componants/Booking'
import Header from './componants/Header'
import { Routes, Route} from 'react-router-dom';
import DashBoard from './componants/DashBoard';
const App = () => {
    return ( 
        <div className="main">
            <div className='nav'>
                
                <NavBar/>

            </div>
            <div className='content'>
                <div className='header'><Header/></div>
                <Routes>
                        <Route exact path='/' element={<DashBoard/>}/>
                        <Route exact path='/Booking' element={<Booking/>}/>


                </Routes>
            </div>
        </div>
     );
}
 
export default App;