import React, {useState} from "react";
import "./style/pool.css"
import poolList from "../json/pool-network.json";
import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa';

const Pool = (match) => {
    const [item,setItem] = useState(poolList);
    

    return (
        <div className="pool">
           <div className="pool-contianer-top"></div>
            <div className="pool-container-bottom">
               <div className="container-first">
                   <div className="container-first-body">
                       <div className="title">
                           <div className='box'>
                               <div className="first">
                                   <h1>Liquidity Pools</h1>
                                   <p>Add liquidity to earn fees, incentives, voting rights, etc. </p>
                               </div>
                              <a href="#">Learn More</a>
                           </div>

                       </div>
                       <div className="network">
                           <div className='network_container'>
                        {poolList.map(item => (
                             <>
                            <div className="network_body">
                               <img src={item.img} />
                               <h1>{item.title}</h1>
                           </div>
                            </>
                           ))}
                           </div>
                       </div>
                   </div>
               </div>
               <div className="container-second">
                     <div className="container-second-full">
                         <div className="container-second-body">
                           <div className="container-second-flex">
                               <div className="second-header">
                                  <h4>Explore Opportunities</h4>
                               </div>
                               <div className="second-body">
                                   <div className="second-options">
                                       <div className="filter">
                                           <div className="filter-search">
                                               <div className="container">
                                                   <FaSearch className="icon" />
                                                   <div className="box">
                                                       <div className="for">
                                                         <h1>Filter by token, protocol</h1>
                                                          <div className="css">
                                                              <input type="text" autocomplete="off" 
                                                               autocorrect="off"
                                                               spellcheck="false"
                                                               tabindex="0"
                                                               aria-autocomplete="list"
                                                               placeholder='Filter by token, protocol'
                                                              />
                                                          </div>
                                                        </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="right">
                                           <div className="pagenation">
                                               <button className="button button-text button-disabled" disabled="">
                                                   <FaArrowLeft className="icon--active" />
                                               </button>
                                               <div className="pagenation_page">Page 1 of 133</div>
                                               <button className="button button-text">
                                                   <FaArrowRight className="icon" />
                                               </button>
                                           </div>
                                       </div>
                                   </div>
                                   <table cellSpacing="0">
                                       <thead>
                                           <tr role="row">
                                               <th className="no-flex">#</th>
                                               <th class="undefined" colspan="1" role="columnheader">
                                                   <div className="flex">
                                                   Available Pools
                                                   </div>
                                               </th>
                                               <th class="undefined" colspan="1" role="columnheader">
                                                   <div className="flex">
                                                    Liquidity
                                                   </div>
                                               </th>
                                               <th class="undefined" colspan="1" role="columnheader">
                                                   <div className="flex">
                                                    Fee APR
                                                   </div>
                                               </th>
                                           </tr>
                                       </thead>
                                       <tbody role="rowgroup">
                                            <tr>
                                              <td className="no-flex">1</td>
                                              <td className="box" data-header="Aviailble Pools">
                                                  <div className="flex">
                                                      <div className="image">
                                                          <div className="group">
                                                              <img src="https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x6b175474e89094c44da98b954eedeac495271d0f.png"/>
                                                              <img src="https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png" />
                                                          </div>
                                                          <img src="https://storage.googleapis.com/zapper-fi-assets/apps/curve.png"/>
                                                      </div>
                                                      <div className="title">
                                                          <h1>3Pool Curve</h1>
                                                          <p>Curve</p>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td data-header="Aviailble Pools">
                                                 <div>$4,990,994,235</div>
                                              </td>
                                              <td className="box" data-header="Aviailble Pools">
                                                  <h1>0.07% (1y)</h1>
                                                  <p>0.00% (1w)</p>
                                              </td>
                                              <td className="invest" data-header="Aviailble Pools">
                                                <div className="table_group">
                                                    <button>
                                                    Invest
                                                    </button>
                                                </div>
                                              </td>
                                            </tr>
                                       </tbody>
                                   </table>
                               </div>
                           </div>
                        </div>
                     </div>
               </div>
            </div>
        </div>
    )
}

export default Pool;