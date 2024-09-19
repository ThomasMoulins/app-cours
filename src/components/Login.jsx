import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ConfToken from './ConfToken';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${ConfToken.API_TOKEN}`
        }
      };

      fetch('https://api.themoviedb.org/3/authentication/token/new', options)
      .then(res => res.json())
      .then(
          (result) => {
              console.log(result);
              sessionStorage.setItem('authToken', result.request_token);
              navigate('/');
          },
          (error) => {
              setError(error);
          }
      )
    } else {
      setError('Email ou mot de passe incorrect.');
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <button type="submit">Se connecter</button>
      </form>
      <Link to='/register'>S'inscrire</Link>
    </div>
  );
};

export default Login;
