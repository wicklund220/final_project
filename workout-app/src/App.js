import './App.css';
import React, {Component} from 'react'

import { Route, withRouter } from 'react-router-dom'

import Header from './components/Header'
import WorkoutsContainer from './components/WorkoutsContainer'
import GoalsContainer from './components/GoalsContainer'
import CreateWorkout from './components/CreateWorkout';
import CreateGoal from './components/CreateGoal';
import Music from './components/Music';
import Home from './components/Home'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      workouts: [
        {
          title: 'workout1',
          lift: {
            name: 'lift1',
            sets: 0,
            reps: 0,
            weight: 0
          }
        }
      ],
      goals: [
        {
          title: ''
        }
      ]
    }
  }

  submitWorkout = (event, info) => {
    event.preventDefault();
    const workouts = this.state.workouts;
    workouts.push(info);
    this.setState({
      workouts: workouts
    })
    this.props.history.push('/workouts')
  }

  submitGoal = (event, info) => {
    event.preventDefault();
    const goals = this.state.goals;
    goals.push(info);
    this.setState({
      goals: goals
    })
    this.props.history.push('/goals')
  }


  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path = '/' render = { (props) => {
            return <Home />
          }} />
          <Route path='/workouts' render = { (props) => {
            return <WorkoutsContainer
              workouts = {this.state.workouts}

            />
          }} />

          <Route path = '/workouts/create' render = { (props) => {
            return <CreateWorkout onSubmit = {this.submitWorkout}/>
          }} />
          
          <Route path = '/goals' render = { (props) => {
            return <GoalsContainer 
              goals = {this.state.goals}
            />
          }} />

          <Route path = '/goals/create' render = { (props) => {
            return <CreateGoal onSubmit = {this.submitGoal}/>
          }} />

          <Route path = '/music' render = { (props) => {
            return <Music />
          }} />        
        </main>
      </div>
    );
  }
}

export default withRouter(App);
