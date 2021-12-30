import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import "../style/Modal.css";
import exchangeList from '../../json/exchange-items.json';

const Modal = ({
    className,
    onClose,
    maskClosable,
    closable,
    visible,
    children,
    props
}) => {

    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e);
        }
    }

    const close = (e) => {
        if (onClose) {
            onClose(e)
        }
    }

    const [item, setItem] = useState(exchangeList);
    

    return (
        <>
        <div className="exchange-modal" visible={visible} props={props}>
            <div className='modal-container'>
            <div className="modal-content">
                <div className="title">
                    <h1>
                    Select & token
                    </h1>
                    {onClose && <p onClick={close}><FaSearch/></p>}

                </div>
                <div className="body">
                    <div className="table_wrapper">
                        <div className="table_options">
                            <div className="table_filter">
                                <div className='flex'>
                                    <FaSearch className="icon"/>
                                    
                                </div>
                                <input placeholder='Filter by token' value=""/>
                            </div>
                            <div className="table_options_right"></div>
                        </div>
                        <table>
                        <tbody role="rowgroup">
                            <div className="container">
                            {exchangeList.map(item => (
                                <>
                                   <div className='scroll-container'>
                                      <tr role="row">
                                           <td role="cell">
                                               <div className="flex">
                                                   <div className="token-group">
                                                       <img src={item.img}/>
                                                   </div>
                                                   <h1>{item.title}</h1>
                                               </div>
                                           </td>
                                           <td role="cell"></td>
                                      </tr>
                                </div> 
                                </>
                            ))}
                           </div>
                         </tbody>
                          
                        </table>
                    </div>
                </div>
           </div>
           </div>
        </div>
        </>
    )
}

export default Modal;