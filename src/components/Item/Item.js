import './Item.css';
import ItemCount from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom';
// import data from '../ItemList/mockData';

const Item = ({title, pictureUrl, price, id}) => {
  return (
    <div className="item-container">
        <div className='item col'>
          <Link to={`/item/${id}`}>
            <img className='col' src={pictureUrl} alt="Product" width="200px" height="250px" />
          </Link>
            <p className='col'><strong>{title}</strong></p>
            <p className='col'>{price}</p>
            <ItemCount stock="10" initial="1"/>
        </div>
    </div>
  );
};

export default Item;