import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome message="Hola desde promps" name="Aksel Herrera"/>
      </header>
    </div>
  );
}

export default App;
