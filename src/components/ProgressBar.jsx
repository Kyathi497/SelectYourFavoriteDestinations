import { useState, useEffect } from "react";

export default function ProgressBar({Timer}){
    const [remainingTime, setRemainingTime] = useState(Timer);

    useEffect(() => {
        const timeOut = setInterval(() =>{
          setRemainingTime((prevTime) => prevTime-10)
        }, 10);
    
        return() => {
          clearInterval(timeOut);
        }
      }, [])
    
    return(
        <progress value={remainingTime} max={Timer}/>
    );
}