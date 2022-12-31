import React from "react";
import { Link } from 'react-router-dom'

// useEffect(()=>{
//   console.log("i am in footer");
// })
function Footer() {
  return (
    <>
      <div className="footer container-fluid p-5">
        <div className="row">
          <div className="col-12 col-md-2 footer_logo mt-5 p-lg-5 text-center">
            <Link to="/">
              <img
                className="wow_image"
                src="./assets/pngaaa.com-5067966.png"
                width="100px"
                height="50px"
                alt=""
              />
            </Link>
          </div>
          <div className="col-12 col-md-4 p-3 border_bottom">
            <h5>WHO WE ARE</h5>
            <p>
              WOW Skin Science Products are completely free from Harmful
              Sulphates, Silicones &amp; Parabens. Our Products are safe, nature
              inspired &amp; dermatologically tested for your safety. Try Today
              &amp; Fall in love with the complete range of Nutrition, Skin
              Care, Hair Care and Bath &amp; Body Products.
            </p>
          </div>
          <div className="col-12  p-3 col-md-3 border_bottom">
            <ul>
              <li>About Us</li>
              <li>Return / Refund / Cancellation Policy</li>
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping &amp; Delivery Policy</li>
            </ul>
          </div>
          <div className="col-12 p-3 col-md-3 border_bottom">
            <ul>
              <li>Track your Order</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Store Locator</li>
              <li>RES</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
