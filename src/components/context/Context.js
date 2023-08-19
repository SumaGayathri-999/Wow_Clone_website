import React from 'react'
import {useEffect,useContext,useReducer} from 'react';
import {createContext} from 'react';
import axios from 'axios';
import { cartReducer } from './Reducer';

const Cart = createContext();
function Context({children}) {

    useEffect(()=>{
      const fetchProducts = async (retryCount = 0) => {
        try{
            const res = await axios.get("https://wowapi.onrender.com/productinfo/products")
            dispatch({type:"REPLACE_STATE",payload:{products:res.data,cart:[]}})
        }
        catch(error){
           if(retryCount < 3 ){
               fetchProducts(retryCount+1);
           }
           else{
            console.log(error);
           }
        }
      }
      fetchProducts();
    },[]);
   const [state,dispatch] = useReducer(cartReducer,{
    products:[],
    cart:[]
   })

  return (
      <Cart.Provider value={{state,dispatch}}>
        {children}
      </Cart.Provider>
  )
}

export default Context;
export const CartState =()=>{
    return useContext(Cart)
}
