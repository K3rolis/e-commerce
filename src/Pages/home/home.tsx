import { Link } from 'react-router-dom';
import { Container } from '../../Components/container/container';
import { getCategoriesLocal } from '../../api/categories';
import heroBanner from '../../images/hero-banner.jpg';
import styles from './home.module.css';

export const Home = () => {
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

      <Container>
        <p className={styles.sectionTitle}>Shop by Category</p>
        <div className={styles.categories}>
          {getCategoriesLocal?.map((category, index) => (
            <Link key={index} to={`shop/${category.slug.toLowerCase()}`}>
              <div className={styles.categoryItem}>
                <img className={styles.categoryImage} src={category.image} alt="" height="350px" />
                <div className={styles.categoryTitle}>{category.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};
