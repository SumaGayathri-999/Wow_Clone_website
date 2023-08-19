import React,{useState} from 'react';
import {useNavigate,Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import './loginpage.css';

function LoginPage() {
  const navigate = useNavigate();
  const url="https://wowapi.onrender.com/api/auth/login";

  const [userinfo,setUserinfo] = useState({email:"",password:"",message:""});
  const handleInput = (e) =>{
      const inputname = e.target.name;
      const inputvalue = e.target.value;
      setUserinfo({...userinfo,[inputname]:inputvalue})
      console.log(userinfo);
  }
  const handleSubmit = ()=>{
    fetch(url,{
      method:'POST',
      headers:{
        'accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(userinfo)
    })
  .then((res)=>res.json())  //we should not write this as .then((res)=>{res.json()}) because it should return json format of response. So we can write it as .then((res)=>{return res.json()})
  .then((data)=>{
    if(data.auth === false){
       setUserinfo({...userinfo,message:data.token});
    }
    else{
      toast.success("Logged In Successfully");
      sessionStorage.setItem('logintoken',data.token);
      navigate("/")
    }
  })

  }
  return (
    <>
  <h1 className="text-center login_head mb-3 mt-2">LOGIN</h1>
  <div className="login_container">
    <h6 className="my-3">EMAIL</h6>
    <input type="email" name="email" value={userinfo.email} onChange={(e)=>{handleInput(e)}}/>
    <h6 className="my-3">PASSWORD</h6>
    <input type="password" name="password" value={userinfo.password} onChange={(e)=>{handleInput(e)}}/>
    <div style={{color:"red"}}>{userinfo.message}</div>
    <button className="sign_In_Button col-12 mt-5" onClick={handleSubmit}>SIGN IN</button>
    <Link to="/createAccount" className="ca">
        <h5 className="text-center mt-2 ">Create Account</h5>
    </Link>
  </div>
</>

  )
}

export default LoginPage;
