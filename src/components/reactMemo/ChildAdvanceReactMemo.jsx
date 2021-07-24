import React from 'react';
/**
 * When component advanceReactMemo re-render, childAdvancereactMemo also re-reder
 * How to fix?
 * 
 * c1) use ReactMemo 
 * benifit: performance
 * note: memory consuming
 * 
 * c2, c3) use { children } or use child component
 * 
 */
const ChildAdvanceReactMemo = () => {
    console.log("reactMemo re-render");
    return (
        <div>
            <p>This is childAdvanceReactMemo component</p>
        </div>
    )
}

export default React.memo(ChildAdvanceReactMemo, (prevProps, nextProps) => {
    /**
     * function custom....
     * ChildAdvanceReactmemo re-render when this function return false
     */
    return prevProps.name === nextProps.name;
});
