import React from 'react';
import "./country.css"


const Country = () => {
    return (
        <div className="country-wrapper">
            <div className="wrapper">
                 <img src={process.env.PUBLIC_URL + "/images/USD.png"} />
                 <p>USD</p>
                 <div className="flex">

                 </div>
            </div>
        </div>
    )
}

export default Country;