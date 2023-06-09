import { useParams, useNavigate } from 'react-router-dom';
import { getCategoriesLocal } from '../../api/categories';
import { useEffect } from 'react';
import { getProductsByCategory } from '../../api/products';
import { useQuery } from '@tanstack/react-query';
import { Container } from '../../Components/container/container';
import styles from './categoryPage.module.css';
import { CategoryProductItem, Props } from './categoryProductItem';
import { CheckCategoriesUrl } from '../../Components/checkCategoriesUrl';

export const CategoryPage = () => {
  const { category } = useParams();

  // const navigate = useNavigate();
  // const checkIfCategoryOfUrlExists = getCategoriesLocal.filter((check) => check.slug === category);

  const checkedCategory = () => {
    for (const categoryOfProducts of getCategoriesLocal) {
      if (categoryOfProducts.slug === category) {
        return categoryOfProducts.title;
      }
    }
  };
  CheckCategoriesUrl();

  // useEffect(() => {
  //   if (checkIfCategoryOfUrlExists.length === 0) {
  //     navigate('/notfound');
  //   }
  // });

  const productsQuery = useQuery({
    queryKey: ['productsByCategory', category],
    queryFn: () => getProductsByCategory(checkedCategory()),
  });

  //   getProductsByCategory(checkedCategory()).then((item) => console.log(item));
  if (productsQuery.status === 'loading') return <h1>Loading...</h1>;
  return (
    <Container>
      <div className={styles.category}> {checkedCategory()}</div>
      <div className={styles.productItemWrapper}>
        {productsQuery.data.map((props: Props, index: number) => (
          <CategoryProductItem key={index} {...props} />
        ))}
      </div>
    </Container>
  );
};
