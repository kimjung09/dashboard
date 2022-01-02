import React, { useRef, useState } from 'react';
import { useDetectOutsideClick } from '../../navigation/useDetect';
import "./country.css"
import CountryList from '../../json/country.json';
import CountryList1 from '../../json/contry1.json';
import CountryList2 from '../../json/contry2.json';
import CountryList3 from '../../json/country3.json';
import CountryList4 from '../../json/country4.json';




const Country = ({props}) => {
    const [isOpen, setMenu] = useState(false);
    const [click, setClick] = useState(false);

    const dropdonwRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdonwRef, false);
    const onClick = () => setIsActive(!isActive);



    return (
        <div className="country-wrapper-side" props={props}>
            <div className="wrapper" onClick={onClick}>
                 <img src={process.env.PUBLIC_URL + "/images/USD.png"} />
                 <p>USD</p>
                 <div className="flex">
                 </div>
            </div>
            <nav 
              ref={dropdonwRef}
              className={`menu ${isActive ? "active" : "inactive"}`
            }>
                <div className="menu_row">
                   <div className="column">
                        <div className="dropdown__list">
                            {/* <img src="https://zapper.fi/images/currencies/BRL.svg" typeof='svg'/> */}
                         {CountryList.map(item => (
                             <>
                                <img src={process.env.PUBLIC_URL + `/lang/${item.id}.png`} alt="USD"/>
                                <p>{item.id}</p>
                             </>
                          ))
                         }    
                        </div>   
                    </div>     
                    <div className="column">

                        <div className="dropdown__list">
                            {/* <img src="https://zapper.fi/images/currencies/BRL.svg" typeof='svg'/> */}
                         {CountryList1.map(item => (
                             <>
                             <img src={process.env.PUBLIC_URL + `/lang/${item.id}.png`} alt="USD"/>
                             <p>{item.id}</p>
                             </>
                         ))
                         }    
                        </div>
                    </div>
                   <div className="column">

                        <div className="dropdown__list">
                            {/* <img src="https://zapper.fi/images/currencies/BRL.svg" typeof='svg'/> */}
                         {CountryList2.map(item => (
                            <>
                            <img src={process.env.PUBLIC_URL + `/lang/${item.id}.png`} alt="USD"/>
                            <p>{item.id}</p>
                            </>
                         ))
                         }    
                
                        </div>   
                    
                    </div>
                   <div className="column">
                        <div className="dropdown__list">
                            {/* <img src="https://zapper.fi/images/currencies/BRL.svg" typeof='svg'/> */}
                         {CountryList3.map(item => (
                              <>
                              <img src={process.env.PUBLIC_URL + `/lang/${item.id}.png`} alt="USD"/>
                              <p>{item.id}</p>
                              </>
                         ))
                         }    
                        </div>
                    </div>
                   <div className="column">

                        <div className="dropdown__list">
                            {/* <img src="https://zapper.fi/images/currencies/BRL.svg" typeof='svg'/> */}
                         {CountryList4.map(item => (
                              <>
                              <img src={process.env.PUBLIC_URL + `/lang/${item.id}.png`} alt="USD"/>
                              <p>{item.id}</p>
                              </>
                         ))
                         }    
                   </div>
                   </div>

                </div>
            </nav>
        </div>
    )
}

export default Country;