import { Link } from "react-router-dom";

const Navigation = () => {
    return ( 
        <div className="nav-page">
            <h2>CROSS&LINE</h2>
            <Link to="/">Home</Link>
            <Link to="/test">Test</Link>
        </div>
     );
}
 
export default Navigation;