import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useToken from './useToken';
import { MyContext } from './AppContext';
import useToggle from './useToggle';
import styled from 'styled-components';

const OverlayStyle = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalStyle = styled.div `
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  color: black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  margin-bottom: 1rem;
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginPage = () => {
  const { store, setStore } = useContext(MyContext)
  const { isToggle, setIsToggle } = useToggle(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useToken();
  const navigate = useNavigate();

  const handleCloseModal = (e) => {
    if (e.target.className === 'modal-overlay') {
      setIsToggle();
    }
  };

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
      console.log('login failed')
      setIsToggle()
    }
  };

  return (
    <div>
      <Button onClick={handleOnClick}> Change thème : {store.theme}</Button>
      <Form onSubmit={handleLogin}>
      <FormGroup>
        <Label>Username</Label>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <Button type="submit">Login</Button>
    </Form>
      {isToggle && (
        <OverlayStyle onClick={handleCloseModal}>
          <ModalStyle>
            <h2>/!\ Erreur de connexion</h2>
            <p>Vous avez rentrée un mauvais username ou password</p>
            <button onClick={setIsToggle}>Fermer</button>
          </ModalStyle>
        </OverlayStyle>
      )}
    </div>
  );
};

export default LoginPage;
