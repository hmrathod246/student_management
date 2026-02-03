import { data, Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
export const Login = () => {
  const [loginData, setLogindata] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  //logic section
  const handleInputChange = (e) => {
    setLogindata({
      ...loginData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  const validate = () => {
    const newErrors = {};
    if (!loginData.email.trim()) {
      newErrors.email = "Full email required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)
    ) //regex of email pattern
    {
      newErrors.email = "invalid email format";
    }
    if (!loginData.password.trim()) {
      //trim space remove
      newErrors.password = "password is required required";
    } else if (loginData.password.length < 6) {
      newErrors.password = "minimum 6 character required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const saveData = JSON.parse(localStorage.getItem("authData"));
      
      if (
        saveData.email === loginData.email &&
        saveData.password === loginData.password
      ) {
        localStorage.setItem("logindata", JSON.stringify(loginData));
        alert("login successfully completed");
        navigate("/dashboard");
      }
    } else {
      alert("somthing ent wrong");
    }
  };
  return (
    <div className="form-container">
      <h1 className="form-title">Welcome back</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            placeholder="Enter your email"
            onChange={handleInputChange}
          ></input>
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            placeholder="Enter your password"
            onChange={handleInputChange}
          />
          {errors.password && (
            <span className="error-msg">{errors.password}</span>
          )}
        </div>
        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
      <p className="link-text">
        Don't have an account?<Link to="/register">Register here</Link>
      </p>
    </div>
  );
};
