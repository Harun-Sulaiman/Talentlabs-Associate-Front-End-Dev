import React, { useState, useEffect } from 'react';

function ClockControl() {
    const [isClockOn, setClockOn] = useState(false);
    const handleClockOnClick = () => {
        setClockOn(true);
    };
    const handleClockOffClick = () => {
        setClockOn(false);
    };

    let button;
    if (isClockOn) {
        button = <ClockOff onClick={handleClockOffClick} />
    } else {
        button = <ClockOn onClick={handleClockOnClick} />
    }

    return (
        <div>
            {button}
            {isClockOn && <Clock />}
        </div>
    );
}

function ClockOn(props) {
    return <button onClick={props.onClick}>Clock On</button> 
}

function ClockOff(props) {
    return <button onClick={props.onClick}>Clock Off</button>
}

function Clock () {
    const [time,setTime] = useState (new Date().toString())
        
    useEffect(() => {
        console.log("components updating");
        const interval = setInterval(showDate, 1000);

        return () => {
            console.log("cleanup of interval")
            clearInterval(interval);
        };
    }, [time]);

    function showDate() {    
        setTime(new Date().toString());
    }
    
    return <div>{time}</div>;
}

export default ClockControl;
