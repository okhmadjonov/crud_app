import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletUser } from "./redux/usersSlice";
const UsersList = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletUser({ id }));
  };

  return (
    <div>
      <Link to="/add-user">
        <button>Add User</button>
      </Link>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Terms</td>
            <td>Delete</td>
            <td>Edit</td>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, firstName, checked }, index) => (
            <tr key={index}>
              <td>{id}</td>
              <td>{firstName}</td>
              <td>{checked ? "true" : "false"}</td>
              <td>
                <Link>
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </Link>
              </td>
              <td>
                <Link to={`/edit-user/${id}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
