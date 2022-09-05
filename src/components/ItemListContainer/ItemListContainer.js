import ItemCount from "../ItemCount/ItemCount";
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({greeting}) => {
    return (
        <div className="itemListContainer">
            <p>{greeting}</p>
            <ItemCount nombreProducto='Wines' stock="10" initial="1"/>
            <ItemList />
        </div>
    )
}

export default ItemListContainer;