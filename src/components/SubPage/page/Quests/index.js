import React from 'react';
import "./style/Quests.css";
import {FaGasPump} from 'react-icons/fa';

const Quests = () => {
    return (
    <>
       <div className="Quests-container">
           
          <div className="Quest-title">
              <div className="Quest-title-container">
                  <div className="Quest-header">Quests</div>
              </div>
          </div>
          <div className="Quest-header">
              <div className="Quest-header-container">
                  <div className="mb-7">
                      <div className="page-icon"></div>
                      <div className="page-title">
                          <h3>Quests</h3>
                          <a href="https://zapper.crunch.help/season-2-gamification">
                            Learn More
                          </a>
                      </div>
                  </div>
                  {/*  info  */}
                  <div className="Quest-rewards-info">
                    <div className="Quests-rewards-balance">
                        <div className="flex">
                            <div className="rewards-balance_item">
                                <p>Synced</p>
                                <div className="rewards-balance_item_amount">
                                    0
                                </div>
                            </div>
                            <div className="rewards-balance_item">
                                <p>Pending</p>
                                <div className="rewards-balance_item_amount">
                                    495
                                </div>
                            </div>
                            <button>
                                 <FaGasPump/>
                            </button>
                        </div>
                        
                    </div>
                    <div className="rewrads-time">
                        <p>
                            Season 2 ends in:
                        </p>
                        <h4>6d 13h 55m</h4>
                        <p>January 2, 2022, 8:59 AM GMT+9</p>
                    </div>
                  </div>

              </div>
          </div>
          <div className="Quest-body">
            <div className="Quests-Container">
                <div className="Quest-Card_list">
                    <div className="Quest-Card_item">
                        <div className="Quest-Card_item_header">
                            <div className="Quest-Card_item_header_actions">
                                <div className="block">
                                    <h4>Daily</h4>
                                </div>
                            </div>
                            <div className="Quest-Card_item_header_media">
                                <img width="100%" alt="Open Zapper" src={process.env.PUBLIC_URL + "/images/open-zapper.png"} />
 
                            </div>
                            <div className="Quest-Card_item_header_text">
                                 <h4>Open Zapper</h4>
                            </div>
                        </div>
                        <div className="Quest-Card_item_body">
                            <div className="Quests-Card_item_between">
                                <p>100 XP - 75 V</p>
                            </div>
                            <p>Open Zapper everyday</p>
                             <div className="Quests-Card_item_address">
                               <a href="https://learn.zapper.fi/articles/what-is-zapper">Learn More</a>
                            </div>
                            <div className="button-body">
                            <button>Claim</button>
                            </div>
                        </div>
                    </div>
                    <div className="Quest-Card_item">
                        <div className="Quest-Card_item_header">
                            <div className="Quest-Card_item_header_actions">
                                <div className="block">
                                    <h4>Daily</h4>
                                </div>
                            </div>
                            <div className="Quest-Card_item_header_media">
                                <img width="100%" alt="Open Zapper" src={process.env.PUBLIC_URL + "/images/open-zapper.png"} />
 
                            </div>
                            <div className="Quest-Card_item_header_text">
                                 <h4>Open Zapper</h4>
                            </div>
                        </div>
                        <div className="Quest-Card_item_body">
                            <div className="Quests-Card_item_between">
                                <p>100 XP - 75 V</p>
                            </div>
                            <p>Open Zapper everyday</p>
                             <div className="Quests-Card_item_address">
                               <a href="https://learn.zapper.fi/articles/what-is-zapper">Learn More</a>
                            </div>
                            <div className="button-body">
                            <button>Claim</button>
                            </div>
                        </div>
                    </div>
                    <div className="Quest-Card_item">
                        <div className="Quest-Card_item_header">
                            <div className="Quest-Card_item_header_actions">
                                <div className="block">
                                    <h4>Daily</h4>
                                </div>
                            </div>
                            <div className="Quest-Card_item_header_media">
                                <img width="100%" alt="Open Zapper" src={process.env.PUBLIC_URL + "/images/open-zapper.png"} />
 
                            </div>
                            <div className="Quest-Card_item_header_text">
                                 <h4>Open Zapper</h4>
                            </div>
                        </div>
                        <div className="Quest-Card_item_body">
                            <div className="Quests-Card_item_between">
                                <p>100 XP - 75 V</p>
                            </div>
                            <p>Open Zapper everyday</p>
                             <div className="Quests-Card_item_address">
                               <a href="https://learn.zapper.fi/articles/what-is-zapper">Learn More</a>
                            </div>
                            <div className="button-body">
                            <button>Claim</button>
                            </div>
                        </div>
                    </div>
                    <div className="Quest-Card_item">
                        <div className="Quest-Card_item_header">
                            <div className="Quest-Card_item_header_actions">
                                <div className="block">
                                    <h4>Daily</h4>
                                </div>
                            </div>
                            <div className="Quest-Card_item_header_media">
                                <img width="100%" alt="Open Zapper" src={process.env.PUBLIC_URL + "/images/open-zapper.png"} />
 
                            </div>
                            <div className="Quest-Card_item_header_text">
                                 <h4>Open Zapper</h4>
                            </div>
                        </div>
                        <div className="Quest-Card_item_body">
                            <div className="Quests-Card_item_between">
                                <p>100 XP - 75 V</p>
                            </div>
                            <p>Open Zapper everyday</p>
                             <div className="Quests-Card_item_address">
                               <a href="https://learn.zapper.fi/articles/what-is-zapper">Learn More</a>
                            </div>
                            <div className="button-body">
                            <button>Claim</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="Quest-Card_item">
                        <div className="Quest-Card_item_header">
                            <div className="Quest-Card_item_header_actions">
                                <div className="block">
                                    <h4>Daily</h4>
                                </div>
                            </div>
                            <div className="Quest-Card_item_header_media">
                                <img width="100%" alt="Open Zapper" src={process.env.PUBLIC_URL + "/images/open-zapper.png"} />
 
                            </div>
                            <div className="Quest-Card_item_header_text">
                                 <h4>Open Zapper</h4>
                            </div>
                        </div>
                        <div className="Quest-Card_item_body">
                            <div className="Quests-Card_item_between">
                                <p>100 XP - 75 V</p>
                            </div>
                            <p>Open Zapper everyday</p>
                             <div className="Quests-Card_item_address">
                               <a href="https://learn.zapper.fi/articles/what-is-zapper">Learn More</a>
                            </div>
                            <div className="button-body">
                            <button>Claim</button>
                            </div>
                        </div>
                    </div>
                    <div className="Quest-Card_item">
                        <div className="Quest-Card_item_header">
                            <div className="Quest-Card_item_header_actions">
                                <div className="block">
                                    <h4>Daily</h4>
                                </div>
                            </div>
                            <div className="Quest-Card_item_header_media">
                                <img width="100%" alt="Open Zapper" src={process.env.PUBLIC_URL + "/images/open-zapper.png"} />
 
                            </div>
                            <div className="Quest-Card_item_header_text">
                                 <h4>Open Zapper</h4>
                            </div>
                        </div>
                        <div className="Quest-Card_item_body">
                            <div className="Quests-Card_item_between">
                                <p>100 XP - 75 V</p>
                            </div>
                            <p>Open Zapper everyday</p>
                             <div className="Quests-Card_item_address">
                               <a href="https://learn.zapper.fi/articles/what-is-zapper">Learn More</a>
                            </div>
                            <div className="button-body">
                            <button>Claim</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
          </div>   
        </div>  
    </>
    )
}

export default Quests;