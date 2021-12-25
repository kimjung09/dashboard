import React from "react";
import "./style/exchange.css"
import "../exchange/style/Exchange.css";


const Pool = (match) => {
    return (
        <div className="pool">
            <div className="top">
               <div className="title">
                   <div className="first">
                       <h1>Pool</h1>
                       <p>Swap into more than 2000 tokens, using the best quotes from over 20 sources.</p>
                   </div>
                   <div className="second">
                       <a href="https://learn.zapper.fi/articles/what-is-a-decentralized-exchange">
                             Learn More
                       </a>
                   </div>
               </div>
               <div className="network">
                   <div className="network_container">
                      <div className="network_form network_form--active">
                          <img src={process.env.PUBLIC_URL + "/images/ethereum-icon.png"}></img>
                          <span>Ethereum</span>

                      </div>
                      <div className="network_form">
                          <img src={process.env.PUBLIC_URL + "/images/avalanche-icon.png"}></img>
                          <span>Avalanche</span>
                      
                      </div>
                      <div className="network_form">
                          <img src={process.env.PUBLIC_URL + "/images/binance-smart-chain-icon.png"}></img>
                          <span>BSC</span>

                      </div>
                      <div className="network_form">
                      <img src={process.env.PUBLIC_URL + "/images/fantom-icon.png"}></img>
                           <span>Fantom</span>
                      </div>
                   </div>
               </div>
           </div>
           <div className="bottom">
               <div className="pool_bottom_full">
                   <div className="pool_bottom_full_container">
                       <div className="pool_bottom_full_container_box">
                           <div className="pool_bottom_header">
                               <h4>Explore Opportunities</h4>
                           </div>
                           <div className="pool_bottom_table">
                              <div className="pool_bottom_table_options">
                                  <div className="pool_bottom_table_filter">
                                    <div className="pool_bottom_table_filter_search">
                                        <div className="table_container">
                                             <div className="table_container_center">
                                                   <input type="text" placeholder='Filter by token,protocol'/>
                                             </div>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="pool_bottom_table_right">

                                  </div>
                              </div>
                              <table role="table">
                                 
                              </table>
                           </div>
                       </div>
                   </div>
                   <table>
                       <thead role="row">
                           <tr>
                               <th className="no-flex">#</th>
                               <th colespan="1">Available Pools</th>
                               <th colespan="1">Liquidity</th>
                               <th colespan="1">Fee APR</th>
                               <th colespan="1"></th>

                           </tr>
                       </thead>
                       <tbody role="rowgroup">
                           <tr role="row">
                               <td className='no-flex'>1</td>
                               <td role="cell">
                                   
                               </td>
                               <td role="cell"></td>
                               <td role="cell"></td>
                               <td role="cell"></td>

                           </tr>
                           <tr role="row"></tr>
                           <tr role="row"></tr>
                           <tr role="row"></tr>
                           <tr role="row"></tr>

                       </tbody>
                   </table>
                </div>
           </div>
        </div>
    )
}

export default Pool;