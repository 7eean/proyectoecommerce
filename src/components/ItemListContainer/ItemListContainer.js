import React from "react";
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from '../../utils/firebase';

const ItemListContainer = () => {
    const {categoria} = useParams();

    const [items, setItems] = useState();

    useEffect(() => {
        const getData = async() => {
            if(categoria) {
                const queryRef = query(collection(database, "items"), where("categoria", "==", categoria))
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
    }, [categoria])

    return (
        <div className="itemListContainer">
            {!items ? (<h3><div className="dot-spinner">
                            <div className="dot-spinner__dot"></div>
                            <div className="dot-spinner__dot"></div>
                            <div className="dot-spinner__dot"></div>
                            <div className="dot-spinner__dot"></div>
                            <div className="dot-spinner__dot"></div>
                            <div className="dot-spinner__dot"></div>
                            <div className="dot-spinner__dot"></div>
                            <div className="dot-spinner__dot"></div>
                        </div></h3>) : 
            (<div>
                {categoria ?
                <h2 className="elementoCentrado titulos">{categoria}</h2>
                :
                <div>
                    <a href="#catalogo" className="elementoCentrado">
                        <img src="https://image.dynamixse.com/crop/1400x525/webp.png-lossy-85.q80/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_824103626.jpg" className="fotoIndex" alt="#" />
                    </a>
                    <div className="tittles">
                        <h1 className="elementoCentrado titulos">Timepieces</h1>
                        <h2 className="elementoCentrado titulos">Jacob & Co</h2>
                    </div>
                    <div>
                        <div className="elementoCentrado">
                            <p className="elementoCentrado textoI">The driving force for Jacob & Co. is creativity and uniqueness. The breadth of Jacob & Co.'s timepiece offering shows the brand's insatiable need to produce amazing pieces that the world has never seen before. In timepieces, this is exemplified by high complications like the Astronomia Collection, the Mystery Tourbillon, the Opera Godfather and the Twin Turbo Furious.</p>
                        </div>
                        <a href="#catalogo" className="elementoCentrado">
                            <img src="https://image.dynamixse.com/crop/1400x525/webp.png-lossy-85.q80/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_696675282.jpg" className="fotoIndex" alt="#" />
                        </a>
                        <h3 className="elementoCentrado h3">Mission Statement</h3>
                        <div className="elementoCentrado">
                            <p className="elementoCentrado textoI">"I have to create," says Mr. Arabo."My dream has always been to invent things that haven't been done before. For the brand, it's about making the impossible reality." Jacob & Co.'s mission is to create beautiful, dynamic and unique pieces of watchmaking and jewelry art.</p>
                        </div>
                        <a href="#catalogo" className="elementoCentrado">
                            <img src="https://image.dynamixse.com/crop/1400x525/webp.png-lossy-85.q80/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_629654407.jpg" className="fotoIndex" alt="#" />
                        </a>
                        <h3 className="elementoCentrado h3">Creativity</h3>
                        <div className="elementoCentrado">
                            <p className="elementoCentrado textoI">Jacob & Co.'s mission is to create beautiful, dynamic and unique pieces of watchmaking and jewelry art.</p>
                        </div>
                        <h2 className="elementoCentrado titulos" id="catalogo">Nuestro catálogo:</h2>
                    </div>
                </div>
                }
                <ItemList itemsList={items}/>
            </div>
            )}
        </div>
    );
}


export default ItemListContainer;