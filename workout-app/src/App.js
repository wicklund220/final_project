import './App.css';
import React, {Component} from 'react'

import { Route, withRouter } from 'react-router-dom'

import Header from './components/Header'
import WorkoutsContainer from './components/WorkoutsContainer'
import Goals from './components/Goals'
import CreateWorkout from './components/CreateWorkout';
import CreateGoal from './components/CreateGoal';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      workouts: [
        {
          title: ''
        }
      ]
    }
  }

  onSubmit = (event, info) => {
    event.preventDefault();
    const workouts = this.state.workouts;
    workouts.push(info);
    this.setState({
      workouts: workouts
    })
    this.props.history.push('/workouts')
  }


  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route path='/workouts' render = { (props) => {
            return <WorkoutsContainer
              workouts = {this.state.workouts}

            />
          }} />

          <Route path = '/workouts/create' render = { (props) => {
            return <CreateWorkout onSubmit = {this.onSubmit}/>
          }} />
          
          <Route path = '/goals' render = { (props) => {
            return <Goals />
          }} />

          <Route paht = '/goals/create' render = { (props) => {
            return <CreateGoal />
          }} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
