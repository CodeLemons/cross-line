import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <div className="nav-page">
            <h2>Crossline</h2>
            <li>    
                <Link to="/">HOME</Link>
                <Link to="/test">ADD</Link>
            </li>
        </div>
     );
}
 
export default Navigation;