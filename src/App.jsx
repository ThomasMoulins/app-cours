import './App.css'
import Ville from './components/Ville';
import ClickButton from './components/ClickButton';
import Student from './components/Student';
import Logo from './assets/react.svg'
import Avatar from '../public/vite.svg'

function App() {
  let name = 'Jean';

  return (
    <>
      <div>
        <h1>Hello Ri7, je m’appelle { name }</h1>
      </div>
      <div>
        <Ville />
        <ClickButton />
        <Student name='Jean' lastName='pasmoi' avatar={ Logo } campus='RI7' devLanguage='Flutter'/>
        <Student name='jiji' lastName='here' avatar={ Avatar } campus='Nextech' devLanguage='React.js' isFromRi7/>
      </div>
    </>
  )
}

export default App
