import axios from 'axios'

export const test = () => dispatch => {
    dispatch({type: 'Something'})
    axios.get(``)
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err.response))
}