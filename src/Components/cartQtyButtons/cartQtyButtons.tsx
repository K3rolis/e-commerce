import styles from './cartQtyButtons.module.css';
import { useShoppingCart } from '../../context/ShoppingCartContext';

type cartQtyProps = {
  id: number;
  price: number;
};

export const CartQtyButtons = (props: cartQtyProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();

  const quantity = getItemQuantity(props.id);

  return (
    <div className={styles.quantityButton}>
      <button className={styles.decrease} onClick={() => decreaseCartQuantity(props.id)}>
        -
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button className={styles.increase} onClick={() => increaseCartQuantity(props.id, props.price)}>
        +
      </button>
    </div>
  );
};
