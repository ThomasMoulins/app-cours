import './App.css';
import Student from './components/Student';
import Logo from './assets/react.svg';
import Avatar from '../public/vite.svg';

function App() {
  let firstStudent = {
    name: 'Jean',
    lastName: 'pasmoi',
    avatar: Logo, // Utiliser directement l'image importée
    campus: 'RI7',
    devLanguage: 'Flutter',
    isFromRi7: true
  };

  let secondStudent = {
    name: 'jiji',
    lastName: 'here',
    avatar: Avatar, // Utiliser directement l'image importée
    campus: 'Nextech',
    devLanguage: 'React.js',
    isFromRi7: false
  };

  return (
    <>
      <Student data={firstStudent} />
      <Student data={secondStudent} />
    </>
  );
}

export default App;
