import './Quotes.css'

const Quote = ({quotes}) => {
  return (
    <ul>
      {quotes.map((quote, index) => (
        <li key={index}>
          <img className={quote.characterDirection} src={quote.image}/>
          <p><strong>{quote.character}:</strong> {quote.quote}</p>
        </li>
      ))}
    </ul>
  )
}

export default Quote