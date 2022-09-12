import './NavBar.css';
import logo from './logo03.png';
import CartWidget from '../Cart/CartWidget';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <><p className='textNav'>Envios internacionales. Pagá con el método de pago que prefieras.</p>
        <div className='navbar-container'>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/productos"}>Timepieces</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/productos/exclusivos"}>Partnerships</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <Link to={"/"}>
                    <img width={'235px'} src={logo} alt="logo" />
                </Link>
            </div>
            <div></div>
            <div>
                <CartWidget />
            </div>
            </div></>
    );
}

export default NavBar;