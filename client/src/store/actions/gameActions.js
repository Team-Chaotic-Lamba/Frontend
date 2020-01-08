import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const INITIALIZE_START = "INITIALIZE_START"
export const INITIALIZE_SUCCESS = "INITIALIZE_SUCCESS"
export const INITIALIZE_FAIL = "INITIALIZE_FAIL"
export const MOVE_START = "MOVE_START"
export const MOVE_SUCCESS = "MOVE_SUCCESS"
export const MOVE_FAIL = "MOVE_FAIL"
export const SAY_START = "SAY_START"
export const SAY_SUCCESS = "SAY_SUCCESS"
export const SAY_FAIL = "SAY_FAIL"

// const baseURL = "https://teamchaotic.herokuapp.com/api/adv"
const baseURL = "https://lambda-mud-test.herokuapp.com/api/adv"

export const initialize = _ => dispatch =>
{
    dispatch({ type: INITIALIZE_START })

    axiosWithAuth().get(`${baseURL}/init/`)
    .then(res =>
    {
        console.log("res from initialize:", res)
        dispatch({ type: INITIALIZE_SUCCESS, payload: res })
    })
    .catch(err =>
    {
        console.log("err from initialize:", err)
        dispatch({ type: INITIALIZE_FAIL, payload: err })
    })
}

export const move = direction => dispatch =>
{
    dispatch({ type: MOVE_START })

    axiosWithAuth().post(`${baseURL}/move/`, {"direction": `${direction}`})
    .then(res =>
    {
        console.log("res from move:", res)
        dispatch({ type: MOVE_SUCCESS, payload: res })
    })
    .catch(err =>
    {
        console.log("err from move:", err)
        dispatch({ type: MOVE_FAIL, payload: err })
    })
}
