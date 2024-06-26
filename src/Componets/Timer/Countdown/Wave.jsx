import React from 'react';

const Wave = (props) => {
    return (
        <svg width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40C3.2378 31.528 6.98908 30.7826 14.1065 30.7826C21.224 30.7826 29.5823 30.5093 41.15 30.7826C53.602 31.0808 63.2155 21.2919 64 1.01717e-06C60.7622 8.47205 56.5545 10.0124 49.437 10.0124C42.3196 10.0124 38.0406 10.2857 26.4729 10.0124C14.0209 9.7143 4.30755 19.2547 0 40Z" fill="#DF2224"/>
            <text x="50%" y="50%" dy=".35em" textAnchor="middle" fill="white" fontSize="12">
                {props.text}
            </text>
        </svg>
    );
}

export default Wave;
