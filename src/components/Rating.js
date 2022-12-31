import React from 'react';


function Rating({rate}) {
   
  return (
    <span  className="rating my-1"  >
        {[...Array(5)].map((_,index)=>{
            return(
                <>
                    {index < rate?<i className="fa-solid fa-star" style={{color:"gold"}} />:<i className="fa-regular fa-star" style={{color:"black"}} />}
                </>
            )
        })}
    </span>
  )
    }

export default Rating;