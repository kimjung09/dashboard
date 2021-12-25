import React from 'react';
import "./style/Dash.css";
import { 
    AiOutlineBook,
    AiOutlinePlus,
    AiFillEdit,
    AiOutlineRedo,
    AiOutlineMenuUnfold,
    AiOutlineDown
} from 'react-icons/ai'

import {
    CgMenu
} from 'react-icons/cg';

import {IoIosGitNetwork} from 'react-icons/io'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-title">Dashboard</div>
            <div className="dashboard-header">
                <div className="dashboard-header_top">
                    <div className="dashboard-header_bundle">
                        <div className="dashboard-header_bundle_item">
                            <div className="dashboard-header_bundle_item_icon"></div>
                            <div className="dashboard-header_bundle_item_title">0x393929</div>
                        </div>
                        <div className="dashboard-header_bundle_account">
                            <div className="icon">
                                 <AiOutlineBook size="14" color="#fff"/>
                            </div>
                            <div className="flex">
                                <div className="label">No Bundles</div>
                                <button>
                                   <AiOutlinePlus />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-header_net-wroth">
                    <div className="nft_title">
                        Net Worth
                    </div>
                    <div className="nft_pay">
                        $0.00
                    </div>
                    <div className="nft_edit">
                        <button className="mr-2">
                            <AiFillEdit/>
                        </button>
                        <button>
                            <AiOutlineRedo />
                        </button>
                    </div>
                </div>
                <div className="dashboard-header_tabs">
                    <button className="dashboard-header_tabs_item--active">Portfolio</button>
                    <button className="dashboard-header_tabs_item">NFTS</button>
                    <button className="dashboard-header_tabs_item">History</button>
                </div>

            </div>
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
                        <div className="dashboard-bottom_network_box">
                            <IoIosGitNetwork />
                            <h1>Networks(9)</h1>
                            <AiOutlineDown size="10px"/>
                        </div>
                        <div className="dashboard-bottom_network_toggle">
                            <AiOutlineDown size="20px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dashboard;