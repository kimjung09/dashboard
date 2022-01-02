import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import './Lang.css'

const Language = () => {
   return (
       <div className="language-wrapper">
           <div className="dropdown-language">
               en
               <div className="flex">
                   <FaArrowDown className="item" />
               </div>
           </div>
       </div>
   )
}

export default Language;