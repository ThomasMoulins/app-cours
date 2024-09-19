import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Experiences from './Experiences'
import About from './About'
import Header from './Header'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/experiences' element={<Experiences />}/>
            <Route path='/about' element={<About />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router