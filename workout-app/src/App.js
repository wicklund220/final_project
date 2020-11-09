import './App.css';
import React, {Component} from 'react'

import { Route, Link, withRouter } from 'react-router-dom'

import Header from './components/Header'
import Workouts from './components/Workouts'
import Goals from './components/Goals'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }



  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route path='/workouts' render = { (props) => {
            return <Workouts />
          }} />
          
          <Route path = '/goals' render = { (props) => {
            return <Goals />
          }} />
        </main>
      </div>
    );
  }
}

export default App;
