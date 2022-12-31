import React from 'react'
import {useEffect,useContext,useReducer} from 'react';
import {createContext} from 'react';
import axios from 'axios';
import { cartReducer } from './Reducer';

const Cart = createContext();
function Context({children}) {
    useEffect(()=>{
      axios.get("https://wowapi.onrender.com/productinfo/products")
      .then((res)=>{
         if (res.data){
            dispatch({type:"REPLACE_STATE",payload:{products:res.data,cart:[]}})
         }
      })
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