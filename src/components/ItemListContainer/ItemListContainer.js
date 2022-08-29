import ItemCount from "../ItemCount/ItemCount";
import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {
    return (
        <div className="itemListContainer">
            <p>{greeting}</p>
            <ItemCount nombreProducto='Wines'/>
        </div>
    )
}

export default ItemListContainer;