import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/welcome">Bienvenido</Link>
              </li>
              <li>
                <Link to="/about-me">Sobre mi</Link>
              </li>
              <li>
                <Link to="/profile">Perfil</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about-me' element={<AboutMe/>} />
            <Route path='/profile/:name' element={<Profile/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

/*<Welcome message="Hola desde promps" name="Aksel Herrera"/>*/