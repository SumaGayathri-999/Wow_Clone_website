import React from 'react'

function TwoColBanner() {
  return (
    <>
      <div className="two_col_banner container-fluid p-md-5 mb-5">
  <div className="row">
    <div className="col-12 col-md-6 mb-3">
      <a href="#">
        <img src="./assets/hempcare.png" className="banner_image" />
      </a>
      <div className="banner_text">
        <p className="text-center">HEMP HAIR CARE</p>
        <h1 className="text-center">NEW ARRIVALS</h1>
        <button>SHOP NOW</button>
      </div>
    </div>
    <div className="col-12 col-md-6 ">
      <a href="#">
        <img src="./assets/SaverPack.png" />
      </a>
      <div className="banner_text">
        <p className="text-center">HEMP HAIR CARE</p>
        <h1 className="text-center">NEW ARRIVALS</h1>
        <button>SHOP NOW</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default TwoColBanner