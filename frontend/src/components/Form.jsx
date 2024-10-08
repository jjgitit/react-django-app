import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useEffect, useState } from "react";

// Importing the CSS module
import styles from "../styles/Form.module.css";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [method, setMethod] = useState("login"); // default state when user visits the app
  const [route, setRoute] = useState("/api/token/"); // for login api endpoint

  useEffect(() => {
    if (method === "login") {
      setRoute("/api/token/");
    } else if (method === "register") {
      setRoute("/api/user/register/");
    }
  }, [method]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
        handleSignIn();
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleRegister = () => {
    const container = document.getElementById("container");
    container.classList.add(styles.active);
    setMethod("register");
  };

  const handleSignIn = () => {
    const container = document.getElementById("container");
    container.classList.remove(styles.active);
    setMethod("login");
  };

  return (
    <div className={styles.page}>
      <div className={styles.container} id="container">
        <div className={`${styles["form-container"]} ${styles["sign-up"]}`}>
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input type="email" placeholder="Email" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className={`${styles["form-container"]} ${styles["sign-in"]}`}>
          <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Sign In</button>
          </form>
        </div>
        <div className={styles["toggle-container"]}>
          <div className={styles.toggle}>
            <div className={`${styles["toggle-panel"]} ${styles["toggle-left"]}`}>
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className={styles.hidden} id="login" onClick={handleSignIn}>
                Sign In
              </button>
            </div>
            <div className={`${styles["toggle-panel"]} ${styles["toggle-right"]}`}>
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button
                className={styles.hidden}
                id="register"
                onClick={handleRegister}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
