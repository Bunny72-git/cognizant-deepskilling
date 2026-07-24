import React from 'react';

function Login({ onLogin }) {
  return (
    <button className="login-button" onClick={onLogin}>
      Login
    </button>
  );
}

export default Login;
