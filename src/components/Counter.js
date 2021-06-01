import React, {useCallback, useState} from 'react';

const Counter = () => {

    const [value, setValue] = useState(10)

    function add () {
        setValue(value + 1)
    };

    const plus = useCallback(() => {
        setValue(value + 1)
    })

    const minus = useCallback(() => {
        setValue(value - 1)
    })


    return (
        <div>
            <h1>COUNT {value}</h1>
            <button onClick={add}>++</button>
            <button onClick={minus}>--</button>
        </div>
    );
};

export default Counter;