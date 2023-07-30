import pfp from '../../assets/img/profile-pic.png';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import styles from './About.module.css';

const Detail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.detailContainer}>
        <div className={styles.detailsContainer}>
          <h1>Santiago Galardi</h1>
          <p>
            Full Stack Developer con experiencia en JavaScript, React Js, Node Js, Express, SQL y otras
            tecnologías relacionadas. Me especializo en el desarrollo de aplicaciones web y disfruto creando
            soluciones eficientes y de alto rendimiento.
          </p>
          <div className={styles.redesContainer}>
            <a href='https://www.linkedin.com/in/santigalardi/' target='_blank' rel='noopener noreferrer'>
              <BsLinkedin size={40} />
            </a>
            <a href='https://github.com/santigalardi' target='_blank' rel='noopener noreferrer'>
              <BsGithub size={40} />
            </a>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src={pfp} alt='Santiago Galardi' />
        </div>
      </div>
    </div>
  );
};

export default Detail;
