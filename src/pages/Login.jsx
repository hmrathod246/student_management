import { Link } from "react-router-dom";
import './Login.css';
export const Login=()=>
{
    return(
        <div className="form-container">
            <h1 className="form-title">Welcome back</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"></input>

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"/>
                </div>
                <button type="submit" className="btn-primary">Login</button>
            </form>
            <p className="link-text">
                Don't have an account?<Link to="/register">Register here</Link>
            </p>
        </div>
    )
}