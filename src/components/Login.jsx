import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('https://api.themoviedb.org/3/authentication/token/new?api_key=VOTRE_API_KEY');
      const data = await response.json();

      if (data.success) {
        sessionStorage.setItem('authToken', data.request_token);

        navigate('/filmlist');
      } else {
        setError('Erreur lors de la génération du token.');
      }
    } catch (e) {
      setError('Une erreur est survenue lors de la connexion.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
      <a href='/register'>Register</a>
    </div>
  );
};

export default Login;
