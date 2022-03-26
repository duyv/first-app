import { useState,useEffect } from "react";

const LifeCycleHooks = () => {
    const [time,setTime] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setTime((prevTime) => prevTime + 2)
        },1000)
    })
    return(
        <div>
            <p>Count time: {time}</p>
        </div>
    )
}
export default LifeCycleHooks