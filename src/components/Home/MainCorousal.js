import React from "react";

function MainCorousal() {
  return (
    <>
      <div className="container-fluid home_corousal">
        <div className="row mt-1">
          <div
            id="carouselExample"
            className="carousel slide col-12"
            data-ride="carousel"
          >
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExample"
                data-slide-to={0}
                className="active indic"
              />
              <li data-target="#carouselExample" data-slide-to={1} />
              <li data-target="#carouselExample" data-slide-to={2} />
            </ol>
            {/* Wrapper for slides */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="./assets/corousal_image1.jpg"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./assets/corousal_image2.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./assets/corousal_image3.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            {/* Left and right controls */}
            <a
              className="carousel-control-prev"
              href="#carouselExample"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExample"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCorousal;
