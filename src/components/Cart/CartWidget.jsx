import cart from './Images/shopping-cart-svgrepo-com.svg';
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {

    const {getTotalProducts, productCartList} = useContext(CartContext);

    return(

        <a href='#'><img src={cart} alt='logo' style={{width:'30px', marginRight:'10px'}}/>
        {
                    productCartList.length > 0 ?
                    <p>{getTotalProducts()}</p>
                    :
                    ''
                }</a>
    );
};

export default CartWidget;