import styles from './Home.module.css';
import { HeroBanner } from '../../Components/Home/HeroBanner';

export const Home = () => {
  return (
    <div className={styles.hero}>
      <HeroBanner />
    </div>
  );
};
