import { Container } from '../Container/Container';
import styles from './HeroBanner.module.css';
import heroBanner from '../../images/hero-banner.jpg';
import { Link } from 'react-router-dom';

export const HeroBanner = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.heroBanner} src={heroBanner} alt="Hero Banner, Women" />
      <Container>
        <div className={styles.heroBannerContent}>
          <div className={styles.heroTitle}>New arrivals are here</div>
          <div className={styles.heroTitleText}>Check out the latest options</div>
          <Link to="/shop/mens-clothing" className={styles.heroButton}>
            Show new Arrivals
          </Link>
        </div>
      </Container>
    </div>
  );
};
