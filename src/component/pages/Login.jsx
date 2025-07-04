import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
      localStorage.setItem('isLoggedIn', 'true'); // Save login state
      onClose();
      navigate("/dashboard");
    } else {
      alert("Invalid email or password!");
    }
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    onClose();
    navigate("/");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>User Login</h2>

        <label>Email</label>
        <input
          type="email"
          placeholder="Foodies@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-row">
          <label>Password</label>
          <a href="#" className="forgot-link">Forgot ?</a>
        </div>
        <div className="password-input">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-button">Login now</button>

        <p className="signup-text">
          Don’t have an account?{" "}
          <a href="/" onClick={handleSignupClick}>Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
