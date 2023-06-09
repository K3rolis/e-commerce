import styles from './cartCheckout.module.css';

export const CartCheckout = () => {
  return (
    <div className={styles.checkoutBox}>
      <div className={styles.checkoutItems}>
        <div className={styles.checkoutItem}>
          <div>Subtotal</div>
          <div>Price</div>
        </div>
        <div className={styles.checkoutItem}>
          <div>Shipping</div>
          <div>FREE</div>
        </div>

        <div className={`${styles.checkoutItem} ${styles.total}`}>
          <div className={styles.checkoutItemTitleTotal}>Total</div>
          <div className={styles.checkoutItemPriceTotal}>Price</div>
        </div>
      </div>
      <button className={styles.checkoutButton}>Checkout</button>
    </div>
  );
};
