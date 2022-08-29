import './styles.css';
import logo from '../../logo.svg';
import CartWidget from '../Cart/CartWidget';

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img width={'80px'} src={logo} alt="logo"/>
            </div>
            <div>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Vinos</a>
                    </li>
                    <li>
                        <a href='#'>Bodega</a>
                    </li>
                </ul>
            </div>
            <div>
                <CartWidget />
            </div>
        </div>
    );
}

export default NavBar;