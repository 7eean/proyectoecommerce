import logo from './images/logo.png'; 
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar= () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button> 
            <Link to="/"><img src={logo} width={"100px"} alt="Logo de Rubishop"/></Link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <NavLink to="/" aria-current={'page'} className={"nav-link active"}>Home</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/categoria/Jacob&Co" aria-current={'page'} className={"nav-link active"}>Timepieces</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/categoria/Accessories" aria-current={'page'} className={"nav-link active"}>Accessories</NavLink>
                </li>
            </ul>
            </div>
            <NavLink to="/cart" className="linkInactivo"><CartWidget /></NavLink>
        </div>
        </nav>
    )
};

export default NavBar;