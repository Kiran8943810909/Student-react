import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Signing in with:', email, password);
    // onSignIn({ email, password });
    navigate('/home');
  };

  return (
    <div className='sign-in-container'>
      <h2>Sign In</h2>
      <input
        className='input-box'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className='input-box'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button  className='login-button' onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

  export default Login;
