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
import Footer from './components/Footer';
import EditProfile from './components/EditProfile'
import { loginUser, signupUser, userProfile, verifyUser, allWorkouts, postWorkout } from './services/api_helper';
import Email from './components/Email'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      workouts: [
        {
          name: 'Squat',
          sets: 4,
          reps: 10,
          weight: 315
        }
      ],
      goals: [
        {
          title: 'Lose 5 pounds',
          description: 'Run 3 miles, 3 times per week',
          date: 'January 2021',
          file: ''
        }
      ],
      currentUser: [],
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

  removeGoal = (goalId) => {
    const userGoals = this.state.goals;
    const newGoals1 = userGoals.slice(0, goalId)
    const newGoals2 = userGoals.slice(goalId + 1, userGoals.length)
    const both = newGoals1.concat(newGoals2)
    this.setState({
      goals: both
    })
  }

  removeWorkout = (workoutId) => {
    const userWorkouts = this.state.workouts;
    const newWorkouts1 = userWorkouts.slice(0, workoutId);
    const newWorkouts2 = userWorkouts.slice(workoutId + 1, userWorkouts.length);
    const both = newWorkouts1.concat(newWorkouts2)
    this.setState({
        workouts: both
    })
  }

  editUser = (event, info) => {
    event.preventDefault();
    let currentUser = this.state.currentUser;
    currentUser = info
    // currentUser.push(info);
    this.setState({
      currentUser: currentUser
    })
    this.props.history.push('/profile')
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
    this.setState({
      currentUser: currentUser
    })
    console.log(currentUser)
    this.getAllWorkouts(currentUser.id);
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
    this.getAllWorkouts();
  }

  handleLogout = () => {
    localStorage.removeItem('authToken');
    this.setState({
      currentUser: null
    })
    this.props.history.push('/login')
  }

 getAllWorkouts = async (id) => {
  //  console.log('testing workouts')
   const workouts = await allWorkouts(id);
   console.log(workouts)
   this.setState({
     workouts: workouts
   })
 }

 createWorkout = async(event, workoutData) => {
  event.preventDefault();
  const newWorkout = await postWorkout(workoutData);
  const workouts = this.state.workouts;
  const newWorkouts = [...workouts, newWorkout]
  this.setState({
      workouts: newWorkouts
  })
  this.props.history.push('/workout');
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
          <Route exact path='/workout' render = { (props) => {
            return <WorkoutsContainer
              workouts = {this.state.workouts}
              {...props}
              removeWorkout = {this.removeWorkout}
            />
          }} />

          {/* <Route path = '/workouts/create' render = { (props) => {
            return <CreateWorkout onSubmit = {this.submitWorkout}/>
          }} /> */}

          <Route exact path = '/workout/create' render = { (props) => {
            return <CreateWorkout createWorkout = {this.createWorkout} 
            submitWorkout = {this.submitWorkout}
            />
          }} />
          
          <Route exact path = '/goals' render = { (props) => {
            return <GoalsContainer 
              goals = {this.state.goals}
              removeGoal = {this.removeGoal}
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

          <Route exact path = '/profile' render = { (props) => {
            return <Profile profile = {this.state.profile}
            currentUser = {this.state.currentUser} 
            renderProfile = {this.renderProfile}/>
          }} />

          <Route path ='/profile/edit' render = { (props) => {
            return <EditProfile editUser = {this.editUser} 
            currentUser = {this.state.currentUser}/>
          }} />

          <Route path ='/contact' render = { (props) => {
            return <Email />
          }} />
        </main>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
