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
      <div className="student-card">
        <Avatar avatar={Icon}/>
        <Identity name='Jean' lastName='DELACOURS' age='95 ans'/>
      </div>
      <Experiences />
      <Formations />
      <Projects />
    </>
  )
}

export default App
