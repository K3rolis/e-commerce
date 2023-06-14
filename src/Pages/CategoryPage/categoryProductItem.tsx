import { NavLink } from 'react-router-dom';
import styles from './categoryPage.module.css';
import { useParams } from 'react-router-dom';
import { useShoppingCart } from '../../context/ShoppingCartContext';

export interface CategoryProductProps {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

export const CategoryProductItem = (props: CategoryProductProps) => {
  const { category } = useParams();
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <div className={styles.productItem}>
      <NavLink to={`/shop/${category}/${props.id}`}>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} loading="lazy" />
        </div>
        <p className={styles.title}> {props.title}</p>
      </NavLink>
      <button type="button" onClick={() => increaseCartQuantity(props.id, props.price)}>
        Add to bag
      </button>
    </div>
  );
};
