import { Container } from '../../Components/container/container';
import styles from './cart.module.css';
import { CartCheckout } from './cartCheckout';
import { CartItem } from './cartItem';

export const Cart = () => {
  return (
    <Container className={styles.cartWrapper}>
      <div className={styles.cartSectionTitle}>Shopping cart</div>
      <CartItem />
      <CartItem />

      <CartCheckout />
    </Container>
  );
};
