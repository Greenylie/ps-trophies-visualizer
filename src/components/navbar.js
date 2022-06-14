import pslogo from "../images/playstation-logo.svg";
import "../App.css";

function Navbar() {
    return(
        <nav className="navbar navbar-dark bg-dark justify-content-between">
        <h1 className="navbar-brand">Navbar</h1>
        <form className="form-inline">
        <div className="input-group">
            <div className="logo-container">
                <img src={pslogo} className="center" alt="logo" width={40} height={40}/>
            </div>
            <input type="text" className="form-control" placeholder="Username" aria-label="Playstation Username" aria-describedby="basic-addon1"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </div>
        </form>
      </nav>  
    );
}

export default Navbar;