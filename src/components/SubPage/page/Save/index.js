import React, {useState} from "react";
import "./style/save.css"
import poolList from "../json/pool-network.json";
import poolItem from '../json/pool-items.json';
import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa';

const Save = (match) => {
    const [item,setItem] = useState(poolList);
    const [list, setList] = useState(poolItem);
    

    return (
        <div className="pool">
           <div className="pool-contianer-top"></div>
            <div className="pool-container-bottom">
               <div className="container-first">
                   <div className="container-first-body">
                       <div className="title">
                           <div className='box'>
                               <div className="first">
                                   <h1>Save</h1>
                                   <p>Earn interest by depositing your assets.</p>
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
                                  <h4>Market</h4>
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
                                               <div className="pagenation_page">Page 1 of 5</div>
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
                                                   Assets

                                                   </div>
                                               </th>
                                               <th class="undefined" colspan="1" role="columnheader">
                                                   <div className="flex">
                                                   MarketSize
                                                   </div>
                                               </th>
                                               <th class="undefined" colspan="1" role="columnheader">
                                                   <div className="flex">
                                                    Fee APR
                                                   </div>
                                               </th>
                                           </tr>
                                       </thead>
                                       {poolItem.map(list => (
                                               <>
                                          <tbody role="rowgroup">
                                            <tr>
                                              <td className="no-flex">{list.id}</td>
                                              <td className="box" data-header="Aviailble Pools">
                                                  <div className="flex">
                                                      <div className="image">
                                                          <div className="group">
                                                              <img src={list.main_img}/>
                                                              <img src={list.sub_img} />
                                                          </div>
                                                          <img src="https://storage.googleapis.com/zapper-fi-assets/apps/curve.png"/>
                                                      </div>
                                                      <div className="title">
                                                          <h1>{list.subTitle}</h1>
                                                          <p>{list.description}</p>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td data-header="Aviailble Pools">
                                                 <div>{list.pay}</div>
                                              </td>
                                              <td className="box" data-header="Aviailble Pools">
                                                  <h1>{list.apr}</h1>
                                                  <p>{list.percent}</p>
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
                                               </>
                                           ))
                                       }
     
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

export default Save;