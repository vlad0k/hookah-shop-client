import React from 'react';
// import style from './BrandsList.module.css'
import { useQuery } from '@apollo/client';


import ItemsList from '../../components/ItemsList/ItemsList';
import CloseButton from '../../components/CloseButton/CloseButton';

const BrandsList = ({category, brand, query, setBrand, setProduct}) => {
  let items = [];
  const {loading, error, data } = useQuery(query, {variables: { id: brand}})
  if (error) return <div>error</div>
  if (loading) return <div>Loading...</div>
  if (data.hookahBrand && category === 'hookah') items = data.hookahBrand.hookahs
  if (data.assectoryCategory && category === 'assectories') items = data.assectoryCategory.items
  console.log(loading, error, data);
  window.sp = setProduct
  return (
    <div>
      <CloseButton action={[setBrand, setProduct]} />

      <div>
        <ItemsList items={items} pick={(id, items) => {
          setProduct(null)
          setTimeout(() => setProduct(items.filter(i => i.id === id)))
          
        }}/>
      </div>
    </div>
  )
}

export default BrandsList;
