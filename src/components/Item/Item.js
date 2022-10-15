import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({title, pictureUrl, description, price, id}) => {
  return (
        <div className="item">
          <div className="contenidoItem">
            <img src={pictureUrl} alt={description} width="250px"/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <Link to={`/item/${id}`}>
              <button>Ver</button>
            </Link>
          </div>
        </div>
  ); 
};

export default Item;
