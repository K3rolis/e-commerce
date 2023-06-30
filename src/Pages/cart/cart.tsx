import { useQueries } from '@tanstack/react-query';
import { Container } from '../../Components/Container/Container';
import styles from './Cart.module.css';
import { CartItem } from '../../Components/Cart/CartItem';
import { getProduct } from '../../api/products';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { CartCheckout } from '../../Components/Cart/CartCheckout';
import { SyncLoader } from 'react-spinners';

type cartItemProps = {
  id: number;
};

export const Cart = () => {
  const { cartItems } = useShoppingCart();

  const cartQueries = useQueries({
    queries: cartItems.map((cartItem: cartItemProps) => {
      return {
        queryKey: ['cartItem', cartItem.id],
        queryFn: () => getProduct(cartItem.id),
      };
    }),
  });

  for (let i = 0; i < cartQueries.length; i++) {
    if (cartQueries[i].isLoading) return <SyncLoader className="loading-spinner" color="#36d7b7" />;
  }

  return (
    <Container className={styles.cartWrapper}>
      <div className={styles.cartSectionTitle}>Shopping cart</div>
      {cartQueries.map(({ data }) => (
        <CartItem key={data.id} {...data} />
      ))}

      <CartCheckout />
    </Container>
  );
};
