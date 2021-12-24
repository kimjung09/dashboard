import React from 'react';
import "./style/widgets.css"


const Widgets = () => {
    return (
        <div className="widgets-container">
           <div className="widgets-body">
               <div className="widgets-bottom">
                   <div className="widgets-box">
                       <div className="search">
                           <div className="icon"></div>
                           <div className="control">
                               <input type="text" placeholder="Search by account, token, ENS..." />
                           </div>
                       </div>
                     
                   </div>
                   <div className="widgets-box">
                        <div className="watchlist">
                                <h1>Widgets</h1>
                                <button></button>
                            </div>
                   </div>
                   <div className="widgets-box">
                     <div className="token">
                           <h4>Token Watchlist</h4>
                           <div className="form">
                               <h4>No tokens added yet</h4>
                               <p>Search for a token and favourite it to add it to the watchlist</p>
                           </div>
                       </div>
                   </div>
                   <div className="widgets-box">
                       <div className="network">
                           <div className="network_fee">
                               <div className='network_title'>Network Fee</div>
                               <div className="network_box">
                                   <div className="network_background">
                                       <div className='network_title_left'>
                                           <span className="line">Standard</span>
                                           <span className="time">~3 min</span>
                                       </div>
                                       <div className='network_title_right'>
                                           <span>50</span>
                                           <div className="doller">
                                               <span>$13.60</span>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="network_background">
                                   <div className='network_title_left'></div>
                                       <div className='network_title_right'></div>

                                   </div>

                               </div>
                               <div className="network_box">
                                   <div className="network_background">
                                       <div className='network_title_left'>
                                           <span className="line">Standard</span>
                                           <span className="time">~3 min</span>
                                       </div>
                                       <div className='network_title_right'>
                                           <span>50</span>
                                           <div className="doller">
                                               <span>$13.60</span>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="network_background">
                                   <div className='network_title_left'></div>
                                       <div className='network_title_right'></div>

                                   </div>

                               </div>
                               <div className="network_trend">
                                   <div className='title'>Gas Trend (1w)</div>
                                    <div className="graph">
                                        <div className="background">
                                           <div className="pay">
                                               <div className="col">
                                                   <h1>48</h1> 
                                                   <p>gwei</p>
                                                    
                                                    <span>30.88</span>
                                               </div>
                                               <p>Avg.Fee</p>
                                           </div>
                                           <div className="loop">
                                               <svg class="recharts-surface" width="266" height="128" viewBox="0 0 266 128" version="1.1"><defs><clipPath id="recharts1-clip"><rect x="5" y="5" height="88" width="256"></rect></clipPath></defs><g class="recharts-layer recharts-line"><path stroke-width="2" stroke="var(--main)" fill="none" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="256" height="88" class="recharts-curve recharts-line-curve" type="monotoneX" d="M5,18.7462511175C8.710144927536232,16.54874542891667,12.420289855072463,14.35123974033334,16.130434782608695,13.497728769200002C19.840579710144926,12.644217798066665,23.55072463768116,12.217462312499997,27.26086956521739,12.217462312499997C30.97101449275362,12.217462312499997,34.68115942028985,45.335677616299996,38.391304347826086,45.335677616299996C42.10144927536232,45.335677616299996,45.81159420289855,30.477685792899994,49.52173913043478,30.477685792899994C53.231884057971016,30.477685792899994,56.94202898550724,32.0379144772,60.65217391304348,35.158371845800005C64.3623188405797,38.27882921440001,68.07246376811594,49.8346521689,71.78260869565217,49.8346521689C75.4927536231884,49.8346521689,79.20289855072464,42.862791465950004,82.91304347826087,39.257917097800004C86.62318840579711,35.653042729650004,90.33333333333333,28.20540596,94.04347826086956,28.20540596C97.7536231884058,28.20540596,101.46376811594202,35.49703147296666,105.17391304347825,37.928459617899996C108.88405797101449,40.35988776283333,112.59420289855072,42.7939748296,116.30434782608695,42.7939748296C120.01449275362319,42.7939748296,123.72463768115942,29.023079211083335,127.43478260869566,25.0314453218C131.14492753623188,21.03981143251667,134.85507246376812,18.844171493900006,138.56521739130434,18.844171493900006C142.27536231884056,18.844171493900006,145.9855072463768,41.967343468,149.69565217391303,41.967343468C153.40579710144928,41.967343468,157.1159420289855,28.328556670100006,160.82608695652175,23.0721379212C164.53623188405797,17.815719172300007,168.24637681159422,10.42883097459999,171.95652173913044,10.42883097459999C175.66666666666666,10.42883097459999,179.3768115942029,36.47326480943334,183.08695652173913,38.3860138403C186.79710144927535,40.298762871166666,190.5072463768116,41.2551373866,194.2173913043478,41.2551373866C197.92753623188403,41.2551373866,201.63768115942028,9.34099283713334,205.3478260869565,9.192966256600002C209.05797101449275,9.044939676066663,212.76811594202897,8.970926385799993,216.47826086956522,8.970926385799993C220.18840579710144,8.970926385799993,223.8985507246377,27.558848195399996,227.6086956521739,27.558848195399996C231.31884057971013,27.558848195399996,235.02898550724638,15.483880815466668,238.7391304347826,12.905085082400005C242.44927536231884,10.326289349333335,246.15942028985506,9.0368914828,249.8695652173913,9.0368914828C253.57971014492753,9.0368914828,257.28985507246375,18.290552436149998,261,27.544213389499998"></path></g><g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><g class="recharts-cartesian-axis-ticks"></g></g>
                                                <g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                                                 <g class="recharts-cartesian-axis-ticks">
                                                 </g>
                                                 
                                                 </g>
                                               
                                               </svg>
                                           </div>
                                        </div>
                                    </div>
                               </div>
                        </div>
                       </div>
                   </div>
                   <div className="widgets-box">
                     <div className="Learn">
                        <div className="Learn-container">
                            <div className="title">
                                <h4>Zapper Learn - Recent articles</h4>
                            </div>
                            <div className="form">
                                <div className="container">
                                    <a href="https://learn.zapper.fi/articles/what-is-gas">
                                        <div className="body">
                                            <div className="icon">⛽️</div>
                                            <div className="description">
                                                <h1>What is Gas?</h1>
                                                <p>5 min. read</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="container">
                                    <a href="https://learn.zapper.fi/articles/what-is-gas">
                                        <div className="body">
                                            <div className="icon">⛽️</div>
                                            <div className="description">
                                                <h1>What is Gas?</h1>
                                                <p>5 min. read</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="container">
                                    <a href="https://learn.zapper.fi/articles/what-is-gas">
                                        <div className="body">
                                            <div className="icon">⛽️</div>
                                            <div className="description">
                                                <h1>What is Gas?</h1>
                                                <p>5 min. read</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                     </div>
                    </div>
                    <div className="trend">
                        <div className="trend-title">
                            <h4>🔥 Pool trend by volume(24h)</h4>
                            <div className="trend-pagenation">
                               <button>l</button>
                               <div className="trend-pagenation-title">
                                   1/154
                               </div>
                               <button>r</button>
                            </div>
                            </div>
                        <div className="trend-box">
                            <div className="trend-box-form">
                                <div className="trend-box-form-container">
                                    <div className="trend-box-left">
                                       <img src="https://storage.googleapis.com/zapper-fi-assets/apps/sushiswap.png" />
                                       <div className="trend-box-description">
                                           <span className="title">SLP NRCH / ETH</span>
                                           <span className="subtitle">Sushiswap</span>
                                       </div>
                                    </div>
                                    <div className="trend-box-right">
                                      right
                                    </div>
                                </div>
                                    <div className="border"></div>
                            </div>
                            <div className="trend-box-form">
                                <div className="trend-box-form-container">
                                    <div className="trend-box-left">
                                       <img src="https://storage.googleapis.com/zapper-fi-assets/apps/sushiswap.png" />
                                       <div className="trend-box-description">
                                           <span className="title">SLP NRCH / ETH</span>
                                           <span className="subtitle">Sushiswap</span>
                                       </div>
                                    </div>
                                    <div className="trend-box-right">
                                      right
                                    </div>
                                </div>
                                    <div className="border"></div>
                            </div>
                            <div className="trend-box-form">
                                <div className="trend-box-form-container">
                                    <div className="trend-box-left">
                                       <img src="https://storage.googleapis.com/zapper-fi-assets/apps/sushiswap.png" />
                                       <div className="trend-box-description">
                                           <span className="title">SLP NRCH / ETH</span>
                                           <span className="subtitle">Sushiswap</span>
                                       </div>
                                    </div>
                                    <div className="trend-box-right">
                                      right
                                    </div>
                                </div>
                                    <div className="border"></div>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    )
}


export default Widgets;