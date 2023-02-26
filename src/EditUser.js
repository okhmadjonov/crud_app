import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { editUser } from "./redux/usersSlice";
const EditUser = () => {
  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace("/edit-user/", ""));

  const user = useSelector((state) =>
    state.users.users.find((user) => user.id === userId)
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(user.firstName);
  const [checked, setChecked] = useState(user.checked);

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleCheck = (e) => setChecked((checked) => !checked);

  const handleSubmit = () => {
    // if (firstName) {
    dispatch(
      editUser({
        id: userId,
        firstName,
        checked,
      })
    );
    navigate("/");
    // }
    // else if (firstName) {
    //   console.log("Checkbox is not chekced");
    // } else if (checked) {
    //   console.log("Name is not added");
    // }
    // else {
    //   console.log("Nothing");
    // }
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
          placeholder="name"
          id="name"
          value={firstName}
          onChange={handleFirstName}
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

export default EditUser;
