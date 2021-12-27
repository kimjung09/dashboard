import React,{useState} from 'react';
import "../style/Rewards.css"
import rewardList from '../../json/rewards-items.json';
import {ImHammer} from 'react-icons/im'

const RewardsBody = () => {
   const [item, setItem] = useState(rewardList);

    return (
        <div className="rewards">
            <div className="rewards_filters">
                <div className="rewards_filters_left">
                    <h1>Filter by season</h1>
                    <div className="rewrads_filters_left_flex">
                        <button>All</button>
                        <button>Season 2</button>
                        <button>Season 1</button>

                    </div>
                </div>
                <div className="rewards_filters_right">
                      <h1>Filter by status</h1>
                    <div className="rewrads_filters_left_flex">
                        <button>All</button>
                        <button>Season 2</button>
                        <button>Season 1</button>
                    </div>
                </div>
            </div>
            <div className="rewards_items">
                {rewardList.map(item => (
                  <>
                    <div className="rewards_items_pointer">
                    <div className="rewards_items_card">
                        <div className="actions">
                            <div className="block"></div>
                            <div className="column">
                                <div className="block">
                                    <ImHammer className="button" />
                                </div>
                                <div className="count">x0</div>
                            </div>
                        </div>
                        <div className="media">
                          <img src={item.images} />
                        </div>
                        <div className="block"></div>
                    </div>
                    <div className="rewards_items_body">
                        <div className="flex">
                           <p>GEN 2 - 1</p>
                           <p>Supply: 2535</p>
                        </div>
                        <p>Zaphrodite is the daughter of Zapeus, and therefore heir to great power in the Zapperverse.</p>
                    </div>
                </div>
                    </>
                ))}
       
            </div>
        </div>
             
    )
}

export default RewardsBody