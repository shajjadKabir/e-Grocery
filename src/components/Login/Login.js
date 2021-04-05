import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "./firebaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const provider = new firebase.auth.GoogleAuthProvider();
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { email, displayName } = result.user;
        const newUser = {};
        newUser.email = email;
        newUser.displayName = displayName;
        setLoggedInUser(newUser);
        console.log(from);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <main>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="login-area border p-5 rounded d-flex flex-column align-items-center">
            <h3 className="font-weight-bold mb-3">Login With</h3>
            <button
              className="login-button mb-3 px-5 py-2"
              onClick={handleGoogleSignIn}
            >
              <FontAwesomeIcon icon={faGoogle} />
              Continue with Google
            </button>
            <p>
              <small className="text-muted">
                Don't have an account? <a href="/login">Create an account.</a>
              </small>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
