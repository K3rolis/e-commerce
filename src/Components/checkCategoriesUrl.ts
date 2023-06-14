import { useNavigate, useParams } from 'react-router-dom';
import { getCategoriesLocal } from '../api/categories';
import { useEffect, useState } from 'react';

export const CheckCategoriesUrl = () => {
  const { category } = useParams();

  const navigate = useNavigate();
  const checkIfCategoryOfUrlExists = getCategoriesLocal.filter((check) => check.slug === category);

  useEffect(() => {
    if (checkIfCategoryOfUrlExists.length === 0) {
      navigate('/notfound');
    }
  });
};
