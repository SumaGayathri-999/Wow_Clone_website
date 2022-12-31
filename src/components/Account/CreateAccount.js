import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {toast}  from 'react-toastify';
import './loginpage.css';


function CreateAccount() {
  const url="https://wowapi.onrender.com/api/auth/register";
  const navigate = useNavigate();

  const [userinfo,setUserinfo] = useState({name:"",email:"",phone:"",address:"",password:""});

  // useEffect(()=>{
  //   const.
  // });

  const handleInput = (event)=>{
    let inputname = event.target.name;
    let inputvalue = event.target.value;
    setUserinfo({...userinfo,[inputname]:inputvalue})
  }
  const handleSubmit = async()=>{
    fetch(url,{
      method:'POST',
      headers:{
        'accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(userinfo)
    })
    .then(()=>{
      toast.success("Created Account Successfully");
      navigate('/loginpage');
    })
    
  }

  return (
    <>
  <h1 className="text-center login_head  mb-5">CREATE ACCOUNT</h1>
  <div className="login_container">
    <h6 className="my-3">FIRST NAME</h6>
      <input type="text" name="name" value={userinfo.name} onChange={(e)=>{handleInput(e)}}/>
    <h6 className="my-3">EMAIL</h6>
      <input type="email" name="email" value={userinfo.email} onChange={(e)=>{handleInput(e)}}/>
    <h6 className="my-3">PHONE</h6>
      <input type="text" name="phone" value={userinfo.phone} onChange={(e)=>{handleInput(e)}}/>
    <h6 className="my-3">PASSWORD</h6>
      <input type="password" name="password" value={userinfo.password} onChange={(e)=>{handleInput(e)}}/>
    <h6 className="my-3">ADDRESS</h6>
      <input type="text" name="address" value={userinfo.address} onChange={(e)=>{handleInput(e)}}/>
    <button className="sign_In_Button col-12 mt-5" onClick={handleSubmit}>CREATE</button>


  </div>
</>

  )
}

export default CreateAccount