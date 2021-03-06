import React, { useState } from "react";
import { addSmurf, setError } from "../actions";
import { connect } from "react-redux";
const AddForm = (props) => {
  const [state, setState] = useState({
    name: "",
    position: "",
    nickname: "",
    description: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.name === "" || state.position === "" || state.nickname === "") {
      //   errorMessage = "Name, position and nickname fields are required.";
      return props.setError("Name, position and nickname fields are required.");
    }
    props.addSmurf(
      state.name,
      state.position,
      state.nickname,
      state.description
    );
    //if there is no error, clear input after submit. Otherwise,keep input in form
    !props.errorMessage &&
      setState({ name: "", position: "", nickname: "", description: "" });
    //if there was an error, then fill the blank, check if statement,  clear error, set to input to be empty
    if (state.name !== "" && state.position !== "" && state.nickname !== "") {
      props.setError("");
      setState({ name: "", position: "", nickname: "", description: "" });
    }
  };

  //Don't need this any more.
  // const errorMessage = "";

  return (
    <section>
      <h2>Add Smurf</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.name}
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.position}
            name="position"
            id="position"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.nickname}
            name="nickname"
            id="nickname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            onChange={handleChange}
            value={state.description}
            name="description"
            id="description"
          />
        </div>
        {props.errorMessage && (
          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error: {props.errorMessage}
          </div>
        )}
        <button>Submit Smurf</button>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    errorMessage: state.error,
  };
};
export default connect(mapStateToProps, { addSmurf, setError })(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value.
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.
