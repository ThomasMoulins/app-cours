import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Quote from "./Quote";

const QuoteDetail = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const navigate = useNavigate();
  const { character } = useParams();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/quotes');
  }

  useEffect(() => {
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=10&character=${character}`)
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
          <button onClick={handleClick}>Retour vers les Quotes</button>
          <h1>Quotes for {character}</h1>
          <Quote quotes={quotes}/>
        </>
    )
  }
}

export default QuoteDetail