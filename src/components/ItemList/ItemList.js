import React, { useEffect, useState } from "react";
import Item from "../Item/Item.js";

const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: "1",
                    title: "Sheridan's Premium",
                    description: "Licor Sheridans 750 Ml",
                    price: "$5.850,00",
                    pictureUrl:
                        "https://http2.mlstatic.com/D_NQ_NP_2X_751977-MLA49204991370_022022-F.webp",
                },
                {
                    id: "2",
                    title: "Baileys Chocolate Luxe",
                    description: "Licor Crema Baileys Chocolate Luxe 500 Ml. Irlandés",
                    price: "$9.790,00",
                    pictureUrl:
                        "https://http2.mlstatic.com/D_NQ_NP_2X_822787-MLA50533632013_062022-F.webp",
                },
                {
                    id: "3",
                    title: "Whisky Proper Twelve",
                    description: "Irish Whisky Proper Twelve Connor McGregor",
                    price: "$59.000,00",
                    pictureUrl:
                        "https://http2.mlstatic.com/D_NQ_NP_2X_803207-MLA49358076091_032022-F.webp",
                },
                {
                    id: "4",
                    title: "Dom Perignon",
                    description: "Dom Perignon 2009 - Magnum 1500ml ",
                    price: "$350.000,00",
                    pictureUrl:
                        "https://http2.mlstatic.com/D_NQ_NP_2X_718007-MLA48616278355_122021-F.webp",
                },
            ]);
        }, 2000);
    });
};

const ItemList = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const itemList = await getItems();
            setItems(itemList);
        };
        fetchData();
    }, []);

    return (
        <div>
            {items.map((item) => (
                <Item title={item.title} description={item.description} pictureUrl={item.pictureUrl} price={item.price} key={item.id} />))}
        </div>
    )
};

export default ItemList;