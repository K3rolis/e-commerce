import { Link, useParams } from 'react-router-dom';
import { getProduct } from '../../api/products';
import { useQuery } from '@tanstack/react-query';
import { Container } from '../../Components/container/container';
import styles from './singleProduct.module.css';
import { Stars } from '../../Components/stars';
import { CheckCategoriesUrl } from '../../Components/checkCategoriesUrl';
import { useShoppingCart } from '../../context/ShoppingCartContext';

export const SingleProduct = () => {
  const { increaseCartQuantity, increaseOrDecreaseQuantity, getItemQuantity } = useShoppingCart();

  // const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, increaseOrDecreaseQuantity } = useShoppingCart();

  interface cartItems {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
  }

  const { productId } = useParams();

  const productQuery = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(Number(productId)),
  });

  CheckCategoriesUrl();
  if (productQuery.status === 'loading') return <h1>Loading....</h1>;

  if (!productQuery.data)
    return (
      <h1>
        Something went wrong, please go to <Link to={'/'}>Home Page</Link>
      </h1>
    );

  const {
    id,
    title,
    price,
    description,
    image,
    rating: { count, rate },
  } = productQuery?.data;

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
            <span className={styles.price}>{price}€</span>
          </div>

          <div className={styles.quantityButton}>
            <button className={styles.decrease} onClick={() => increaseOrDecreaseQuantity(id, price, -1)}>
              -
            </button>
            <span className={styles.quantity}>{getItemQuantity(id)}</span>
            <button className={styles.increase} onClick={() => increaseOrDecreaseQuantity(id, price, 1)}>
              +
            </button>
          </div>
          <button className={styles.addToBagButton} onClick={() => increaseCartQuantity(id, price)}>
            Add to bag
          </button>
        </div>
      </div>
    </Container>
  );
};
