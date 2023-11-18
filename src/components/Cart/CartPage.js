import React,{useEffect, useState} from 'react';
import { CartState } from '../context/Context';
import './cartpage.css';
import {Link} from 'react-router-dom';

function CartPage() {
    const [total,setTotal] = useState(0);
    const {state:{cart},dispatch} = CartState();
    useEffect(()=>{
       setTotal(cart.reduce((acc,curr)=> acc + curr.quantity.price*curr.qty,0))
    },[cart])
    return (
        <>
        <h1 className="heading">Shopping Cart</h1>
        {
         total === 0 ? 
         <div style={{display:"flex",flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
         <img width="300px" src ="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0=" alt =""></img>
         <h6>Your Cart Is Empty</h6>
         <p style={{color:"#ababab"}}>Looks like you haven't made your choice yet..</p>
         <Link to="/">
            <button style={{backgroundColor:"black",color:'white',padding:"5px"}}>Back to Home</button>
         </Link>
         </div>
         :
         <div className="cart" >
         <div className="total_container mb-3" >
         <h3>{`SUBTOTAL ${cart.length} items`}</h3>
         <p>{`₹ ${total}.00`}</p>
         <button className="btn btn-light text-dark col-12" style={{padding:"20px",fontSize:"20px",letterSpacing:"0.2em"}}><strong>Proceed to chekout</strong></button>          
         </div>
         { cart.map((item)=>{
         return(
             <>
             <div className='cart_container'>
             <img className="cart_image" src={item.image} alt="cartimage"/>
             <div style={{marginTop:"auto",marginBottom:"auto"}}>
                <h3 style={{textTransform:"capitalize"}}>{item.product_name}</h3>
                {/* <p>{` Size : ${item.quantity.size}`}</p> */}
               
                <div className="category">{item.categories.map((category)=>{
                    return(
                      <span  style={{textTransform:"capitalize"}}>{category}&nbsp;&nbsp;</span>
                    )
                     })}
                </div>
                <div><strong>Size : </strong><span>{`${item.quantity.size} ${item.quantity.unit}` }</span></div>
                <div ><strong>Ingredient : </strong><span >{item.ingredient}</span></div>
 
                   
             </div>
             
             <div  className="quantity_cont" style={{marginTop:"auto",marginBottom:"auto"}}>
                <h5>Quantity</h5>
                <div className="quanity">
                 {item.qty===1?
                   <button style={{padding:"10px"}} onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:item})}}><i className="fa-solid fa-trash-can"/></button>
                   :
                   <button style={{padding:"10px"}} onClick={()=>{dispatch({type:"DECREMENT_QUANTITY",payload:item})}}>-</button>
 
 
 
                 }
                 <span style={{padding:"10px"}}>{item.qty}</span>
                 <button style={{padding:"10px"}}  onClick={()=>{dispatch({type:"INCREMENT_QUANTITY",payload:item})}}>+</button>
              </div>
             </div>
             <div className="desc_container" style={{marginTop:"auto",marginBottom:"auto"}}>
             <h5>Price</h5>
             <p className="price_text">
                     <del>₹ 1,777.00</del>&nbsp;
                     <div><strong>{`₹ ${item.quantity.price}.00`} </strong></div>
             </p>
             </div>
             </div>
             </>
         )
      })} 
      {/* <div className="total_container" >
         <h3>{`SUBTOTAL ${cart.length} items`}</h3>
         <p>{`₹ ${total}.00`}</p>
         <button className="btn btn-light text-dark col-12" style={{padding:"20px",fontSize:"20px",letterSpacing:"0.2em"}}><strong>Proceed to chekout</strong></button>          
      </div> */}
      </div>
      }

     </>
    
    
  )
}

export default CartPage;
