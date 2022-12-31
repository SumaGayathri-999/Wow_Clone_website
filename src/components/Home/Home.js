import React from 'react';
import MainCorousal from './MainCorousal';
import BestPicks from './BestPicks';
import FourCards from './FourCards';
import TwoColBanner from './TwoColBanner';
// import Coupon from './Coupon';


const Home = ()=>{
    let celebpicks = ["./assets/rashmika.jpg","./assets/bhumi.png","./assets/kartik.png","./assets/kareena.png"];
    let ingredients = ["./assets/onion.png","./assets/aloevera.png","./assets/ubtan.png","./assets/vitaminc.png"]
    return(
        <>
           {/* <Coupon /> */}
           <MainCorousal />
           <BestPicks />
           <FourCards heading="CELEB PICKS" images={celebpicks} />
           <div className="col-12  reason_banner p-md-5">
               <img src="./assets/reason_banner.jpg" alt=""/>
           </div>
           <FourCards heading="SHOP BY INGREDIENTS" images={ingredients} />
           <TwoColBanner />
           
        </>
    )
}
export default Home;