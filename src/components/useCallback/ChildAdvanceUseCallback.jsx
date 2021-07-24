import React from 'react';

const ChildAdvanceUseCallback = ({test}) => {
    console.log(test(5));
    return (
        <div>
           child 
        </div>
    )
}

export default React.memo(ChildAdvanceUseCallback);
