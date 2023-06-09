import { useEffect, useState } from 'react';
import styles from './cartQtyButtons.module.css';

export const CartQtyButtons = (props: any) => {
  const [quantity, setQuantity] = useState<number>(1);

  // console.log(quantity);

  if (quantity > 1000) {
    setQuantity(1000);
  } else if (quantity < 1) {
    setQuantity(1);
  }

  useEffect(() => {
    props.quantity(quantity);
  });

  return (
    <div className={styles.quantityButton}>
      <button className={styles.decrease} onClick={() => setQuantity(quantity - 1)}>
        -
      </button>
      <input className={styles.quantity} type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
      <button className={styles.increase} onClick={() => setQuantity(quantity + 1)}>
        +
      </button>
    </div>
  );
};
