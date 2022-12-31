import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [searchItem,setSearchItem] = useState("");
  const logininfo = sessionStorage.getItem("logintoken");
  
  useEffect(()=>{
    
    if(searchItem.length > 0 ){
    let timer = setTimeout(()=>{navigate("/filterPage",{state:{value:searchItem}});},1000);

   
    return ()=>{
      clearTimeout(timer);
    }
  }
  },[searchItem])
  
  
  // navigate to the filter page by searching

  function handleSearch(event){
    const value =event.target.value
    setSearchItem(value);
  }
  return (
    <nav>
  <div className="weather_track_div">
    <div className="icons_track_div desktop_track_div">
      <div className="icons_div ml-3">
        <Link to="/">
          <i className="social_media_icons fa-brands fa-facebook " />
        </Link>
        <Link to="/">
          <i className="social_media_icons fa-brands fa-instagram" />
        </Link>
        <Link to="/">
          <i className="social_media_icons fa-brands fa-youtube" />
        </Link>
        <Link to="/">
          <i className="social_media_icons fa-brands fa-twitter" />
        </Link>
      </div>
      <div className="track ml-3">
        <Link to="/">
          <img
            className="social_media_icons"
            src="./assets/wow_chat_icon_637c3b76-9360-4c06-9c1e-77861a856316.jpg"
            alt=""
          />
          Track Order/Chat
        </Link>
      </div>
      
    </div>
    <div className="weather ml-3">
      <b>
        <span id="celcius" />
      </b>
      <span id="weather_img" />
    </div>
  </div>
  <div className="main_logo_div">
    <div className="wow_logo ">
      <Link to="/">
        <img
          className="wow_image "
          src="./assets/pngaaa.com-5067966.png"
          width="100px"
          height="50px"
          alt=""
        />
     </Link>
    </div>
    <div className="search desktop_tab_search">
      <svg
        className="search_icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input className="searchInput" type="search" value={searchItem} onChange={(event)=>{handleSearch(event)}} placeholder="Search" />
    </div>
    <div className="account_cart_div mt-2 ">
      <div>
        {logininfo ? <Link to = "/UserAccount">
          <svg
            className="social_media_icons"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
      </Link> : 
      <Link to = "/loginpage">
      <svg
        className="social_media_icons"
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
      </svg>
    </Link>}
       
      </div>
      <div>
      <Link to="/cart">

          <svg
            className="social_media_icons"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          </Link>
      </div>
    </div>
  </div>
  <div className="search text-center mobile_tab_search col-11">
    <svg
      className="search_icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
    <input className="searchInput" type="search" value={searchItem} onChange={(event)=>{handleSearch(event)}} placeholder="Search" />
  </div>
</nav>

  )
}

export default Header;