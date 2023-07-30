import Card from '../Card/Card';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';
import styles from './Favorites.module.css';

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div className={styles.filtersContainer}>
        <div>
          <label htmlFor='order'>Order</label>
          <select onChange={handleOrder}>
            <option value='default'>Default</option>
            <option value='A'>A-Z</option>
            <option value='D'>Z-A</option>
          </select>
        </div>
        <div>
          <label htmlFor='filter'>Filter By</label>
          <select onChange={handleFilter}>
            <option value='allCharacters'>All Characters</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Genderless'>Genderless</option>
            <option value='unknown'>unknown</option>
          </select>
        </div>
      </div>

      <div className={styles.favContainer}>
        {myFavorites?.map((fav) => {
          return (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              species={fav.species}
              gender={fav.gender}
              image={fav.image}
              onClose={fav.onClose}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
