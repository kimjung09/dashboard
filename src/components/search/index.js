import React, {useState} from 'react';
import "./style/search.css";
import '../../App.css';

import searchList from "./json/search.json";
import favoriteList from './json/favorite.json';
import Navigation from '../SubPage/page/Dashboard/navigation';


const Search = (match) => {
    const [item, setItem] = useState(searchList);

    // const item = match.params.id(itemList + 1);


    return (
        <div className="Container">
        <div className="search-wrapper">
            <div className="search-wrapper-top">
                <div className="search-wrapper-top-container">
                <div className="back">1</div>
                <div className="title">
                    <h1>{item.uptitle}</h1>
                </div>
                </div>
            </div>
            <div className="search-wrapper-bottom">
              <div className="container">
                  <div className="header">
                      <div className="header_left">
                          <span>{item.headertitle}</span>
                          <div className="title">
                              <img src="https://storage.googleapis.com/zapper-fi-assets/tokens/fantom/0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83.png"/>
                               {item.subtitle}
                          </div>
                      </div>
                      <div className="header_right">
                          {/* <div className="favorite">
                   
                          <a href="https://www.coingecko.com/en/coins/fantom" target="_blank" rel="noreferrer">
                             <img src="https://zapper.fi/images/other/coingecko.png"/>
                             
                          </a>
                          </div> */}
                          {
                             favoriteList.map(item => (
                                <a href={item.link} target="_blank" rel="noreferrer">
                                <img src={item.img} />
                                </a>
                             ))
                         }
                     
                      
                      </div>
                  </div>
                  <div className="mb-6">
                      <div className="flex">
                        <h2>$2.546</h2>
                        <span>+8.43%</span>
                      </div>
                  </div>
                  <div className="chart">
                      <div className="recharts">
                          <div className="recahrts-wrapper">
                          
                          </div>

                      </div>
                  </div>
                  <div className="time">
                      <div className="flex">
                          <button className="button button-small">1H</button>
                          <button className="button button-main button-small">1D</button>
                          <button className="button button-small">1W</button>
                          <button className="button button-small">1M</button>
                          <button className="button button-small">1Y</button>
                      </div>
                  </div>
                  <ul className="stack">
                   <li>
                       <span className="text-alt">Market cap</span>
                       <span>$6.48B</span>
                   </li>
                   <li>
                       <span className="text-alt">Market cap</span>
                       <span>$6.48B</span>
                   </li>
                   <li>
                       <span className="text-alt">Market cap</span>
                       <span>$6.48B</span>
                   </li>
                   <li>
                       <span className="text-alt">Market cap</span>
                       <span>$6.48B</span>
                   </li>

                   <li>
                       <span className="text-alt">Market cap</span>
                       <span>$6.48B</span>
                   </li>
                  </ul>
              </div>

            </div>
        </div>
        
        </div>
    )
}

export default Search;

