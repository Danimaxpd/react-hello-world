import React, { useState, Fragment } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    return (
        <Fragment>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
             </button>
        </Fragment>
    );
}

export default Count;