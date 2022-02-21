import React, { Component } from 'react';  
import MyForm from './MyForm';
import CounterExample from './Counter';
import Timer from './Timer';
class App extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            companyName: ''  
        };  
    }  
    changeText(event) {  
        this.setState({  
            companyName: event.target.value  
        });  
    }  
    render() {  
        return (  
          <form>
            <div> 
              <MyForm/> 
              <CounterExample/>
              <Timer/>
                <h2> Event Example</h2>  
                <label htmlFor="name">Enter company name: </label>  
                <input type="text" id="companyName" onChange={this.changeText.bind(this)}/>  
                <h4>You entered: { this.state.companyName }</h4>  
            </div>  
            </form>
            
        );  
    }  
}  
export default App;  