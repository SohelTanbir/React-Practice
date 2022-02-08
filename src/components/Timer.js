import React from 'react';

const Timer = () => {
    return (
        <div>
            <h3>Clock</h3>
            {
                new Date().toLocaleTimeString()
            }
        </div>
    );
};
export default Timer;