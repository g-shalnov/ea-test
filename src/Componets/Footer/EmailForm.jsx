import React, { useState } from 'react';
import {useMediaQueries} from "../../utils/breakpoints";
import s from "./Footer.module.css";
import {ReactComponent as Arrow} from '../../img/arrow20.svg';
import {ReactComponent as ArrowSmall} from '../../img/arrow15.svg';
import {handleSubmit} from "../../utils/ajax";
import Popup from "../Popup/Popup";


const EmailForm = () => {
    const {isBigScreen, isTablet} = useMediaQueries();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const onHandleClose = () => {
        setIsOpen(!isOpen);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit(email, setMessage);
            setMessage('You have successfully subscribed to the email newsletter');
        onHandleClose(true);
    };

    let formClass = s.form;
    if (isBigScreen) {
        formClass += ` ${s.form_l}`;
    } else if (isTablet) {
        formClass += ` ${s.form_m}`;
    }

    return (
        <>
            { isOpen && <Popup isOpen={true} message={message} onClose={onHandleClose} /> }
            <form onSubmit={onSubmit} className={formClass}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email and get notified"
                />
                <button type="submit"> {isBigScreen ? <Arrow/> : <ArrowSmall/>}</button>
            </form>
        </>
    );
};

export default EmailForm;


