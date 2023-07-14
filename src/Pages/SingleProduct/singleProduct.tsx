import { Link, useParams } from 'react-router-dom';
import { getProduct } from '../../api/products';
import { useQuery } from '@tanstack/react-query';
import { Container } from '../../Components/Container/Container';
import styles from './SingleProduct.module.css';
import { Stars } from '../../Components/Stars';
import { CheckCategoriesUrl } from '../../Components/checkCategoriesUrl';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { CartQtyButtons } from '../../Components/CartQtyButtons/CartQtyButtons';
import { SyncLoader } from 'react-spinners';

export const SingleProduct = () => {
  const { increaseCartQuantity } = useShoppingCart();

  const { productId } = useParams();

  const productQuery = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(Number(productId)),
  });

  CheckCategoriesUrl();
  if (productQuery.status === 'loading') return <SyncLoader className="loading-spinner" color="#36d7b7" />;

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
    <Container className={styles.container}>
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
            <CartQtyButtons id={id} price={price} />
          </div>

          <button className={styles.addToBagButton} onClick={() => increaseCartQuantity(id, price)}>
            Add to bag
          </button>
        </div>
      </div>
    </Container>
  );
};
