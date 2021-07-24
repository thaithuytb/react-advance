import React, { useMemo, useState } from 'react';
const testUseMemo = (x) => {
    console.log("run...")
    return x*x;
}

const AdvanceUseMemo = () => {
     
    const [ count, setCount ] = useState(0);
    /**
     * When advanceUseMemo re-render function testUseMemo re-running
     * if funtion testUseMemo is big function, app run delay....
     * how to fix?.
     * use useMemo to remember result of function...
     * 
     * note: shouldn't use useMemo quite much because memory consuming..
     */

    const x = useMemo(() => {
        return testUseMemo(10);
    }, []);
    return (
        <div>
            <p>{count}</p>
            <button onClick={ () => setCount(count + 1)}>set Count</button>
            <p>{x}</p>
        </div>
    )
}

export default AdvanceUseMemo;
