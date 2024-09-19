import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Quote from './Quote';
import { MyContext } from '../AppContext';

const Quotes = () => {
  const { store, setStore } = useContext(MyContext)
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=5')
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        setIsLoaded(true);
        setStore({...store, apiData: result});
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
        console.log(error);
      }
    )
  }, [])

  if(error) {
    return <div>Erreur : {error.message}</div>;
  } else if(!isLoaded) {
    return <div>Chargement...</div>
  } else {
    return(
        <>
          <button onClick={handleClick}>Se Déconnecter de {store.username}</button>
          <h1>Quotes</h1>
          <Quote quotes={store.apiData}/>
        </>
    )
  }
}

export default Quotes