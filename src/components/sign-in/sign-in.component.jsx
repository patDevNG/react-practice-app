// import { Component } from "react"
import React, {Component} from 'react';
import './sign-in.styles.scss';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.setState({email:'',password:''})
    }

    handleChange =event =>{
        const {value,name} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input type="email" onChange={this.handleChange} required name='email' value={this.state.email}/>
                    <label>Email</label>
                    <input type="password" onChange={this.handleChange} required name='password' value={this.state.password}/>
                    <label>Password</label>

                    <input type="submit" value='Submit Form'/>
                </form>
            </div>
        )

        
    }
}

export default SignIn