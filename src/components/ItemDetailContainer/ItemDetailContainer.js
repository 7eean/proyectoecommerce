import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { database } from '../../utils/firebase'

const ItemDetailContainer = () => {
    const {productId} = useParams();

    const [items, setItems] = useState();

    useEffect(() => {
        const getData = async() => {
            const query = doc(database, "items", productId)
            const response = await getDoc(query)
            const data = {
                ...response.data(),
                id: response.id
            }
            setItems(data)
        }
        getData()
    }, [productId])

    return (
        <div className='detail'>
            {!items ? (<h3 className='cargando'>Cargando...</h3>) : (
            <ItemDetail 
                item={items}
                title={items.title}
                description={items.description}
                pictureUrl={items.pictureUrl}
                price={items.price}
                key={items.id}
            />
            )}            
        </div>
    );
}

export default ItemDetailContainer;