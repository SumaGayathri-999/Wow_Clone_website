import React from "react";
import {Link} from 'react-router-dom';

function FourCards({heading,images}) {
  return (
    <>
      <div className="container-fluid celeb_container mt-5 p-2">
        <h1 className="text-center my-5">{heading}</h1>
        <div className="row p-md-5">
          {images.map((item,index)=>{
            return(
                <div className="col-md-3 col-6 mb-3" key={index}>
                <Link to="/">
                  <img  src={item} alt=""/>
                </Link>
              </div>  
            )
          })}
        </div>
      </div>
    </>
  );
}

export default FourCards;
