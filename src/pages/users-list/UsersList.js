import React from "react";
import { Link } from "react-router-dom";
import { FaUserPlus, FaRegTrashAlt, FaRegSun } from "react-icons/fa";
import classes from "./UsersList.module.scss";

const UsersList = () => {
  return (
    <React.Fragment>
      <div className={classes.users}>
        <div className={classes.users__container}>
          <div className={classes.users__header}>
            <Link to="/add-user">
              <button className={classes.add__btn}>
                <FaUserPlus />
              </button>
            </Link>
            <h1>Users' List</h1>
          </div>
          <div className={classes.users__body__container}>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Gender</th>
                  <th>Country</th>
                  <th>Terms and conditions</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>

                  <td>
                    <Link>
                      <button style={{ backgroundColor: "#880808" }}>
                        <FaRegTrashAlt />
                      </button>
                    </Link>{" "}
                  </td>
                  <td>
                    <Link>
                      <button style={{ backgroundColor: "#FFCA33" }}>
                        <FaRegSun />
                      </button>
                    </Link>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UsersList;
