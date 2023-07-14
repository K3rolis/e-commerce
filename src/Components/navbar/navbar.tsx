import { NavLink } from 'react-router-dom';
import { getCategoriesLocal } from '../../api/categories';
import styles from './Navbar.module.css';
import { Container } from '../Container/Container';
import { FaShoppingBag } from 'react-icons/fa';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

export const Navbar = () => {
  const { cartQuantity } = useShoppingCart();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <NavLink style={{ margin: '10px' }} to="/" onClick={() => setIsOpen(false)}>
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
            <NavLink to="/cart" onClick={() => setIsOpen(false)}>
              <FaShoppingBag style={{ fontSize: '2rem' }} /> <span>{cartQuantity}</span>
            </NavLink>
          </div>
          <div className={styles.hamburgerMenu} onClick={handleOpenMenu}>
            <GiHamburgerMenu className={styles.hamburger} />
            {isOpen && (
              <div className={`${styles.responsiveNavigation} ${isOpen && styles.activeResponsiveNavigation}`}>
                {getCategoriesLocal?.map((category, index) => (
                  <NavLink
                    className={({ isActive }) => (isActive ? styles.active : '') + ` ${styles.test}`}
                    key={index}
                    to={`shop/${category.slug.toLowerCase()}`}
                  >
                    {category.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
