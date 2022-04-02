import { faDeleteLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
   const {product, handleRemoveProduct} = props;

   const {name,img,price,shipping,quantity} = product;
   return (
      <div className='amar'>
         <div className='review-item'>
         <div>
            <img src={img} alt="" />
         </div>
         <div className='review-item-details-container'>
               <div className="review-item-details">
                  <p className='product-name' title={name}>{name.length> 20 ? name.slice(0,20) + "...": name}</p>
                  <p>Price: <small className='orange-color'>${price}</small></p>
                  <p><small>Shipping: ${shipping}</small></p>
                  <p><small>Quantity: {quantity}</small></p>
               </div>
               <div className="delete-container">
                  <button onClick={() => handleRemoveProduct(product)} className='btn'><FontAwesomeIcon className='dlt-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
               </div>
            </div>
      </div>
      </div>
   );
};

export default ReviewItem;