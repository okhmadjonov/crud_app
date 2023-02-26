import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "./redux/usersSlice";
const AddUser = (props) => {
  const usersAmount = useSelector((state) => state.users.users.length);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [checked, setChecked] = useState(false);

  const handleName = (e) => setFirstName(e.target.value);
  const handleCheck = (e) => setChecked((checked) => !checked);

  const handleSubmit = () => {
    // if (firstName) {
    dispatch(
      addUser({
        id: usersAmount + 1,
        firstName,
        checked,
      })
    );
    // }
    // else if (firstName) {
    //   console.log("Checkbox is not chekced");
    // } else if (checked) {
    //   console.log("Name is not added");
    // }
    // else {
    //   console.log("Nothing");
    // }
    setFirstName("");
    setChecked(false);
  };
  return (
    <div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="firstName"
          id="name"
          value={firstName}
          onChange={handleName}
        />
        <label htmlFor="P policy">Privacy policy</label>
        <input
          type="checkbox"
          id="privacyPolicy"
          value={checked}
          checked={checked}
          onChange={(e) => handleCheck(e.target.value)}
        />

        <Link to="/">
          <button onClick={handleSubmit} type="submit">
            Add
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AddUser;
