import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/Rick-and-Morty.png';
import { MdFavorite } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = ({ onSearch, setAccess }) => {
  const location = useLocation();
  const handleLogOut = () => {
    setAccess(false);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.logoContainer}>
        <div className={styles.logoBackground}>
          <NavLink to={'/home'}>
            <img src={logo} alt='logo' className={styles.logo} />
          </NavLink>
        </div>
      </div>
      {location.pathname === '/home' && (
        <div>
          <SearchBar onSearch={onSearch} />
        </div>
      )}
      {location.pathname === '/favorites' && (
        <div className={styles.titleContainer}>
          <h2>My Favorites!</h2>
        </div>
      )}
      {location.pathname === '/about' && (
        <div className={styles.titleContainer}>
          <h2>About Me</h2>
        </div>
      )}

      <div className={styles.logoutContainer}>
        <NavLink to={'/favorites'}>
          <button className={styles.logoutButton}>
            <MdFavorite size={25} />
          </button>
        </NavLink>
        <NavLink to={'/about'}>
          <button className={styles.logoutButton}>
            <BsInfoCircle size={25} />
          </button>
        </NavLink>
        <NavLink to={'/'}>
          <button onClick={handleLogOut} className={styles.logoutButton}>
            <RiLogoutBoxRLine size={25} />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
