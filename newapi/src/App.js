
import './App.css';
import React from 'react';

export  default class App extends React.Component{
  constructor (){
    super();
    this.state= {
      data:false
    }
  }
  componentDidMount()
  {
    let url="http://localhost:18841/api/Employee";
    fetch(url,{
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
      })
    })
    
  }
  render(){
    return (
      <div className="App">
      
        <h1>Hello from api</h1>
      </div>
    )
  }
}


