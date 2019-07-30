// import React, { Component } from 'react'
// import { directive } from '@babel/types';
import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);

        this.initialState = {
            name: '',
            username: '',
            password: ''
        }
      this.state = this.initialState;
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      


        }

        // To make changes in textbox we need to call event..

        handleChange(event) {
            const name = event.target.name;          
            const value = event.target.value;
            this.setState({
                [name]: value   // Computed property syntax: textbox text will gonna set into  the name
            })
        }

        handleSubmit(event) {
            event.preventDefault();
            //console.log(this.state);
            this.props.onSubmit(this.state);
            this.setState(this.initialState);  // after submission of form, form will again come into its blank state.
            

        }

    render() {
        return (
           
           
          <form onSubmit={this.handleSubmit}>
              <div>
              <h1 className='h1'>Login Form in React</h1>
                <label>Name </label>
                <input type="text" size='30' name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              
              <div>
                <label>Username </label>
                <input type="text" size='30' name="username" value={this.state.username} onChange={this.handleChange} />
              </div>
              <div>
                <label>Password </label>
                <input type="password" size='30' name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <button type="submit">Login</button>
          </form>
         
        )
    }
}
export default Form