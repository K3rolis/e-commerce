import { Link, useParams } from 'react-router-dom';
import { getProduct } from '../../api/products';
import { useQuery } from '@tanstack/react-query';
import { Container } from '../../Components/container/container';
import styles from './singleProduct.module.css';
import { useState } from 'react';
import { Stars } from '../../Components/stars';
import { CartQtyButtons } from '../../Components/cartQtyButtons/cartQtyButtons';
import { CheckCategoriesUrl } from '../../Components/checkCategoriesUrl';
import { AddToCart } from '../../Components/addToCart';
// import { CartItem } from '../cart/cartItem';

export const SingleProduct = () => {
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
  const [quantity, setQuantity] = useState<number>(1);

  if (productQuery.status === 'loading') return <h1>Loading....</h1>;

  if (!productQuery.data)
    return (
      <h1>
        Something went wrong, please go to <Link to={'/'}>Home Page</Link>
      </h1>
    );

  const getQuantity = (num: number) => {
    setQuantity(num);
  };

  const {
    title,
    price,
    description,
    // category,
    image,
    rating: { count, rate },
  } = productQuery?.data;

  const selectedItem = productQuery?.data;

  const setToLocalStorage = {
    id: selectedItem.id,
    title: selectedItem.title,
    price: selectedItem.price,
    image: selectedItem.image,
    quantity: quantity,
  };

  const addToCart = () => {
    let isExist = false;
    const arr = JSON.parse(localStorage.getItem('item') || '[]');

    if (selectedItem) {
      // eslint-disable-next-line array-callback-return
      arr.map((item: cartItems) => {
        if (item.id === setToLocalStorage.id) {
          item.quantity = setToLocalStorage.quantity;
          isExist = true;
        }
      });

      localStorage.setItem('item', JSON.stringify(arr));

      if (!isExist) {
        arr.push(setToLocalStorage);
        localStorage.setItem('item', JSON.stringify(arr));
      }
    }
  };

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
            <CartQtyButtons quantity={getQuantity} />
            <span className={styles.price}>{price}€</span>
          </div>
          <button className={styles.addToBagButton} onClick={addToCart}>
            Add to bag
          </button>
        </div>
      </div>
    </Container>
  );
};
