import './App.css';
import Student from './components/Student';
import Logo from './assets/react.svg';
import Avatar from '../public/vite.svg';

function App() {
  let firstStudent = {
    name: 'Jean',
    lastName: 'pasmoi',
    avatar: Logo,
    campus: 'RI7',
    devLanguage: 'Flutter',
    isFromRi7: true
  };

  let secondStudent = {
    name: 'jiji',
    lastName: 'here',
    avatar: Avatar,
    campus: 'Nextech',
    devLanguage: 'React.js',
    isFromRi7: false
  };

  return (
    <>
      <Student {...firstStudent} />
      <Student {...secondStudent} />
    </>
  );
}

export default App;