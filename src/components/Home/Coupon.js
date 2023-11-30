import React from 'react'

function Coupon() {
    function closeCoupon(){
        document.querySelector(".coupon").style.display="none";
        document.querySelector(".main_page").style.opacity="1";
        document.querySelector("#root").style.position ="static";

    }
  return (
<div className="coupon" >
  <img src="./assets/coupun_bg.jpg" className="coupon_image" alt=""/>
  <i className="close_button fas fa-times" onClick={closeCoupon} />
  <div className="coupon_text ">
    <h1>Get glowing with upto Rs 500 OFF</h1>
    <div className="row mt-3 mb-4">
      <div className="coupon_field ml-4 col-5 ">
        <input type="email" placeholder="Email" />
        <i className="coupon_icons fa-solid fa-envelope" />
      </div>
      <div className="coupon_field offset-1 col-5 ">
        <input type="text" placeholder="Phone" />
        <i className="coupon_icons fa-sharp fa-solid fa-phone" />
      </div>
    </div>
    <input type="checkbox" />
    &nbsp;&nbsp;By submitting this form, you consent to receive a promotion code
    &amp; offer messages.
    <div className="submit">SUBMIT</div>
  </div>
</div>
  )
}

export default Coupon
