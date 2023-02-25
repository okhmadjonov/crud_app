import React from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import classes from "./AddUser.module.scss";
const AddUser = () => {
  return (
    <React.Fragment>
      <Link to="/">
        <button className={classes.return__btn}>
          <FaRegArrowAltCircleLeft />
        </button>
      </Link>
      <div className={classes.form}>
        <div className={classes.form__container}></div>
      </div>
    </React.Fragment>
  );
};

export default AddUser;
