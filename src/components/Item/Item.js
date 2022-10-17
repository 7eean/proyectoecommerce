import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({title, pictureUrl, description, price, id}) => {
  return (
        <div className="item">
          <div className="contenidoItem">
            <Link to={`/item/${id}`}>
              <img src={pictureUrl} alt={description} width="250px"/>
            </Link>  
            <h5>{title}</h5>
            <p>{description}</p>
            <p>${price}</p>
            <Link to={`/item/${id}`}>
              <button>Conocer</button>
            </Link>
          </div>
        </div>
  ); 
};

export default Item;
