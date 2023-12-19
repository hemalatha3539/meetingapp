import { Link } from "react-router-dom";
const Nav = () => {
    return (
      <div className="navbar">
        <div className="t-flex">
           <div className="title">
               <h1><i class="bi bi-person-workspace"></i>  LetsMeet</h1>  
            </div>
            <ul className="nav-items">
                <Link to="/" className="homee"><li><i class="bi bi-people"></i> All Meets</li></Link>
                <Link to="/Mymeet" className="homee"><li><i class="bi bi-person-fill-gear"></i> My Meet</li></Link>
               <Link to="/Addmeet" className="homee"> <li><i class="bi bi-person-fill-add"></i> Add Meet</li> </Link>
                
                 
            </ul>
        </div>
        
      </div>
    );
  };
  export default Nav
