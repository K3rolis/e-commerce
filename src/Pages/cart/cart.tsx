import { useQueries } from '@tanstack/react-query';
import { Container } from '../../Components/container/container';
import styles from './cart.module.css';
import { CartItem } from './cartItem';
import { getProduct } from '../../api/products';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { CartCheckout } from './cartCheckout';

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
    if (cartQueries[i].isLoading) return <h1>Loading</h1>;
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
