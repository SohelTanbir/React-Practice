import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }
    componentDidMount(){
        this.timerId = setInterval(()=>this.ticky(), 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    ticky(){
        this.setState({
            date: new Date()
        })
    }
    render(){
        return(
            <div>
                <h3>Digital Clock</h3>
                <h4>it's now {this.state.date.toLocaleTimeString()}</h4>
            </div>
        )
    }
}

export default Clock;