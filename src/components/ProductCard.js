import React from 'react'
import { CartState } from './context/Context';
import Rating from "./Rating"
import {Link} from 'react-router-dom';

function Product_Card({item}) {
    const {dispatch} = CartState();

  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3 column">
            
    <div className="card p-3" >
      <Link to={`/productdetails/${item.product_id}`}>
        <img
          src={item.image}
          alt="cardimage"
          className="card-img-top"
        />
      </Link>
      <div className="card-body">
      <Link to="/productdetails">
          <h5 className="card-title text-center product_info">
            {item.product_name}
          </h5>
          <p className="card-text text-center">
            <del>₹ 1,777.00 </del>&nbsp; {`₹ ${item.quantity.price}.00`}
          </p>
        </Link>
        <Rating  rate={item.rating}/>
        <button
          className="btn btn-dark text-light col-12"
          onClick={()=>{
            dispatch({type:"ADD_TO_CART",payload:item})
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
   
 
  )
}

export default Product_Card
