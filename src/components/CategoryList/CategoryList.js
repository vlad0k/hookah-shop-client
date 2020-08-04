import React from 'react';
import { useQuery } from '@apollo/client';

import ItemsList from '../../components/ItemsList/ItemsList';

import { getHookahBrandsQuery, getAssectoryCategoriesQuery } from '../../queries/queries'


const CategoryList = ({ category, setBrand }) => {
  let items = [];
  const hookahBrands = useQuery(getHookahBrandsQuery);
  const assectoryCategories = useQuery(getAssectoryCategoriesQuery);

  if (!category) return (<div></div>)
  if (hookahBrands.loading || assectoryCategories.loading) return <p>Loading...</p>
  else if (hookahBrands.error || assectoryCategories.error) return <p>Error...</p>
  else if (category === 'hookah') items = hookahBrands.data.hookahBrands
  else items = assectoryCategories.data.assectoryCategories

  return(
      <ItemsList items={ items } pick={setBrand}/>
  )
}

export default CategoryList;
