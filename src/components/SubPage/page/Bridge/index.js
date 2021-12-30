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
                          <div className="bridge-middle">
                              <div className="bridge-middle-row">
                                  <p>To</p>
                              </div>
                          </div>
                          <div className="bridge-network">
                              <div className="bridge-first-title-row">
                                  <p>Network</p>
                              </div>
                          
                              <div className="bridge-first-box-row">
                                  <div className="network_header">
                                      <div className="network_header_title">
                                          <img src="https://zapper.fi/images/networks/polygon-icon.png" />
                                          Polygon
                                      </div>
                                  </div>
                              </div>
                              <div className="bridge-second-card-row">
                                  <p>Token</p>
                              </div>
                              <div className="bridge-second-invest-row">
                                  <div className="second-container">
                                          <h1>Select Token</h1>
                                          <div className="flex"></div>
                                  </div>
                                  <div className='flex'></div>
                              </div>
                          </div>
                          <div className="bridge-invest">
                              <div className="invest-content">
                                  <h1>Transaction Settings</h1>
                              </div>
                              <div className="invest-settings">
                                  <div className="settings_left">
                                      <a href="https://learn.zapper.fi/articles/what-is-slippage">
                                          Slipage Tolerance
                                      </a>
                                  </div>
                                  <div className="settings_right">
                                      <p>2.00%</p>
                                  </div>
                                  <div className="settings_left">
                                      <a href="https://learn.zapper.fi/articles/what-is-slippage">
                                          Allowances
                                      </a>
                                  </div>
                                  <div className="settings_right">
                                      <p>Exact Amount</p>
                                      <div className="extact">
                                          <div className="switch-bg">
                                              <div className="switch-handle"></div>
                                              <input type="checkbox" role="switch" aria-checked="true"/>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="bridge-footer">
                          <button className="button  button--disabled" disabled>
                          Confirm
                          </button>
                      </div>
                  </div>
               </div>
           </div>
        </>
    )
}

export default Bridge;