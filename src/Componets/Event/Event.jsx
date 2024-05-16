import React from "react";
import s from './Event.module.css';
import {ReactComponent as Arrow} from '../../img/arrow20.svg';
import {useMediaQueries} from "../../utils/breakpoints";


function Event() {

    const {isBigScreen, isTablet} = useMediaQueries();

    let eventClass = s.event;

    if (isBigScreen) {
        eventClass += ` ${s.event_l}`;
    } else if (isTablet) {
        eventClass += ` ${s.event_m}`;
    }

    return (
        <div className={eventClass}>
            <p>Check our event page when you wait:</p>
            <button onClick={() => window.location.href = 'https://www.google.com'}>
                Go to the event
                <Arrow/>
            </button>
        </div>

    );
}

export default Event;

