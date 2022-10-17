import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({item, title, pictureUrl, description, price, origin, materials, stock}) => {
    const {addItem} = useContext(CartContext);

    const [contador, setContador] = useState("-");

    const onAdd = (quantity)=>{
        setContador(quantity)
        addItem(item, quantity)
    }

    return (
        <div className='itemDetail-container'>
            <div className='itemDetail'>
                <img className='itemImg' src={pictureUrl} alt={description} />
                <div className='description-container2'>
                    <h2 className='itemTitle'>{title}</h2>
                    <p className='itemDesc'>Marca: {description}</p>
                    <p className='itemDesc'>Materiales: {materials}</p>
                    <p className='itemOrigin'>Origen: {origin}</p>
                    <h4 className='itemPrice'>$ {price}</h4>
                    <p className='itemOrigin'>Disponibles: {stock}</p>
                    <div className='b2'><ItemCount nombreProducto="Cantidad" stock={item.stock} initial={1} onAdd={onAdd} /></div>
                        {
                            contador > 0 ?
                            <><p className='itemOrigin'>Seleccionados: {contador}</p><Link to='/cart' className='b2'><button className='b5'>Comprar ahora</button></Link><Link to='/categoria/Jacob&Co'>
                            <button>Seguir comprando</button></Link></>
                            :
                            ''
                        }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;