import './NavBar.css';
import logo from '../../logo.svg';
import CartWidget from '../Cart/CartWidget';

const NavBar = () => {
    return (
        <><div className='navbar-container'>
            <nav>
                <ul>
                    <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Bebidas</a>
                        </li>
                        <li>
                            <a href='#'>Bodegas</a>
                    </li>
                </ul>
            </nav>
            <div>
                <img width={'80px'} src={logo} alt="logo" />
            </div>
            <div></div>
            <div>
                <CartWidget />
            </div>
            </div></>
    );
}

export default NavBar;