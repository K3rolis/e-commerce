import { CartQtyButtons } from '../../Components/cartQtyButtons/cartQtyButtons';
import styles from './cartItem.module.css';

export const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImageBox}>
        <img className={styles.productImage} src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
      </div>
      <div className={styles.cartContent}>
        <div className={styles.title}>
          Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
        </div>
        <CartQtyButtons />
        <div className={styles.price}>52.99€</div>
      </div>
    </div>
  );
};
