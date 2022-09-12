import React from 'react';
import './ItemDetail.css'

const ItemDetail = ({title, pictureUrl, description, price, origin, year, materials, cristal, water, joyas, hebilla, picturehoz}) => {
    return (
        <div className='itemDetail-container'>
            <div className='itemDetail'>
                <img className='itemImg' src={pictureUrl} alt={description} height="450px" />
                <div className='description-container'>
                    <h2 className='itemTitle'>{title}</h2>
                    <p className='itemDesc'>Marca: {description}</p>
                    <p className='itemOrigin'>Origen: {origin}</p>
                    <p className='itemYear'>Año: {year}</p>
                    <p className='itemMaterials'>Materiales: {materials}</p>
                    <p className='itemCristal'>Cristal: {cristal}</p>
                    <p className='itemWater'>Resistencia al agua: {water}</p>
                    <p className='itemJoyas'>Cantidad de joyas: {joyas}</p>
                    <p className='itemHebilla'>Material hebilla: {hebilla}</p>
                    <p className='itemPrice'>{price}</p>
                </div>
            </div>
            <div>
                <img src={picturehoz} alt="img" width="100% "/>
            </div>
        </div>
    )
}

export default ItemDetail;