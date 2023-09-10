import './App.css';
import {useState} from 'react';
import Character from './components/Character';

function App() {
  //GET INFO FROM REQUEST
  const [characters, setCharacters] = useState(null);
  //REQUEST
  const requestApi = async () => {
      const api = await fetch('https://rickandmortyapi.com/api/character');
      const characterApi = await api.json();
      setCharacters(characterApi.results);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Api Rick and Morty</h1>
        {characters ? 
          (<Character characters={characters}/>) 
          :
          <>
            <button onClick={requestApi}>Buscar Personajes</button>
          </>
        }
      </header>
    </div>
  );
}

export default App;
