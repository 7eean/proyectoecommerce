import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";

const ItemDetailList = ({itemsList}) => {
    return (
        <div>
            {itemsList.map((item) => {
                return (
                    <ItemDetail 
                        title={item.title} 
                        description={item.description} 
                        pictureUrl={item.pictureUrl} 
                        price={item.price} 
                        key={id} 
                        origin={item.origin}
                        year={item.year}
                        pais={item.pais}
                        product={item.product}
                        graduation={item.graduation}
                    />
                )
            })}
        </div>
    )
};

export default ItemDetailList;