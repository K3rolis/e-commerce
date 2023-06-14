import styles from './cartItem.module.css';
import { useShoppingCart } from '../../context/ShoppingCartContext';

export interface CartItemProps {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

export const CartItem = ({ id, image, title, price }: CartItemProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImageBox}>
        <img className={styles.productImage} src={image} alt={title} />
      </div>
      <div className={styles.cartContent}>
        <div className={styles.title}>{title}</div>

        <div className={styles.quantityButton}>
          <button className={styles.decrease} onClick={() => decreaseCartQuantity(id)}>
            -
          </button>
          <span className={styles.quantity}>{quantity}</span>
          <button className={styles.increase} onClick={() => increaseCartQuantity(id, price)}>
            +
          </button>
        </div>
        <div className={styles.price}>{price} €</div>
      </div>
    </div>
  );
};
