import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import { useLocation } from 'react-router-dom';
import styles from './Card.module.css';

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {
  const [isFav, setIsFav] = useState(false);
  const location = useLocation();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, image, onClose });
    }
  };

  useEffect(() => {
    if (myFavorites) {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }
  }, [id, myFavorites]);

  return (
    <div className={styles.cardContainer}>
      <Link to={`/detail/${id}`}>
        <div className={styles.imgContainer}>
          <img src={image} alt={name} />
        </div>
        <h2>{name}</h2>
      </Link>
      <div className={styles.btnContainer}>
        <div className={styles.favContainer} onClick={handleFavorite}>
          {isFav ? (
            <button className={styles.fav}>
              <MdFavorite size={25} />
            </button>
          ) : (
            <button className={styles.notFav}>
              <MdFavorite size={25} />
            </button>
          )}
        </div>
        {location.pathname !== '/favorites' && (
          <div className={styles.deleteContainer}>
            <button className={styles.delete} onClick={() => onClose(id)}>
              <TiDelete size={25} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
