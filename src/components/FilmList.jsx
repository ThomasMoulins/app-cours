import { useEffect, useState } from 'react'
import ConfToken from './ConfToken';

const FilmList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [films, setFilms] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ConfToken.API_TOKEN}`
    }
  };

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", options)
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
  }, [])

  if(error) {
    return <div>Erreur : {error.message}</div>;
  } else if(!isLoaded) {
    return <div>Chargement...</div>
  } else {
    return(
        <ul>
            {films.map(film =>(
                <li key={film.id}>
                    {film.title}
                </li>
            ))}
        </ul>
    )
  }
}

export default FilmList