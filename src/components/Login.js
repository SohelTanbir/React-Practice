import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        alert('Submited you record, Thanks');
    }
    render() {
        return (
            <div className="login">
                <h3>Login now</h3>
                <form onSubmit={(e)=> this.handleSubmit(e)}>
                    <input type="text" placeholder='Enter your name ' />
                    <button type='submit'>submit</button>
                </form>
            </div>
        )
    }
}

export default Login;