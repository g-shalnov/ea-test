import React from "react";
import s from './Logo.module.css';
import {useMediaQueries} from "../../utils/breakpoints";
import {ReactComponent as LogoSmall} from '../../img/LogoSmall.svg';
import {ReactComponent as LogoBig} from '../../img/LogoBig.svg';
import {ReactComponent as FrameRS} from '../../img/FrameRS.svg';
import {ReactComponent as FrameRM} from '../../img/FrameRM.svg';
import {ReactComponent as FrameLS} from '../../img/FrameLS.svg';
import {ReactComponent as FrameLM} from '../../img/FrameLM.svg';
import {ReactComponent as FrameLL} from '../../img/FrameLL.svg';


function Logo() {

    const {isBigScreen, isTablet} = useMediaQueries();
    let classLogo = s.logo;

    if (isBigScreen) {
        classLogo += ` ${s.logo_l}`;
    } else if (isTablet) {
        classLogo += ` ${s.logo_m}`;
    }

    return (
        <div>
            <div className={s.leftFrame}>
                {isBigScreen ? <FrameLL/> : isTablet ? <FrameLM/> : <FrameLS/>}
            </div>

            <div className={s.rightFrame}>
                {isBigScreen || isTablet ? <FrameRM/> : <FrameRS/>}
            </div>

            <div className={classLogo}>
                <div className={s.link} onClick={() => window.location.href = window.location.href}>
                   {isBigScreen || isTablet ? <LogoBig/> : <LogoSmall/>}
                </div>

            </div>
        </div>
    );
}

export default Logo;



