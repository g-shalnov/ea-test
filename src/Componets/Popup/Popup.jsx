import React from "react";
import s from './Popup.module.css';


const Popup = (props) => {

    return (
        <div className={s.popup}>
            <div className={s.message}>
                <h1>SUCCESS</h1>
                <span>{props.message}</span>
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>
    );
}

export default Popup;
