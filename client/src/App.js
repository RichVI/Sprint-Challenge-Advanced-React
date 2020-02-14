import React, { Component } from 'react';
import axios from 'axios';
import { PlayerCard } from './components/PlayerCard';
import './App.css';

class App extends Component{
    state = ({
      data: []
    });

  componentDidMount(){
    axios
    .get('http://localhost:5000/api/players')
    .then( res =>{
        console.log(res);
        this.setState({
          data: res.data
        })
    })
    .catch(err => console.log("data not retrieved, error", err))
  }

  render(){
    return(
      <div className="container" >
        <h1>Player Card</h1>
       {this.state.data.map(data => {
         return(
        <div data-testid="axiosData" className="cards" key={data.id}> 
          <PlayerCard 
            name={data.name}
            country={data.country}
            searches={data.searches}
          />
        </div>
       )})}
    </div>
    )
  }
}

export { App };
