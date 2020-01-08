import axios from 'axios'

export const test = () => dispatch => {
    dispatch({type: 'Something'})
    axios.get(``)
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err.response))
}

export {
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    registerUser,
    loginUser
} from './authActions'

export {
    INITIALIZE_START,
    INITIALIZE_SUCCESS,
    INITIALIZE_FAIL,
    MOVE_START,
    MOVE_SUCCESS,
    MOVE_FAIL,
    SAY_START,
    SAY_SUCCESS,
    SAY_FAIL,
    initialize,
    move
} from './gameActions'