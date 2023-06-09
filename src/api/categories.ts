import Axios from 'axios';
import data from '../data/categories.json';

export const getCategories = async () => {
  return await Axios.get('https://fakestoreapi.com/products/categories').then((res) => res.data);
};

export const getCategoriesLocal = data;
