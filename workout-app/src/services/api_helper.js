import axios from 'axios';
// const api = axios.create({
//     baseURL: 'https://shielded-ridge-00746.herokuapp.com'
// })

const api = axios.create({
    baseURL: 'http://localhost:3001'
})

// === Auth ===

export const signupUser = async (signupData) => {
    const response = await api.post('/auth/signup', signupData);
    localStorage.setItem('authToken', response.data.token)
    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
    console.log(response);
    return response.data.user
}

export const loginUser = async (loginData) => {
    const response = await api.post('/auth/login', loginData);
    localStorage.setItem('authToken', response.data.token);
    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
    return response.data.user;
}

export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');
    if(token){
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const response = await api.get('/auth/verify');
        return response.data
    }
    return false
}

// === User ===

//localhost:3001/profile/:userId
export const userProfile = async(userData) => {
    const response = await api.get('/profile', userData);
    console.log(response);
    return response.data
}

// === Workout ===

export const allWorkouts = async (id) => {
    const response = await api.get(`/workout/single/${id}`);
    console.log(response)
    return response.data
}

export const postWorkout = async (workoutData) => {
    const response = await api.post(`/workout/1`, workoutData);
    console.log(response);
    return response.data
}

export const destroyWorkout = async (id) => {
    await api.delete(`/workout/single/${id}`)
}

// === Goal ===

export const allGoals = async () => {
    const response = await api.get('/goal/1');
    return response.data
}