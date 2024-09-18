import { useState, useEffect } from 'react'
import Quote from './Quote';

const Quotes = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=5')
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        setIsLoaded(true);
        setQuotes(result)
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
          <h1>Quotes</h1>
         <Quote quotes={quotes}/>
        </>
    )
  }
}

export default Quotes