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
         
        </div>
        </>
    )
}

export default Modal;