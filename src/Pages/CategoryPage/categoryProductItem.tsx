import { NavLink } from 'react-router-dom';
import styles from './categoryPage.module.css';
import { useParams } from 'react-router-dom';
import { AddToCart } from '../../Components/addToCart';

export interface Props {
  id: string;
  image: string;
  title: string;
}

export const CategoryProductItem = (props: Props) => {
  const { category } = useParams();
  return (
    <div className={styles.productItem}>
      <NavLink to={`/shop/${category}/${props.id}`}>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} loading="lazy" />
        </div>
        <p className={styles.title}> {props.title}</p>
      </NavLink>
      <button type="button">Add to bag</button>
    </div>
  );
};
