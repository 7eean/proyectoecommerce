import React from 'react';
import data from '../ItemList/mockData';
import ItemDetailList from '../ItemDetailList/ItemDetailList';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    useEffect(() => {
        getItems.then((result) => {
            setItems(result);
        })
    }, );

    return (
        <div>
            <ItemDetailList itemsList={items} />
        </div>
    );
}

export default ItemDetailContainer;