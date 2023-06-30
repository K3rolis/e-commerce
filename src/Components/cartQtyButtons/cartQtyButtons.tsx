import styles from './CartQtyButtons.module.css';
import { useShoppingCart } from '../../context/ShoppingCartContext';

type cartQtyProps = {
  id: number;
  price: number;
};

export const CartQtyButtons = (props: cartQtyProps) => {
  const { getItemQuantity, increaseOrDecreaseQuantity } = useShoppingCart();

  const quantity = getItemQuantity(props.id);

  return (
    <div className={styles.quantityBox}>
      <button className={styles.decrease} onClick={() => quantity > 0 && increaseOrDecreaseQuantity(props.id, props.price, -1)}>
        -
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button className={styles.increase} onClick={() => quantity < 999 && increaseOrDecreaseQuantity(props.id, props.price, +1)}>
        +
      </button>
    </div>
  );
};
