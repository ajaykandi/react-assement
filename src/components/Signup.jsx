import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const nav = useNavigate();
  const [formdata, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [isCheked, setisCheked] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, confirmPassword } = formdata;
    if (password !== confirmPassword)
      return setError("password & confirm password should be same...");

    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    const isExist = users.findIndex((user) => user.email === formdata.email);

    if (isExist <= 0) {
      users.push(formdata);
      localStorage.setItem("users", JSON.stringify(users));
      nav("/signin");
    } else {
      setError("Email already exists");
    }
  };

  return (
    <div className="signin">
      <div className="signin-container">
        <h1>Create account</h1>
        <p>
          Already have an account ? <a href="/signin"> Sign In</a>
        </p>
        <form
          className="signin-form"
          onChange={handleChange}
          onSubmit={handleSubmit}
        >
          <input required type="email" placeholder="Email" name="email" />
          <div className="input-inline">
            <input
              required
              type="text"
              placeholder="First name"
              name="firstname"
            />
            <input
              required
              type="text"
              placeholder="Last name"
              name="lastname"
            />
          </div>
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
          />
          <input
            required
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          {error && <div className="error">{error}</div>}
          <button type="submit" className="submit-btn">
            Sign up
          </button>
          <div className="checkdiv">
            <input
              required
              type="checkbox"
              className="checkbox"
              onChange={() => setisCheked(!isCheked)}
            />
            <div className="agreement">
              I have read and agreed to the <span> Terms of Service </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
