import FormatedDate from "./FormatedDate";

const Film = ({films}) => {
  return (
    <ul>
      {films.slice(0, 5).map((film) => (
        <li key={film.id}>
            <img src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}/>
            <p><strong>{film.title}</strong></p>
            <p style={film.vote_average >= 7 ? { color: 'green' } : {}}>Note : {film.vote_average}</p>
            
            <p>Date de sortie : <FormatedDate date={film.release_date}/></p>
            <br />
        </li>
      ))}
    </ul>
  );
};

export default Film;
