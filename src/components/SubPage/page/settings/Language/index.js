import React, { useRef, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useDetectOutsideClick } from '../../navigation/useDetect';
import './Lang.css';
import LanguageList from '../../json/language.json';

const Language = ({props}) => {

    const [isOpen, setMenu] = useState(false);
    const [click, setClick] = useState(false);

    const closeMobileMenu = () => setClick(false);

    const handleClick = () => setClick(!click);
 
    const toggleMenu = () => {
        setMenu(isOpen => !isOpen);
    }
 
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

 
   return (
       <div className="language-wrapper" props={props}>
     
         
           <div className="dropdown-language"
           onClick={onClick}
           >
               en
               <div className="flex">
                   <FaArrowDown className="item" />
               </div>
          
           </div>
           <nav 
                ref={dropdownRef}
                className={`menu ${isActive ? "active" : "inactive"}`
            }>
                        
                  {LanguageList.map(item => (
                          <>
                         <NavLink to={`/settings/${item.id}`} className="nav--link">
                            {item.title}
                         </NavLink>
                          </>
                      ))}
             </nav>
       
         
       </div>
   )
}

export default Language;