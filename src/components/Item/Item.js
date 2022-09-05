import './Item.css';

const Item = ({ title, pictureUrl, description, price, id }) => {
  return (
    <div className="item-container" key={id}>
        <div className='item'>
            <img src={pictureUrl} alt="Product" width="200px" />
            <p>{title}</p>
            <p className='description'>{description}</p>
            <p>{price}</p>
        </div>
    </div>
  );
};

export default Item;