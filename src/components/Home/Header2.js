import React from "react";
import { Link,useNavigate } from 'react-router-dom';


function Header2() {
  const navigate=useNavigate();
  
  const handleLogout = ()=>{
    sessionStorage.removeItem("logintoken");
    sessionStorage.removeItem("userdata")
    navigate("/")
   }

  return (
    <div className="nav_container">
      <input type="radio" name="slide" id="menu_btn" />
      <input type="radio" name="slide" id="cancel_btn" />
      <ul className="nav_links">
        <label htmlFor="cancel_btn" className="button cancel_btn">
          <i className="fas fa-times" />
        </label>
        <li className="navLink">
          <label htmlFor="showDrop" style={{cursor:"pointer"}}>
            SKIN
            </label>
          <input type="checkbox" id="showDrop" />
          <label htmlFor="showDrop" style={{cursor:"pointer"}}>
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <Link to="/filterpage">Face Wash</Link>
            </li>
            <li>
              <Link to="/filterpage">Face Wash Refill</Link>
            </li>
            <li>
              <Link to="/filterpage">Face Scrub</Link>
            </li>
            <li>
              <Link to="/filterpage">Face Serum</Link>
            </li>
            <li>
              <Link to="/filterpage">Makeup Remover</Link>
            </li>
          </ul>
        </li>
        <li className="navLink">
          <label htmlFor="hair" style={{cursor:"pointer"}}>HAIR</label>
          <input type="checkbox" id="hair" />
          <label htmlFor="hair" style={{cursor:"pointer"}}>
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <Link to="/filterpage">Hair Oil</Link>
            </li>
            <li>
              <Link to="/filterpage">Hair Combo Kit</Link>
            </li>
            <li>
              <Link to="/filterpage">Shampoo</Link>
            </li>
            <li>
              <Link to="/filterpage">Conditioner</Link>
            </li>
            <li>
              <Link to="/filterpage">Hair Mask</Link>
            </li>
            <li>
              <Link to="/filterpage">Hair Serum</Link>
            </li>
            <li>
              <Link to="/filterpage">Scalp Brush</Link>
            </li>
            <li>
              <Link to="/filterpage">Hair Spray</Link>
            </li>
          </ul>
        </li>
        <li className="navLink">
          <label htmlFor="bath" style={{cursor:"pointer"}}>BATH &amp; BODY</label>
          <input type="checkbox" id="bath" />
          <label htmlFor="bath" style={{cursor:"pointer"}}>
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <Link to="/filterpage">Body Wash</Link>
            </li>
            <li>
              <Link to="/filterpage">Bathing Bar</Link>
            </li>
            <li>
              <Link to="/filterpage">Hand Cream</Link>
            </li>
            <li>
              <Link to="/filterpage">Hand Wash</Link>
            </li>
            <li>
              <Link to="/filterpage">Body Lotion</Link>
            </li>
            <li>
              <Link to="/filterpage">Body Butter</Link>
            </li>
            <li>
              <Link to="/filterpage">Massage oil</Link>
            </li>
          </ul>
        </li>
        <li className="megaLink">
          <label htmlFor="mother_child" style={{cursor:"pointer"}}>MOTHER AND CHILD</label>
          <input type="checkbox" id="mother_child" />
          <label htmlFor="mother_child" style={{cursor:"pointer"}}>
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <div className="motherChild_dropdown dropMenu">
            <div className="kids">
              <ul id="kids_links">
                <li>
                  <Link to="/filterpage">Kids Sun Screen</Link>
                </li>
                <li>
                  <Link to="/filterpage">kids Face Wash</Link>
                </li>
                <li>
                  <Link to="/filterpage">3 in 1 Kids</Link>
                </li>
                <li>
                  <Link to="/filterpage">Kids Body Lotion</Link>
                </li>
              </ul>
            </div>
            <div className="mother">
              <ul id="mother_links">
                <li>
                  <Link to="/filterpage">Mother</Link>
                </li>
                <li>
                  <Link to="/filterpage">Massage oil</Link>
                </li>
                <li>
                  <Link to="/filterpage">Stretch care</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="navLink">
          <label htmlFor="wellness" style={{cursor:"pointer"}}>WELLNESS</label>
          <input type="checkbox" id="wellness" />
          <label htmlFor="wellness" style={{cursor:"pointer"}}>
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <Link to="/filterpage">Hair Vanish</Link>
            </li>
            <li>
              <Link to="/filterpage">Essential Oil</Link>
            </li>
            <li>
              <Link to="/filterpage">Women Hygiene</Link>
            </li>
          </ul>
        </li>
        <li className="navLink">
          <label htmlFor="nutrition" style={{cursor:"pointer"}}>NUTRITION</label>
          <input type="checkbox" id="nutrition" />
          <label htmlFor="nutrition" style={{cursor:"pointer"}}>
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <Link to="/filterpage">Omega Fatty Acids</Link>
            </li>
            <li>
              <Link to="/filterpage">Immunity Care</Link>
            </li>
            <li>
              <Link to="/filterpage">Protiens</Link>
            </li>
            <li>
              <Link to="/filterpage">Multivitamins</Link>
            </li>
           
          </ul>
        </li>
        <li className="navLink">
          <label htmlFor="combo" style={{cursor:"pointer"}}>COMBOS</label>
          <input type="checkbox" id="combo" />
          <label htmlFor="combo" style={{cursor:"pointer"}}>
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <Link to="/filterpage">Body Wash</Link>
            </li>
            <li>
              <Link to="/filterpage">Bathing Bar</Link>
            </li>
            <li>
              <Link to="/filterpage">Hand Cream</Link>
            </li>
            <li>
              <Link to="/filterpage">Body Scrub</Link>
            </li>
            <li>
              <Link to="/filterpage">Hand Wash</Link>
            </li>
            <li>
              <Link to="/filterpage">Body Lotion</Link>
            </li>
            <li>
              <Link to="/filterpage">Body Butter</Link>
            </li>
            <li>
              <Link to="/filterpage">Massage oil</Link>
            </li>
          </ul>
        </li>
        <li className="navLink">
          <label htmlFor="collections" style={{cursor:"pointer"}}>COLLECTIONS</label>
          <input type="checkbox" id="collections" />
          <label htmlFor="collections" style={{cursor:"pointer"}}>
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <Link to="/filterpage">Apple cider vinegar</Link>
            </li>
            <li>
              <Link to="/filterpage">Aloe Vera</Link>
            </li>
            <li>
              <Link to="/filterpage">Amazon Rainforest</Link>
            </li>
            <li>
              <Link to="/filterpage">Amla</Link>
            </li>
            <li>
              <Link to="/filterpage">Activated Charcoal</Link>
            </li>
            <li>
              <Link to="/filterpage">Argan Oil</Link>
            </li>
            <li>
              <Link to="/filterpage">Coconut</Link>
            </li>
            <li>
              <Link to="/filterpage">Hemp</Link>
            </li>
            <li>
              <Link to="/filterpage">Himalayan Rose Care</Link>
            </li>
            <li>
              <Link to="/filterpage">Macadamia</Link>
            </li>
            <li>
              <Link to="/filterpage">Men's Care</Link>
            </li>
            <li>
              <Link to="/filterpage">Niacinamide</Link>
            </li>
            
          </ul>
        </li>
        <li className="navLink">
          <label htmlFor="fragrance" style={{cursor:"pointer"}}>FRAGRANCE</label>
          <input type="checkbox" id="fragrance" />
          <label htmlFor="fragrance" style={{cursor:"pointer"}}>
            <svg
              className="drop_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="dropMenu">
            <li>
              <Link to="/filterpage">Apple cider vinegar</Link>
            </li>
            <li>
              <Link to="/filterpage">Aloe Vera</Link>
            </li>
            <li>
              <Link to="/filterpage">Amazon Rainforest</Link>
            </li>
          </ul>
        </li>
        <ul className="icons_track_div mobile_track_div">
          <li className="icons_div">
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
          </li>
          <ul className="track mobile_track">
            <Link to="/">
              <img
                className="social_media_icons"
                src="./assets/wow_chat_icon_637c3b76-9360-4c06-9c1e-77861a856316.jpg"
                alt=""
              />
              Track Order/Chat
            </Link>
          </ul>
        </ul>
       
        {sessionStorage.getItem("logintoken")?
                <button className="logout_btn mt-2 btn_display" onClick={handleLogout}>Logout</button>:
                <Link to="/loginpage">
                     <button className="logout_btn mt-2 btn_display" >Login</button>:
                </Link>
        }
      </ul>
      <label
        htmlFor="menu_btn"
        className="button menu_btn"
      >
        <i className="fas fa-bars" />
      </label>
    </div>
  );
}

export default Header2;
