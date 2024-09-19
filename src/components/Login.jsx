import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useToken from './useToken';
import { MyContext } from './AppContext';

const LoginPage = () => {
  const { store, setStore } = useContext(MyContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useToken();
  const navigate = useNavigate();

  const handleOnClick = () => {
    if(store.theme === 'light') {
      setStore({...store, theme : 'dark'})
    } else {
      setStore({...store, theme : 'light'})
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      setStore({...store, username: username})
      setToken('authenticated');
      navigate('/quotes');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div>
      <button onClick={handleOnClick}> Change thème : {store.theme}</button>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
