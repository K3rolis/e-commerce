import { Container } from '../../Components/container/container';
import styles from './heroBanner.module.css';
import heroBanner from '../../images/hero-banner.jpg';

export const HeroBanner = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.heroBanner} src={heroBanner} alt="Hero Banner, Women" />
      <Container>
        <div className={styles.heroBannerContent}>
          <div className={styles.heroTitle}>New arrivals are here</div>
          <div className={styles.heroTitleText}>Check out the latest options</div>
          <button className={styles.heroButton}>Show new Arrivals</button>
        </div>
      </Container>
    </div>
  );
};
