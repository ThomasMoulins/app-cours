import styled from "styled-components";
import FormatedDate from "./FormatedDate";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 100px;
`;

const Li = styled.li`
  list-style-type: none;
  margin: 0.4rem;
`;

const Vote = styled.p`
  color: ${({ vote }) => (vote >= 7 ? 'green' : '')};
`;

const Film = ({films}) => {
  return (
    <Ul>
      {films.slice(0, 5).map((film) => (
        <Li key={film.id}>
            <img src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}/>
            <p><strong>{film.title}</strong></p>
            <Vote vote={film.vote_average}>Note : {film.vote_average}</Vote>
            
            <p>Date de sortie : <FormatedDate date={film.release_date}/></p>
            <br />
        </Li>
      ))}
    </Ul>
  );
};

export default Film;
