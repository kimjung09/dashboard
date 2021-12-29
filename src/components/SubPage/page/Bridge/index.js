import React from 'react';
import "./style/bridge.css"



const Bridge = () => {
    return (
        <>
           <div className="Bridge">
               <div className="Bridge-title">
                   <div className="Bridge-title-body">
                       <div className="title">
                           <h1>Bridge</h1>
                           <p>Move tokens from one blockchain network to another.</p>
                       </div>
                       <div className="subtitle">
                          <a href="https://learn.zapper.fi/articles/what-is-a-bridge">
                              Learn More
                          </a>
                       </div>
                    </div>
               </div>
               <div className="bottom">

               </div>
               <div className="Bridge-container">
                  <div className="bridge">
                      <div className="bridge-section">
                          <div className="bridge-section-container">
                              <div className="container-first-title">
                                  <h1>Network</h1>
                              </div>
                              <div className="container-first-form">
                                  <div className="dropdown_network">
                                       <div className="header">
                                           <div className="header_title">
                                               <img src={process.env.PUBLIC_URL + "/images/ethereum-icon.png"} />
                                               Ehtereum
                                           </div>
                                       </div>
                                   </div>
                              </div>
                              <div className="container-second-title">
                                  <h1>
                                      Token
                                  </h1>
                                  <p>
                                      Balance : 0
                                  </p>
                              </div>
                              <div className="container-second-form">
                                  <div className="container">
                                      <img src="https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png"/>
                                      <div className="form">
                                          <h1>ETH</h1>
                                          
                                      </div>
                                  </div>
                                  <div className="max">
                                      Max
                                  </div>
                                  <div className="input">
                                      <input step="any" placeholder="0" value=""/>
                                      
                                  </div>
                              </div>

                          </div>
                      </div>
                      <div className="bridge-footer">

                      </div>
                  </div>
               </div>
           </div>
        </>
    )
}

export default Bridge;