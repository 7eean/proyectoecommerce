import './NavBar.css';
import logo from './logo03.png';
import CartWidget from '../Cart/CartWidget';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light sticky-md-top">
        <div class="container-fluid">
          <a class="navbar-brand"><Link to={"/"}><img width={'225px'} src={logo} alt="logo" /></Link></a>
          <div class="collapse navbar-collapse sticky-md-top" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-10 text-center sticky-md-top">
              <li class="nav-item">
                <NavLink aria-current={'page'} className={"nav-link active"} to={"/"}>Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink aria-current={'page'} className={"nav-link active"} to={"/productos"}>Timepieces</NavLink>
              </li>
              <li class="nav-item dropdown">
                <NavLink aria-current={'page'} className={"nav-link active"} to={"/productos/exclusivos"}>Partnerships</NavLink>
              </li>
            </ul>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a><NavLink to="/cart" className="linkInactivo"><CartWidget /></NavLink></a>
        </div>
      </nav>
    );
}

export default NavBar;