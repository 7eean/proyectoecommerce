import React from 'react';
import './ItemDetail.css'

const ItemDetail = ({title, pictureUrl, description, price, origin, pais, year, product, graduation}) => {
    return (
        <div className='itemDetail-container'>
            <div className='itemDetail'>
                <img className='itemImg' src={pictureUrl} alt={description} height="450px" />
                <div className='description-container'>
                    <h2 className='itemTitle'>{title}</h2>
                    <p className='itemDesc'>{description}</p>
                    <p className='itemPrice'>{price}</p>
                    <p className='itemOrigin'>Origen: {origin}</p>
                    <p className='itemPais'>Pais de origen: {pais}</p>
                    <p className='itemYear'>Año: {year}</p>
                    <p className='itemProduct'>Tipo de producto: {product}</p>
                    <p className='itemGraduation'>Graduación alcohólica: {graduation}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;