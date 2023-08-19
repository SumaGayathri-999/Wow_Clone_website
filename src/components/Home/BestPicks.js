import React from "react";
import { CartState } from '../context/Context';
import Rating from "../Rating";
import {Link} from 'react-router-dom';
import ProductCard from '../ProductCard';

function BestPicks() {
  const {state:{products,cart},dispatch} = CartState();

  return (
    <>
      <div className="container-fluid best_picks_container">
        <h1 className="text-center my-5">Best Picks For You</h1>
        {products.length>0 ? <><div className="row mb-3">
          {products.slice(0,8).map((item,product_id)=>{
            return(
             <React.Fragment key={product_id}>
             <ProductCard item={item} />
             </React.Fragment>
            )
          })}
          
          </div>
           <div className="text-center mt-5">
           <Link to="/filterpage" >
           <button className="btn btn-dark text-light">VIEW ALL</button>
           </Link>
         </div>
         </>:
          <div style={{display:"flex",justifyContent:"center"}}>
          <img  src='./assets/spinner-icon-gif-21.jpg' alt="Loading" />
         </div>}
        
        </div>
       
      
    </>
  );
}

export default BestPicks;
