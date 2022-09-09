import React from "react";
import './ItemListContainer.css';
import data from "../ItemList/mockData";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
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
    }, []);

    return (
        <div className="itemListContainer">
            <ItemList itemsList={items}/>
        </div>
    );
}

export default ItemListContainer;