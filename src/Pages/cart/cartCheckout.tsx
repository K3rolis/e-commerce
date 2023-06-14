import styles from './cartCheckout.module.css';
import { useShoppingCart } from '../../context/ShoppingCartContext';

type cartItemProps = {
  id: number;
  quantity: number;
};

export const CartCheckout = () => {
  const { cartItems } = useShoppingCart();

  const subTotalPrice = () => {
    const total = cartItems.reduce((total: number, cartItem: cartItemProps) => {
      const item = cartItems.find((item: cartItemProps) => item.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);
    return total;
  };

  const shippingPrice = 0;

  return (
    <div className={styles.checkoutBox}>
      <div className={styles.checkoutItems}>
        <div className={styles.checkoutItem}>
          <div>Subtotal</div>
          <div>{subTotalPrice().toFixed(2)} €</div>
        </div>
        <div className={styles.checkoutItem}>
          <div>Shipping</div>
          <div>{shippingPrice <= 0 ? 'FREE' : `${shippingPrice.toFixed(2)} €`} </div>
        </div>

        <div className={`${styles.checkoutItem} ${styles.total}`}>
          <div className={styles.checkoutItemTitleTotal}>Total </div>
          <div className={styles.checkoutItemPriceTotal}>{(subTotalPrice() + shippingPrice).toFixed(2)} €</div>
        </div>
      </div>
      <button className={styles.checkoutButton}>Checkout</button>
    </div>
  );
};
