import './Header.css'
import { notification , portrait} from '../img'

const Header = () => {
    return ( 
        <>
            <div className="search-bar"><input id="icon"  type="text" placeholder="Search or type" /></div>
            <div className="avatar">
            <img src={notification} alt="logo"/>
            <img src={portrait} alt="logo"/>
            </div>
        </>
     );
}
 
export default Header;