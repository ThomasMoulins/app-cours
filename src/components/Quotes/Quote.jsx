import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Img = styled.img`
  max-width: 5rem;
  margin-right: 1rem;
  ${({ direction }) => (direction === 'Right' ? 'transform: scaleX(-1);' : '')};
`;

const Li = styled.li `
  display: flex;
  list-style-type: none;
  align-items: center;
  margin: 2rem;
`

const Name = styled.strong `
  font-family: 'Simpsonfont';
`

const Quote = ({quotes}) => {
  return (
    <ul>
      {quotes.map((quote, index) => (
        <Li key={index}>
          <Link to={`/quotedetail/${quote.character}`}><Img direction={quote.characterDirection} src={quote.image}/></Link>
          <p><Name>{quote.character}</Name> - {quote.quote}</p>
        </Li>
      ))}
    </ul>
  )
}

export default Quote