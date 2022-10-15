import "./CartWidget.css";
import cart from './Images/cart.svg';
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {getTotalProducts, productCartList} = useContext(CartContext);
    
    return (
        <div className="cart">
            <div className="cartBg">
                <img src={cart} width="25px" alt="Carrito" />
                {
                    productCartList.length > 0 ?
                    <h2 className="countingCart">{getTotalProducts()}</h2>
                    :
                    '   '
                }
            </div>
        </div>
    )
}

export default CartWidget;