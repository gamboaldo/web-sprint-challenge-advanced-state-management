import axios from "axios";

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";
export const SET_SERVER_ERROR = "SET_SERVER_ERROR";
export const SET_FORM_ERROR = "SET_FORM_ERROR";

export const fetchSmurfs = () => (dispatch) => {
  dispatch(fetchSmurfLoading());

  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      //   console.log(res.data);
      dispatch(fetchSmurfSuccess(res.data));
    })
    .catch((err) => {
      dispatch(err.message);
    });
};

export const addNewSmurf = (smurf) => (dispatch) => {
  axios
    .get("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      dispatch(addSmurf(smurf));
    })
    .catch((err) => {
      dispatch(serverError(err));
    });
};

const fetchSmurfLoading = () => {
  return {
    type: FETCH_LOADING,
  };
};

const fetchSmurfSuccess = (smurfs) => {
  return {
    type: FETCH_SUCCESS,
    payload: smurfs,
  };
};

const addSmurf = (smurf) => {
  return {
    type: ADD_SMURF,
    payload: smurf,
  };
};
const serverError = (error) => {
  return {
    type: SET_SERVER_ERROR,
    payload: error,
  };
};

export const setFormError = (error) => {
  return {
    type: SET_FORM_ERROR,
    payload: error,
  };
};
