import './ItemCount.css'
import { useState } from "react";

const ItemCount = ({nombreProducto}) => {
    const  [ItemCount, setItemCount] = useState(1);
        const sumarItem = () => {
            if (ItemCount < 10) {
                setItemCount(ItemCount + 1);
            } else {
                setItemCount(1)
            }
        }
        const restarItem = () => {
            if (ItemCount > 1) {
                setItemCount(ItemCount - 1);
            } else {
                setItemCount(10)
            }
        }

    return (
        <div className="counterContainer">
                <h3>{nombreProducto}</h3>
            <div className="counter">
                <div className="itemCountButton" onClick={restarItem}>
                    <p>-</p>
                </div>
                <div className="itemCount">{ItemCount}</div>
                <div className="itemCountButton" onClick={sumarItem}>
                    <p>+</p>
                </div>
            </div>
            <button>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;