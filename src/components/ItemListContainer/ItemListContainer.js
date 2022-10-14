import React from "react";
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from '../../utils/firebase';

const ItemListContainer = () => {
    const {product} = useParams();

    const [items, setItems] = useState();

    useEffect(() => {
        const getData = async() => {
            if(product) {
                const queryRef = query(collection(database, "items"), where("product", "==", product))
                const response = await getDocs(queryRef)
                const data = response.docs.map ( doc => {
                    const items = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return items;
                })
                setItems(data);
            } else {
                const queryRef = query(collection(database, "items"))
                const response = await getDocs(queryRef)
                const data = response.docs.map ( doc => {
                    const items = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return items;
                })
                setItems(data);
            }
        }
        getData()
    }, [product])

    return (
        <div className="itemListContainer">
            <ItemList itemsList={items}/>
        </div>
    );
}

export default ItemListContainer;