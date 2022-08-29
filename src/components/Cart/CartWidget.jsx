import cart from './Images/shopping-cart-svgrepo-com.svg'

const CartWidget = () => {
    return(
        <a href='#'><img src={cart} alt='logo' style={{width:'30px', marginRight:'20px'}}/></a>
    );
};

export default CartWidget;