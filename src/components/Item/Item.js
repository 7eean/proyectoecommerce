import './Item.css';
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ title, pictureUrl, description, price,}) => {
  return (
    <div className="item-container">
        <div className='item col'>
            <img className='col' src={pictureUrl} alt="Product" width="200px" />
            <p className='col'><strong>{title}</strong></p>
            <p className='col'>{price}</p>
            <ItemCount stock="10" initial="1"/>
        </div>
    </div>
  );
};

export default Item;