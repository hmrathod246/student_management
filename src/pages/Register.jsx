import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import React, { useEffect, useState } from "react";
function Register() {
  //state decalaration section
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const navigate=useNavigate()

  //logic section
  const handleInputChange = (e) => {
    // console.log(e.target.name,e.target.value)
    // e.target.name=e.target.value
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]:""
    })
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      //trim space remove
      newErrors.name = "Full name required";
    } else if (formData.name.length <= 3) {
      newErrors.name = "minimum 3 charater reuired";
    }
    if (!formData.email.trim()) {
      //trim space remove
      newErrors.email = "Full email required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) //regex of email pattern
    {
      newErrors.email = "invalid email format";
    }

    if (!formData.phone.trim()) {
      //trim space remove
      newErrors.phone = "phone number is required required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "phone must be in 10 digit";
    }
    if (!formData.password.trim()) {
      //trim space remove
      newErrors.password = "password is required required";
    } else if (formData.password.length < 6) {
      newErrors.password = "minimum 6 character required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem('authData',JSON.stringify(formData));
      alert('registration successfully completed')
      navigate("/login")
    }
  };
  //   useEffect(()=>{
  // console.log(formData)
  //   },[formData])

  //design section
  return (
    <div className="form-container">
      <h1 className="form-title">REGISTER</h1>
      <form onSubmit={handleSubmit}>
        {/* name Feild */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            id="name"
            placeholder="Enter your full Name"
            onChange={handleInputChange}
          />

          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>
        {/* email feild */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            id="email"
            onChange={handleInputChange}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>
        {/* Phone field */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone Number"
            name="phone"
            value={formData.phone}
            id="phone"
            onChange={handleInputChange}
          />
          {errors.phone && <span className="error-msg">{errors.phone}</span>}
        </div>
        {/* password feild */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Create a passwordr"
            name="password"
            value={formData.password}
            id="password"
            onChange={handleInputChange}
          />
          {errors.password && (
            <span className="error-msg">{errors.password}</span>
          )}
        </div>
        {/* submit button */}
        <button type="submit" className="btn-primary">
          Register
        </button>
      </form>
      <p className="link-text">
        Already have an account<Link to="/Login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
