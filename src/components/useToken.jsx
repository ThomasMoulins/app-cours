import { useState } from 'react';

const useToken = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const saveToken = (userToken) => {
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  return {
    token,
    setToken: saveToken,
  };
};

export default useToken;
