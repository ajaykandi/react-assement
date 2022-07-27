import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const nav = useNavigate();
  const [formdata, setFormData] = useState({});
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : setError("no user found");

    const userIndex = users.findIndex(
      (user) =>
        user.email === formdata.email && user.password === formdata.password
    );

    if (userIndex !== -1) {
      localStorage.setItem("user", JSON.stringify(users[userIndex]));
      nav("/");
    } else {
      setError("Invalide Credentials");
    }
  };

  return (
    <div className="signin">
      <div className="signin-container">
        <h1>Sign in</h1>
        <p>
          Don't have an account ? <a href="/signup"> Sign Up</a>
        </p>
        <form
          className="signin-form"
          onChange={handleChange}
          onSubmit={handleSubmit}
        >
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          {error && <div className="error">{error}</div>}
          <button className="submit-btn"> Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
