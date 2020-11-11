import './App.css';
import React, {Component} from 'react'

import { Route, withRouter } from 'react-router-dom'

import Header from './components/Header'
import WorkoutsContainer from './components/WorkoutsContainer'
import GoalsContainer from './components/GoalsContainer'
import CreateWorkout from './components/CreateWorkout';
import CreateGoal from './components/CreateGoal';
import Music from './components/Music';
import Home from './components/Home';
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import Profile from './components/Profile'
import { loginUser, signupUser, userProfile, verifyUser } from './services/api_helper';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      workouts: [
        {
          name: 'lift1',
          sets: 0,
          reps: 0,
          weight: 0
        }
      ],
      goals: [
        {
          title: '',
          description: '',
          // date: 12/12/2020,
          date: '',
          file: ''
        }
      ],
      currentUser: null,
      profile: null
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

  handleSignup = async (event, signupData) => {
    event.preventDefault();
    const currentUser = await signupUser(signupData);
    // console.log(currentUser);
    this.setState({
      currentUser: currentUser
    })
    this.props.history.push('/');
  }

  handleLogin = async (event, loginData) => {
    event.preventDefault();
    const currentUser = await loginUser(loginData);
    console.log(currentUser)
    this.setState({
      currentUser: currentUser
    })
    this.props.history.push('/profile');
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if(currentUser){
      this.setState({
        currentUser: currentUser
      })
      this.props.history.push('/')
    }
  }

  renderProfile = async (event, userData) => {
    event.preventDefault()
    const profile = await userProfile(userData);
    console.log(profile);
    this.setState({
      profile: profile.data
    })
  }

  componentDidMount() {
    this.handleVerify();
  }

  handleLogout = () => {
    localStorage.removeItem('authToken');
    this.setState({
      currentUser: null
    })
    this.props.history.push('/login')
  }

 

  render() {
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser}
          handleLogout = {this.handleLogout}/>
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

          <Route path = '/signup' render = { (props) => {
            return <SignupForm handleSignup = {this.handleSignup}
            currentUser = {this.state.currentUser}/>
          }}    />

          <Route path = '/login' render = { (props) => {
            return <LoginForm handleLogin = {this.handleLogin} 
            currentUser = {this.state.currentUser}/>
          }} />

          <Route path = '/profile' render = { (props) => {
            return <Profile profile = {this.state.profile}
            currentUser = {this.state.currentUser} 
            renderProfile = {this.renderProfile}/>
          }} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
