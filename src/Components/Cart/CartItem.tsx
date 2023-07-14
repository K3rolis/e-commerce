import styles from './CartItem.module.css';
import { CartQtyButtons } from '../CartQtyButtons/CartQtyButtons';

export interface CartItemProps {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

export const CartItem = ({ id, image, title, price }: CartItemProps) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImageBox}>
        <img className={styles.productImage} src={image} alt={title} />
      </div>
      <div className={styles.cartContent}>
        <div className={styles.title}>{title}</div>

        <CartQtyButtons id={id} price={price} />

        <div className={styles.price}>{price} €</div>
      </div>
    </div>
  );
};
