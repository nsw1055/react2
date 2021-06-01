import React, {useEffect, useState} from 'react';
import axios from "axios";

const TimeDisplay = () => {

    const [time, setTime] = useState('')
    const [flag, setFlag] = useState(false)

    const getTime = async () => {
        const res = await axios.get("http://localhost:8080/todo/now")
        console.log(res)
        setTime(res.data)
    }

    useEffect(() =>{
        getTime()
    },[flag])


    return (
        <div>
            <h1>{time}</h1>
            <button onClick={() => {setFlag(!flag)}}>CLICK</button>
        </div>
    );
};

export default TimeDisplay;