import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Coming } from './pages/comingSoon';
import { Bonus } from './pages/bonus';
import { Home } from './pages/home';
const App = () =>{
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/comingSoon' element={<Coming/>}>
        </Route>
        <Route path='/bonus' element={<Bonus/>}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
