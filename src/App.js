import React, { Component } from 'react';
import './App.css';
import './jquery-3.4.1.min.map';
import Form from './Form';

class App extends Component {

    state = {
      fields: {}
    }
onSubmit = (fields) => {
  this.setState({fields : fields})
}


  render() {
    return(
     
      <div className="App">
        <Form onSubmit={this.onSubmit}/>
        <table center border="1" cellPadding='10' cellSpacing='5' className="table">
          <tr><th><h2>Name</h2></th>  <th><h2>Username</h2></th>  <th><h2>Password</h2></th> </tr>
        <tr><td><h3>{JSON.stringify(this.state.fields.name)}</h3></td>
            <td><h3>{this.state.fields.username}</h3></td>
            <td><h3>{this.state.fields.password}</h3></td></tr>
        </table>
        </div>
    );
  }
}

export default App;
