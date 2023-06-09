import { NavLink } from 'react-router-dom';
import { getCategoriesLocal } from '../../api/categories';
import styles from './navbar.module.css';
import { Container } from '../container/container';
import { FaShoppingBag } from 'react-icons/fa';

//   //   if (categoriesQuery.status === 'loading') return <h1>Loading...</h1>;
//   //   if (categoriesQuery.status === 'error') {
//   //     return <h1>{JSON.stringify(categoriesQuery.error)}</h1>;
//   //   }

//   return <div></div>;
// };

export const Navbar = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <NavLink style={{ margin: '10px' }} to="/">
              Home
            </NavLink>
          </div>

          <div className={styles.categories}>
            {getCategoriesLocal?.map((category, index) => (
              <NavLink className={({ isActive }) => (isActive ? styles.active : '')} key={index} to={`shop/${category.slug.toLowerCase()}`}>
                {category.title}
              </NavLink>
            ))}
          </div>

          <div className={styles.cart}>
            <NavLink to="/">
              <FaShoppingBag style={{ fontSize: '2rem' }} /> <span>0</span>
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};
