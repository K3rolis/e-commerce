import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/products';
import { useQuery } from '@tanstack/react-query';
import { Container } from '../../Components/container/container';
import styles from './singleProduct.module.css';
import { useState } from 'react';
import { Stars } from '../../Components/stars';

export const SingleProduct = () => {
  const { productId } = useParams();
  const product = Number(productId);

  const [quantity, setQuantity] = useState<number>(1);

  if (quantity > 1000) {
    setQuantity(1000);
  } else if (quantity < 1) {
    setQuantity(1);
  }

  const productQuery = useQuery({
    queryKey: ['product', product],
    queryFn: () => getProduct(product),
  });

  if (productQuery.status === 'loading') return <h1>Loading....</h1>;

  console.log(productQuery.data?.data);

  const {
    title,
    price,
    description,
    // category,
    image,
    rating: { count, rate },
  } = productQuery.data?.data;

  return (
    <Container>
      <div className={styles.productItem}>
        <div className={styles.imageBox}>
          <img src={image} alt={title} />{' '}
        </div>
        <div className={styles.productContent}>
          <p className={styles.title}>{title}</p>
          <div className={styles.rating}>
            <span className={styles.rate}>{rate}</span>
            <Stars rating={rate} />
            <span className={styles.reviews}> Reviews: {count}</span>
          </div>
          <p className={styles.description}>{description}</p>
          <div className={styles.payBox}>
            <div className={styles.quantityButton}>
              <button className={styles.decrease} onClick={() => setQuantity(quantity - 1)}>
                -
              </button>
              <input className={styles.quantity} type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
              <button className={styles.increase} onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
            <span className={styles.price}>{price}€</span>
          </div>
          <button className={styles.addToBagButton}>Add to bag</button>
        </div>
      </div>
    </Container>
  );
};
