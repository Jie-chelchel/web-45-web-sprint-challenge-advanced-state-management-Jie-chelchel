import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  ADD_SMURF,
  SET_ERROR,
} from "../actions";

export const initialState = {
  isLoading: false,
  smurfs: [
    // {
    //   id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    //   name: "Poppa Smurf",
    //   position: "Village Leader",
    //   nickname: "Pops",
    //   description:
    //     "Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.",
    // },
  ],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST: {
      return { ...state, isLoading: true };
    }
    case FETCH_SUCCESS: {
      return { isLoading: false, smurfs: action.payload, error: "" };
    }
    case FETCH_FAILURE: {
      return { isLoading: false, smurfs: action.payload, error: "" };
    }
    case ADD_SMURF: {
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
