import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Login from './components/Login/Login';
import Favorites from './components/Favorites/Favorites';
import ParticleBackground from './components/ParticlesBackground/ParticlesBackground';
import './App.css';

function App() {
  const [loginError, setLoginError] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
    } catch (error) {
      setLoginError('Credenciales inválidas');
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      if (data.name) {
        // Comprobar si el personaje ya existe en la lista
        const characterExists = characters.some((character) => character.id === data.id);
        if (!characterExists) {
          // Si el personaje no existe, agregarlo a la lista
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          // Si el personaje ya existe, mostrar un mensaje o realizar alguna acción
          alert('¡Este personaje ya está en la lista!');
        }
      }
    } catch (error) {
      alert('¡No hay personajes con este ID!');
    }
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter((character) => character.id !== id);
    setCharacters(charactersFiltered);
  };

  return (
    <>
      <ParticleBackground />
      <div className='App'>
        {location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />}
        <Routes>
          <Route path='/' element={<Login login={login} loginError={loginError} />} />
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
