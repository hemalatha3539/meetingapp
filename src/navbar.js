import { Link } from "react-router-dom";
const Nav = () => {
    return (
      <div className="navbar">
        <div className="t-flex">
            <div className="title">
               <h1>LetsMeet</h1>  
            </div>
            <ul className="nav-items">
                <Link to="/" className="homee"><li>All Meets</li></Link>
                <Link to="/Mymeet" className="homee"><li>My Meet</li></Link>
               <Link to="/Addmeet" className="homee"> <li>Add Meet</li> </Link>
                
                 
            </ul>
        </div>
        
      </div>
    );
  };
  export default Nav