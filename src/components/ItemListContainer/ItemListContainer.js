import React from "react";
import './ItemListContainer.css';
import data from "../ItemList/mockData";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const {categoryId} = useParams();


    const [items, setItems] = useState([]);

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    useEffect(() => {
        getItems.then((result) => {
            if(categoryId){
                const newProducts = result.filter(item=>item.product === categoryId);
                setItems(newProducts); 
            } else {
                setItems(result); 
            }
            
        })
    }, [categoryId]);

    return (
        <div className="itemListContainer">
            <ItemList itemsList={items}/>
        </div>
    );
}

export default ItemListContainer;