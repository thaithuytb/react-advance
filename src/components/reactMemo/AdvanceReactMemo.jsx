import React, { useState } from 'react';
import ChildAdvanceReactMemo from './ChildAdvanceReactMemo';
// example about reactmemo
// how to fix? c1.
export const AdvanceReactMemo = () => {
    const [ count, setCount ] = useState(0);
    return (
        <div>
            <p>{ count }</p>
            <button onClick={() => setCount( prev => prev +1)}>Set count</button>
            <ChildAdvanceReactMemo name="abc" />
        </div>
    )
}
// how to fix? c2.
const ChangeReactMemo = ({children}) => {
    const [ count, setCount ] = useState(0);

    return (<div>
        <p>{ count }</p>
        <button onClick={() => setCount( prev => prev +1)}>Set count</button>
        {children}
    </div>);
}

export const AdvanceReactMemoC2 = () => {
    return (
        <ChangeReactMemo>
            <ChildAdvanceReactMemo name="abc" />
        </ChangeReactMemo>
    )
}

// how to fix? c3. (when parent component no cover child component )
const ChangeReactMemoC3 = () => {
    const [ count, setCount ] = useState(0);

    return (<div>
        <p>{ count }</p>
        <button onClick={() => setCount( prev => prev +1)}>Set count</button>
    </div>);
}
export const AdvanceReactMemoC3 = () => {
    return (
        <>
            <ChangeReactMemoC3 />
            <ChildAdvanceReactMemo name="abc" />
        </>
    )
}


