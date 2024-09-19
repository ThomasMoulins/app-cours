import { Link } from 'react-router-dom'
import './Quotes.css'

const Quote = ({quotes}) => {
  return (
    <ul>
      {quotes.map((quote, index) => (
        <li key={index}>
          <Link to={`/quotedetail/${quote.character}`}><img className={quote.characterDirection} src={quote.image}/></Link>
          <p><strong>{quote.character}:</strong> {quote.quote}</p>
        </li>
      ))}
    </ul>
  )
}

export default Quote