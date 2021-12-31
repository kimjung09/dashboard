import React, {useRef, useState} from 'react';
import { 

    AiOutlineMenuUnfold,
    AiOutlineDown
} from 'react-icons/ai'
import {
    CgMenu
} from 'react-icons/cg';
import { IoIosGitNetwork } from 'react-icons/io';
import Modal from '../../../exchange/form/Modal';
import { useDetectOutsideClick } from '../../../navigation/useDetect';
import networkItem from '../../../json/network.json';


const Portfolio = ({props}) => {
    const [isOpen, setMenu] = useState(false);
    const [button, setButton ] = useState(true);
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const dropdownRef = useRef(null);

    const [isActive,setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick =  () => setIsActive(!isActive);

    const [item, setItem] = useState(networkItem);

    return (
        <div className="dashboard-bottom">
        <div className="dashboard-bottom_container">
            <div className="dashbaord-bottom_filter">
               <div className="dashboard-bottom_box">
                   <div className="dashboard-bottom_control">
                       <div className="dashboard-bottom_control_item--active">
                           <CgMenu color="#fff" size={12} />
                       </div>
                       <div className="dashboard-bottom_control_item">
                           <AiOutlineMenuUnfold />
                       </div>
                   </div>
               </div>
               <div className="dashboard-bottom_dropdown">
                   <div className="dashboard-bottom_dropdown_container">
                       <div className="dashboard-bottom_dropdown_flex">

                       </div>
                       <span>$0.010</span>
                       <div className="dashboard-bottom_dropdown_flex">

                        </div>
                   </div>
               </div>
               
            </div>
            <div className="dashboard-bottom_network">
                <div 
                  ref={dropdownRef} 
                  onClick={onClick}
                className={`dashboard-bottom_network_box`}
           
                
                >
                    <IoIosGitNetwork
                  
                    />
                    <h1>Networks(9)</h1>
                    <AiOutlineDown size="10px"/>
                </div>
                <div className="dashboard-bottom_network_toggle" >
                    <AiOutlineDown size="20px"/>
                </div>
                <div className={`dashboard-box ${isActive ? "active" : "inactive"}`}>
                    <div className="dashboard-box-container">
                        <div className="container-title">
                            <h1>Show/Hide Balances</h1>
                        </div>
                        <div className="container-bottom">
                            <div className="bottom"></div>
                        {networkItem.map(item => (
                          <>
                            <div className="network-box">
                                <div className="network-box-title">
                                    <img src={item.img} />
                                    <p>{item.title}</p>
                                </div>
                                <div className="network-box-switch">
                                    <div className="bg">
                                    </div>
                                     <div className="button">
                                    </div>
                                    <input type="checkbox" role="switch" aria-checked="true" />
                                </div>
                            </div>
                        </>
                         ))}
                        </div>
                    </div>
                </div>
                
            </div>
        
        </div>
    </div>
    )
}


export default Portfolio;