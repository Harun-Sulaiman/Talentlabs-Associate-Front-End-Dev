import React, {useState, useEffect} from "react";
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
export default Clock;