import React from "react";
import './ItemCount.css';
import { useState } from "react";

const ItemCount = ({nombreProducto, stock, initial, onAdd}) => {
    
    const [ItemCount, setItemCount] = useState(initial);
        const sumar = () => {
            if (ItemCount < stock){
                setItemCount(ItemCount + 1);
            } else {
                setItemCount(1)
            }
        }
        const restar = () => {
            if (ItemCount > 1){
                setItemCount(ItemCount - 1);
            } else {
                setItemCount(stock)
            }
        }

    return (
        <div className="counterContainer">
            <div className="counter">
                <div className="itemCountButton" disabled={stock === 0} onClick={restar}><h2>-</h2></div>
                <div className="itemCount">{ItemCount}</div>
                <div className="itemCountButton" disabled={stock === 0} onClick={sumar}><h2>+</h2></div>
            </div>
            <button disabled={stock === 0} onClick={() => onAdd(ItemCount)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;