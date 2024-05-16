import React from "react";
import s from './Timer.module.css';
import {useMediaQueries} from "../../utils/breakpoints";
import Countdown from "./Countdown/Countdown";

function Timer() {

    const {isBigScreen, isTablet} = useMediaQueries();

    let timerClass = s.timer;

    if (isBigScreen) {
        timerClass += ` ${s.timer_l}`;
    } else if (isTablet) {
        timerClass += ` ${s.timer_m}`;
    }

    return (
        <div className={timerClass}>
            <h1>Under Construction</h1>
            <p>We're making lots of improvements and will be back soon</p>
            <Countdown/>
        </div>

    );
}

export default Timer;
