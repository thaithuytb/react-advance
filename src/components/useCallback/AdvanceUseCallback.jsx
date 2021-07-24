import React, { useState, useCallback } from 'react';
import ChildAdvanceUseCallback from './ChildAdvanceUseCallback';

const sum = (x) => {
    console.log("run...")
    return x+x;
}

const AdvanceUseCallback = () => {
    const [ count, setCount ] = useState(0);
    const expensiveFunction = useCallback((x) => {
       return sum(x)
    }, [])


    return (
        <div>
        <p>{count}</p>
        <button onClick={ () => setCount(count + 1)}>set Count</button>
        <ChildAdvanceUseCallback test={expensiveFunction} />
    </div>
    )
}
;
export default AdvanceUseCallback;
