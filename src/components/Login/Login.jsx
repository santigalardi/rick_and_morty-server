import { useState } from 'react';
import validation from '../Validation/Validation';
import mainImage from '../../assets/img/rick&mortybg.webp';
import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import styles from './Login.module.css';

const Form = ({ login, loginError }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.formContainer}>
      <img src={mainImage} alt='Rick & Morty' className={styles.bg} />
      <div>
        <form onSubmit={handleSubmit} className={styles.loginContainer}>
          <h2>Log In</h2>
          <div className={styles.inputBox}>
            <span>
              <AiOutlineMail />
            </span>
            <input type='email' name='email' value={userData.email} onChange={handleChange} />
            <label htmlFor='email'>Email</label>
          </div>
          {errors.email && <p>{errors.email}</p>}

          <div className={styles.inputBox}>
            <span>
              <AiFillLock />
            </span>
            <input type='password' name='password' value={userData.password} onChange={handleChange} />
            <label htmlFor='password'>Password</label>
          </div>
          {errors.password && <p>{errors.password}</p>}

          <button type='submit' className={styles.loginBtn}>
            Submit
          </button>
          {loginError && <p>{loginError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Form;
