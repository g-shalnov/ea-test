import React from 'react';
import s from './Footer.module.css';
import {useMediaQueries} from "../../utils/breakpoints";
import EmailForm from "./EmailForm";


const Footer = () => {

    const {isBigScreen, isTablet} = useMediaQueries();
    let footerClass = s.footer;

    if (isBigScreen) {
        footerClass += ` ${s.footer_l}`;
    } else if (isTablet) {
        footerClass += ` ${s.footer_m}`;
    }

    return (
        <div className={footerClass}>
            <EmailForm />
        </div>
    );
}

export default Footer;





