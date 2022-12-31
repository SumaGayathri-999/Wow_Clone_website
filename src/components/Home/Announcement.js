import React from 'react';

function Announcement() {
  return (
    <div className="carousel slide announcement_div" data-ride="carousel">
       <div className="carousel-inner">
         <div className="carousel-item active text-center">
            <p className="d-block w-100">
              FREE SERUM ON 598 + | FREE SERUM &amp; FACEWASH ON 897 +
            </p>
         </div>
        <div className="carousel-item text-center">
           <p className="d-block w-100">GET A SUPRISE GIFT FREE ON EVERY ORDER</p>
        </div>
      </div>
    </div>

  )
}

export default Announcement;