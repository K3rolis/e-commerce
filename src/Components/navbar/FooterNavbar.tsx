import { getCategoriesLocal } from '../../api/categories';
import styles from './FooterNavbar.module.css';
import { Container } from '../Container/Container';
import { Link } from 'react-router-dom';

export const FooterNavbar = () => {
  return (
    <Container>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">Home</Link>
        </div>

        <div className={styles.categories}>
          {getCategoriesLocal?.map((category, index) => (
            <Link key={index} to={`shop/${category.slug.toLowerCase()}`}>
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};
