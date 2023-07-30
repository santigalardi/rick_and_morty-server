import { useState } from 'react';
import { BsPersonFillAdd } from 'react-icons/bs';
import style from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(id);
      setId('');
    }
  };

  return (
    <div className={style.searchBar}>
      <input
        type='search'
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        value={id}
        placeholder='Add a character! (1-826)'
      />
      <button onClick={() => onSearch(id) && setId('')}>
        <BsPersonFillAdd size={25} />
      </button>
    </div>
  );
}

// Para pasarle a la funcion onSearch el argumento, debo pasarlo con un callback

export default SearchBar;
