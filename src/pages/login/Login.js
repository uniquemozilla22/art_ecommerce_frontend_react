import React from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import {
  Facebook,
  FacebookOutlined,
  Google,
  Twitter,
} from "@mui/icons-material";

const Login = () => {
  return (
    <div className={classes.login__container}>
      <div className={classes.login__form}>
        <div className={classes.title__login}>
          <h1>Login.</h1>
        </div>
        <form className={classes.login__form__container}>
          <input type="text" placeholder="Username" className={classes.input} />
          <input type="text" placeholder="Password" className={classes.input} />
          <input type="submit" placeholder="Login" className={classes.submit} />
        </form>
        <div className={classes.login__seperator}>
          <p>or</p>
        </div>
        <div className={classes.other__methods}>
          <Link to="/register" className={classes.link}>
            Create a New Account
          </Link>
          <p>Use Alternatives</p>
          <div className={classes.social__alternatives}>
            <div className={classes.icons}>
              <FacebookOutlined />
            </div>
            <div className={classes.icons}>
              <Google />
            </div>
            <div className={classes.icons}>
              <Twitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
