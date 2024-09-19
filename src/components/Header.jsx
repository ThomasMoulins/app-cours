import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <li>
            <Link to='/'>Home</Link>
            <Link to='/experiences'>Experiences</Link>
            <Link to='/about'>About</Link>
        </li>
    </nav>
  )
}

export default Header