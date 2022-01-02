import React, { useEffect, useRef, useState } from 'react';
import { useDetectOutsideClick } from '../../navigation/useDetect';
import "./country.css"
import CountryList from '../../json/country.json';
import CountryList1 from '../../json/contry1.json';
import CountryList2 from '../../json/contry2.json';
import CountryList3 from '../../json/country3.json';
import CountryList4 from '../../json/country4.json';




const Country = ({props}) => {
    const [isOpen, setMenu] = useState(false);
    const [button, setButton] = useState(true);
    const [click, setClick] = useState(false);

  
    const [modalOpen, setModalOpen] = useState(false);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth < 600) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

      useEffect(() => {
          setButton();
      }, [])

      const toggleMenu = () => {
          setMenu(isOpen => !isOpen);
      }

      window.addEventListener('resize', showButton);

      
      const dropdownRef = useRef(null);
      const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
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
              ref={dropdownRef}
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