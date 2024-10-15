import React, { useState } from 'react';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password are correct
    if (email === 'almat@mail.com' && password === 'aalmat') {
      setIsAuthenticated(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect email or password. Please try again.');
      setIsAuthenticated(false);
    }
  };

  return (
    <div className="auth-container">
      {!isAuthenticated ? (
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Login</h2>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      ) : (
        <div className="alert alert-success">
          You are successfully logged in!
        </div>
      )}
    </div>
  );
}

export default Auth;
