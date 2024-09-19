import { Link } from 'react-router-dom'

const Experiences = () => {
  return (
    <>
    <header>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/experiences'>Experiences</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </header>
      <div>Experiences</div>
    </>
  )
}

export default Experiences