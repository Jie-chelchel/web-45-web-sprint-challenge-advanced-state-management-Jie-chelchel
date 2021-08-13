import axios from "axios";

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchSuccess = (smurfs) => {
  return {
    type: FETCH_SUCCESS,
    payload: smurfs,
  };
};

export const fetchFailure = (err) => {
  return {
    type: FETCH_FAILURE,
    payload: err,
  };
};

export const addSmurf = (name, position, nickname) => {
  return {
    type: ADD_SMURF,
    payload: { name: name, position: position, nickname: nickname },
  };
};

export const setError = (err) => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};

const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch(fetchRequest());

    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => dispatch(fetchSuccess(res.data)))
      .catch((err) => dispatch(fetchFailure(err.message)));
  };
};

export default fetchSmurfs;
