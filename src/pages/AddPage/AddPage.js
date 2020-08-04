import React, { useState } from 'react';
import './AddPage.module.css';


import { useQuery, useMutation } from '@apollo/react-hooks';

import {
  addHookahMutation,
  addPictureMutation,
  addBrandMutation,
  addAssectoryCategoryMutation,
  addAssectoryItemMutation
} from '../../queries/add-queries.js';

import { getHookahBrandsQuery, getAssectoryCategoriesQuery } from '../../queries/queries';



const AddPage = (props) => {
  const [formState, setFormState] = useState({
    productType: 'hookah',
    name: '',
    price: null,
    file: '',
    brandId: null,
    url_name: null,
    description: null
  });

  const dataBrands = useQuery(getHookahBrandsQuery).data;
  const dataAssectories = useQuery(getAssectoryCategoriesQuery).data;

  const[addHookah] = useMutation(addHookahMutation);
  const[addPicture] = useMutation(addPictureMutation);
  const[addBrand] = useMutation(addBrandMutation);
  const[addAssectoryCategory] = useMutation(addAssectoryCategoryMutation)
  const[addAssectoryItem] = useMutation(addAssectoryItemMutation)

  const inputChangeHandler = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  const formHandler = (e) => {
    e.preventDefault();
    console.log(formState);
    const url_name = formState.name.toLowerCase().split(' ').join('_');
    if(formState.productType === 'hookah') {
      const variables = {
        name: formState.name,
        brandId: formState.brandId,
        price: formState.price,
        url_name: url_name,
        description: formState.description
      };

      addHookah({variables})
        .then (({data}) => {

          const variables = {
            name: formState.file.split('\\').pop(),
            type: 'hookah',
            relationId: data.addHookah.id,
          }

          addPicture({variables})

        })

    }

    if(formState.productType === 'brand') {
      const variables = {
        name: formState.name,
        url_name: url_name,
      }

      addBrand({variables})
        .then(({data}) => {
          const variables = {
            name: formState.file.split('\\').pop(),
            type: 'brand',
            relationId: data.addBrand.id,
          }
          addPicture({variables})
        })
    }

    if(formState.productType === 'assectory-category') {
      const variables = {
        name: formState.name,
        url_name: url_name,
      }

      addAssectoryCategory({variables})
        .then(({data}) => {
          const variables = {
            name: formState.file.split('\\').pop(),
            type: 'assectory-category',
            relationId: data.addAssectoryCategory.id,
          }
          addPicture({variables})
        })
    }

    if(formState.productType === 'assectory') {
      const variables = {
        name: formState.name,
        categoryId: formState.brandId,
        price: formState.price,
        url_name: url_name,
        description: formState.description
      };

      addAssectoryItem({variables})
        .then (({data}) => {

          const variables = {
            name: formState.file.split('\\').pop(),
            type: 'assectory',
            relationId: data.addAssectoryItem.id,
          }

          addPicture({variables})

        })

    }

  }

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={formHandler}>
        <select onChange={inputChangeHandler} name='productType' value={formState.productType}>
          <option value='hookah' default>Hookah</option>
          <option value='assectory'>Assectory</option>
          <option value='assectory-category'>Category of assectories</option>
          <option value='brand'>Brand</option>
        </select>

        <input onChange={inputChangeHandler} placeholder='Name' name='name' value={formState.name}/>
        {(formState.productType === 'hookah' || formState.productType === 'assectory') && <input onChange={inputChangeHandler} type='number' name='price' placeholder='price' value={formState.price}></input>}

        {(formState.productType === 'hookah' || formState.productType === 'assectory') && (<select onChange={inputChangeHandler} name='brandId' value={formState.brandId}>
          {formState.productType === 'hookah' && dataBrands && dataBrands.hookahBrands.map((b) => (
            <option value={b.id}>{b.name}</option>
          ))}
          {formState.productType === 'assectory' && dataAssectories && dataAssectories.assectoryCategories.map((b) => (
            <option value={b.id}>{b.name}</option>
          ))}
        </select>)}

        { (formState.productType === 'hookah' || formState.productType === 'assectory') && <textarea onChange={inputChangeHandler} name='description' placeholder='Description' value={formState.description}></textarea>}
        <input onChange={inputChangeHandler} type='file' name='file' value={formState.file}></input>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default (AddPage);
