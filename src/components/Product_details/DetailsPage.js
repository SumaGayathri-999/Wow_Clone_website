import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Rating from '../Rating';
import './detailspage.css'
import { CartState } from '../context/Context';

function DetailsPage() {
    const {dispatch} = CartState();
    const [product,setProduct] = useState(null);
     const {id} = useParams();
     useEffect(()=>{
        if(id){
            axios.get(`https://wowapi.onrender.com/productinfo/products/${id}`)
            .then((res)=>{
                setProduct(res.data);
            })
        }
       
     },[id])
  return (
    <>
       {product?
         <div className="mt-5 product_cont ">
            <div className="image_cont">
              <img className="product_image"src={product[0].image} alt="" />
            </div>
            <div className="desc_cont">
                <h1>{product[0].product_name}</h1>
                <h4>{product[0].description}</h4>
                {/* <p>{`SIZE : ${product[0].quantity.size} ${product[0].quantity.unit}` }</p> */}
                <p>Made With <span>{product[0].ingredient}</span></p>
                <p>Used For <span>{product[0].concern}</span></p>
                <b className="categories">SIZE : </b><span>{product[0].quantity.size} {product[0].quantity.unit}</span><br/>
                <b className="categories">CATEGORY : </b><span>{product[0].categories}</span><br />
                <Rating style={{left:"0"}} rate={product[0].rating} />
                <p className="price_text">MRP : 
                    <del>₹ 1,777.00</del>&nbsp;
                    <span><strong>{`₹ ${product[0].quantity.price}.00`} </strong></span>
                </p>  
                <button
                style={{fontWeight:"600"}}
                  className="btn btn-dark text-light col-sm-12 col-md-5  "
                  onClick={()=>{
                    dispatch({type:"ADD_TO_CART",payload:product[0]})
                  }}
                >
                  ADD TO CART
                </button>
                <button style={{fontWeight:"600"}} className="btn btn-warning text-dark mt-3 mt-md-0 ml-md-5 col-sm-12 col-md-5">BUY NOW</button>
            </div>

         </div>
            :
        <div style={{display:"flex",justifyContent:"center"}}>
             <img  src='../assets/spinner-icon-gif-21.jpg' alt="Loading" />
        </div>
       }
    </>
  )
}

export default DetailsPage;
