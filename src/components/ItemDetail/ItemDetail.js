import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({items, title, pictureUrl, description, price, origin, year, materials, cristal, water, joyas, hebilla, picturehoz, pictureaside}) => {

    const {addItem} = useContext(CartContext);

    const [count, setItemCount] = useState("-");

    const onAdd = (quantity)=>{
        setItemCount(quantity)
        addItem(quantity)
    }

    return (
        <div className='itemDetail-container'>
            <div className='itemDetail'>
                <img className='itemImg' src={pictureUrl} alt={description} height="450px" />
                <div className='description-container2'>
                    <h2 className='itemTitle'>{title}</h2>
                    <p className='itemDesc'>Marca: {description}</p>
                    <p className='itemOrigin'>Origen: {origin}</p>
                    <h4 className='itemPrice'>{price}</h4>
                    <div className='b2'><ItemCount stock={4} initial={1} onAdd={onAdd}/></div>
                    <p>Cantidad: {count}</p>
                    <Link to='/cart' className='b2'><button className='b5'>Comprar ahora</button></Link>
                </div>
            </div>
            
                <img src={picturehoz} alt="img" width="100%"/>
            
            <div className='descriptionContainer'>
                <div className='description-container'>
                    <h2 className='h3-descp'>Especificaciones:</h2>
                    <div><p className='itemYear'><strong>Año:</strong> {year}</p></div>
                    <div><p className='itemMaterials'><strong>Materiales:</strong> {materials}</p></div>
                    <div><p className='itemCristal'> <strong>Cristal</strong>: {cristal}</p></div>
                    <div><p className='itemWater'><strong>Resistencia al agua:</strong> {water}</p></div>
                    <p className='itemJoyas'><strong>Cantidad de joyas:</strong>{joyas}</p>
                    <div><p className='itemHebilla'><strong>Material hebilla:</strong> {hebilla}</p></div>
                </div>
                <div className='aside-container'>
                    <img src={pictureaside} alt="img" width="80%"/>
                </div>
                <div className='aside-container2'>
                    
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;