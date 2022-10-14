import React from 'react';
import { useState } from 'react'; 

export const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState ([])

    const isInCart = (idProducto) => {
        const duplicatedProduct =   productCartList.some((item) => item.id === idProducto);
        return duplicatedProduct;
    }
    
    const addItem = (item, quantity) => {
        const newProduct = {
            ...item,
            quantity,
        }

        if(isInCart(item.id)) {
            const product = productCartList.findIndex(
                (producto) => producto.id === item.id
            );
            const newArray = [...productCartList];
            if (newArray[product].quantity + quantity < item.stock) {
                newArray[product].quantity = newArray[product].quantity + quantity;
            } else {
                newArray[product].quantity = item.stock;
            }
            newArray[product].price = newArray[product].quantity * newArray[product].price;
            setProductCartList(newArray);
        } else {
            const newList = [...productCartList];
            newProduct.price = newProduct.quantity * newProduct.price;
            newList.push(newProduct);
            setProductCartList(newList);

        }
    }


    const clearCart = () => {
        setProductCartList([])
    }

    const removeItem = (itemId) => {
        const productsInCart = productCartList.filter(item => item.id !== itemId) 
        setProductCartList(productsInCart);
    }

    const getTotalPrice = () => {
        const precioTotal = productCartList.reduce(
            (acumulador, item) => acumulador + item.price,
            0
        );
        return precioTotal;
    };

    const getTotalProducts = () => {
        const totalProducts = productCartList.reduce(
            (acumulador, item) => acumulador + item.quantity,
            0
        );
        return totalProducts;
    }

    return (
        <CartContext.Provider value={{productCartList, addItem, removeItem, clearCart, getTotalPrice, getTotalProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;