import React from 'react';


const EventHandle  = ()=>{
    const myEvent = ()=>{
        alert("clicked")
    }
    return(
        <div>
            <h4>Event handling</h4>
            <buttion onClick={myEvent}>Click me</buttion>
        </div>
    )
}

export default EventHandle;