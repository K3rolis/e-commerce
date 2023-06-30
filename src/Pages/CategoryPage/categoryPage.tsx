import { useParams } from 'react-router-dom';
import { getCategoriesLocal } from '../../api/categories';
import { getProductsByCategory } from '../../api/products';
import { useQuery } from '@tanstack/react-query';
import { Container } from '../../Components/Container/Container';
import styles from './CategoryPage.module.css';
import { CategoryProductItem, CategoryProductProps } from './CategoryProductItem';
import { CheckCategoriesUrl } from '../../Components/checkCategoriesUrl';
import { SyncLoader } from 'react-spinners';

export const CategoryPage = () => {
  const { category } = useParams();

  const checkedCategory = () => {
    for (const categoryOfProducts of getCategoriesLocal) {
      if (categoryOfProducts.slug === category) {
        return categoryOfProducts.title;
      }
    }
  };
  CheckCategoriesUrl();

  const productsQuery = useQuery({
    queryKey: ['productsByCategory', category],
    queryFn: () => getProductsByCategory(checkedCategory()),
  });

  if (productsQuery.status === 'loading') return <SyncLoader className="loading-spinner" color="#36d7b7" />;
  return (
    <Container>
      <div className={styles.category}> {checkedCategory()}</div>
      <div className={styles.productItemWrapper}>
        {productsQuery.data.map((props: CategoryProductProps, index: number) => (
          <CategoryProductItem key={index} {...props} />
        ))}
      </div>
    </Container>
  );
};
