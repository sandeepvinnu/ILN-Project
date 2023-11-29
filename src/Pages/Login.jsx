import React, { useState } from "react";
import './PagesCss/Login.css'


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // TODO: Validate the email and password
  
      // TODO: Login the user
    };

    return (
        <div className="bg-continer">
            <div className="login-container">
                <h1 className="login-title">Login</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="login-input"
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="login-input"
                    />
                    <button type="submit" className="login-button">
                    Login
                    </button>
                </form>
            </div>
        </div>
    )

}

export default Login