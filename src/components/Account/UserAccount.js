import React from 'react';
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import './loginpage.css';

function UserAccount(){
  const navigate=useNavigate();
    const url = "https://wowapi.onrender.com/api/auth/userinfo";
    const [userinfo,setUserinfo] = useState({});
     useEffect(()=>{
       fetch(url,{method:'GET',
       headers:{'x-access-token':sessionStorage.getItem('logintoken')},
       })
       .then((res)=>res.json())
       .then((data)=>{
        setUserinfo(data);
       })
     });
     if(userinfo.name){
        let dataArray = [userinfo.name,userinfo.email,userinfo.phone,userinfo.address];
        sessionStorage.setItem("userdata",dataArray);
     }
     const handleLogout = ()=>{
      sessionStorage.removeItem("logintoken");
      sessionStorage.removeItem("userdata");
      toast.success("Logged Out Successfully");
      navigate("/")
     }
   return(
    <>
     <h1 className="text-center login_head" style={{marginBottom:"20px"}} >PERSONAL  INFORMATION</h1>
      {userinfo.name ? 
      <div className="container">
        <h4 style={{textDecoration:"underline"}}>Your Details :</h4>
        <p style={{fontWeight:"600"}}>Name : <span style={{fontWeight:"500",textTransform:"capitalize"}}>{userinfo.name}</span></p>
        <p style={{fontWeight:"600"}}>Email : <span style={{fontWeight:"500"}}>{userinfo.email}</span></p>
        <p style={{fontWeight:"600"}}>Phone : <span style={{fontWeight:"500"}}>{userinfo.phone}</span></p>
        <p style={{fontWeight:"600"}}>Phone : <span style={{fontWeight:"500",textTransform:"capitalize"}}>{userinfo.address}</span></p>
        <button className="logout_btn mb-2" style={{height:"40px"}} onClick={handleLogout}>Logout</button>
      </div>
       : <div style={{display:"flex",justifyContent:"center"}}>
        <img  src='./assets/spinner-icon-gif-21.jpg' alt="Loading" />

       </div>
      }
    </>
   )
}
export default UserAccount;