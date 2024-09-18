import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ConfToken from './ConfToken';
import Film from './Film';

const FilmList = ({title, link}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [films, setFilms] = useState([]);
  const navigate = useNavigate();
  

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ConfToken.API_TOKEN}`
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');

    if (!token) {
      navigate('/login');
    } else {
      fetch(link, options)
      .then(res => res.json())
      .then(
          (result) => {
              console.log(result);
              setIsLoaded(true);
              setFilms(result.results);
          },
          (error) => {
              setIsLoaded(true);
              setError(error);
          }
      )
    }
  }, [])

  if(error) {
    return <div>Erreur : {error.message}</div>;
  } else if(!isLoaded) {
    return <div>Chargement...</div>
  } else {
    return(
        <>
          <h1>{title}</h1>
         <Film films={films}/>
        </>
    )
  }
}

FilmList.propTypes = String

export default FilmList