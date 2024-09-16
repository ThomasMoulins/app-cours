import './App.css'
import Avatar from './components/Avatar';
import Experiences from './components/Experiences';
import Formations from './components/Formations';
import Identity from './components/Identity';
import Projects from './components/Projects';
import Icon from './assets/react.svg'

function App() {
  return (
    <>
      <Identity name='me' lastName='ornot' addresse='50 rue imaginaire'/>
      <Avatar avatar={Icon}/>
      <Experiences />
      <Formations />
      <Projects />
    </>
  )
}

export default App
