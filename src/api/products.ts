import Axios from 'axios';

export const getProductsByCategory = async (category?: string) => {
  return await Axios.get(`https://fakestoreapi.com/products/category/${category}`).then((res) => res.data);
};

export const getProduct = async (id: number) => {
  const res = await Axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
};
