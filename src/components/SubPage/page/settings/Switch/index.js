import React, { ChangeEventHandler } from "react";
import "./Switch.css"




const Switch = () => {
   return (
       <>
       <div className="setting-DarkMode">
            <label className="toggle-theme" htmlFor='checkbox'>
        
               <input 
                  type="checkbox"
                  id="checkbox"
                  />
                  <div className="slider round"></div>
                  
            </label>
       </div>
       </>
   )
}

export default Switch;