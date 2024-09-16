import './App.css';
import Student from './components/Student';
import Logo from './assets/react.svg';
import Avatar from '../public/vite.svg';

function App() {
  return (
    <>
      <Student name='Jean' lastName='pasmoi' avatar={Logo} campus='RI7' devLanguage='JS' isFromRi7/>
      <Student name='jiji' lastName='here' avatar={Avatar} campus='Nextech' devLanguage='React.js'/>
    </>
  );
}

export default App;