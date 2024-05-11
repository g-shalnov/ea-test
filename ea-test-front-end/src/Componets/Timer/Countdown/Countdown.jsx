import React, {useEffect, useState} from 'react';
import s from './Countdown.module.css';
import Wave from "./Wave";
import {useMediaQueries} from "../../../utils/breakpoints";
import WaveBig from "./WaveBig";

const Countdown = () => {

    const {isBigScreen, isTablet} = useMediaQueries();
    let classCountdown = s.countdown;

    if (isBigScreen) {
        classCountdown += ` ${s.countdown_l}`;
    } else if (isTablet) {
        classCountdown += ` ${s.countdown_m}`;
    }

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    useEffect(() => {
        const countdownDate = new Date('2024-07-24T00:00:00').getTime();
        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = countdownDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setCountdown({days, hours, minutes, seconds});
        };
        const countdownInterval = setInterval(updateCountdown, 1000);
        return () => clearInterval(countdownInterval);
    }, []);
    const timeUnits = [
        {value: countdown.days, label: 'DD', tag: 'days'},
        {value: countdown.hours, label: 'HH', tag: 'hours'},
        {value: countdown.minutes, label: 'MM', tag: 'minutes'},
        {value: countdown.seconds, label: 'SS', tag: 'seconds'}
    ];

    return (
        <div className={classCountdown}>
            {timeUnits.map((unit, index) => (
                <>
                    <div className={s.unit} key={index}>
                        <span>{unit.value}</span>
                        {isBigScreen ? <WaveBig text={unit.tag}/> : <Wave text={unit.label}/>}
                    </div>
                    {index !== timeUnits.length - 1 ? <div className={s.colon} key={`separator-${index}`}><span>:</span></div> : null}
                </>
            ))}
        </div>
    );
};

export default Countdown;



