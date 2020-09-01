import React from 'react'
import { Formik, Form, Field } from 'formik'
import styles from './AddPage.module.css'

import { useQuery, useMutation } from '@apollo/react-hooks'
import { getHookahBrandsQuery, getAssectoryCategoriesQuery } from '../../queries/queries'
import {
    addHookahMutation,
    addPictureMutation,
    addBrandMutation,
    addAssectoryCategoryMutation,
    addAssectoryItemMutation
  } from '../../queries/add-queries.js';

import { storage as firebaseStorage } from '../../firebase'

const AddPage = () => {

    const { loading: l1 , error: err1, data: hookahBrandsData } = useQuery(getHookahBrandsQuery, {
        pollInterval: 500,
      });
    const {loading: l2 , error: err2, data: assectoryCategoriesData} = useQuery(getAssectoryCategoriesQuery, {
        pollInterval: 500,
    });

    const[addHookah] = useMutation(addHookahMutation)
    const[addPicture] = useMutation(addPictureMutation)
    const[addBrand] = useMutation(addBrandMutation)
    const[addAssectoryCategory] = useMutation(addAssectoryCategoryMutation)
    const[addAssectoryItem] = useMutation(addAssectoryItemMutation)

    if (l1 || l2) return <h1>Loading...</h1>
    if (err1 || err2) return <p>{err1 && err1.message} {err2 && err2.message}</p>

    const { hookahBrands } = hookahBrandsData
    const { assectoryCategories } = assectoryCategoriesData

    const initialValues = {
        productType: 'hookah',
        name: '',
        price: 0,
        photo: '',
        brandId: '',
        description: ''
    }
    
    const onSubmit = (values, actions) => {
        const url_name = values.name.toLowerCase().split(' ').join('_');
        if(values.productType === 'hookah') {
            const variables = {
                name: values.name,
                brandId: values.brandId,
                price: values.price.toString(),
                url_name: url_name,
                description: values.description
            };
        
            addHookah({variables})
                .then (({data}) => {
        
                    const variables = {
                        name: values.photo.name,
                        type: 'hookah',
                        relationId: data.addHookah.id,
                    }
            
                    addPicture({variables})
                })
        
        }

        if(values.productType === 'brand') {
            const variables = {
                name: values.name,
                url_name: url_name,
            }
        
            addBrand({variables})
                .then(({data}) => {
                    const variables = {
                        name: values.photo.name,
                        type: 'brand',
                        relationId: data.addBrand.id,
                    }
                    addPicture({variables})
                })
        }

        if(values.productType === 'assectory-category') {
            const variables = {
                name: values.name,
                url_name: url_name,
            }
        
            addAssectoryCategory({variables})
                .then(({data}) => {
                    const variables = {
                        name: values.photo.name,
                        type: 'assectory-category',
                        relationId: data.addAssectoryCategory.id,
                    }
                    addPicture({variables})
                })
        }

        if(values.productType === 'assectory') {
            const variables = {
                name: values.name,
                categoryId: values.brandId,
                price: values.price.toString(),
                url_name: url_name,
                description: values.description
            };
        
            addAssectoryItem({variables})
                .then (({data}) => {
        
                    const variables = {
                        name: values.photo.name,
                        type: 'assectory',
                        relationId: data.addAssectoryItem.id,
                    }
        
                    addPicture({variables})
                    
                })
        
        }

        uploadPhoto(values.photo)
        actions.resetForm()
     }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {
                formik => {

                    const { values: { productType, photo } } = formik;
                    console.log(photo);
                    return (
                        <Form className={styles.form}>
                            <label>
                                Item
                                <Field as='select' name='productType' id='productType'>
                                    <option value='hookah' default>Hookah</option>
                                    <option value='assectory'>Assectory</option>
                                    <option value='assectory-category'>Category of assectories</option>
                                    <option value='brand'>Brand</option>
                                </Field>
                            </label>
                            
                            <label>
                                Name
                                <Field type='text' name='name' />
                            </label>

                            {
                                ['hookah', 'assectory'].some(e => productType === e) && <label>
                                    Price
                                    <Field type='number' name='price' />
                                </label>
                            }

                            {
                                ['hookah', 'assectory'].some(e => productType === e) && <label>
                                    Brand or Category
                                    <Field as='select' name='brandId'>
                                        <option value="" default disabled>-- choose -- </option>
                                        {
                                            productType === 'hookah' && hookahBrands.map(h => (
                                                <option key={h.id} value={h.id}>{h.name}</option>
                                            ))
                                        }

{
                                            productType === 'assectory' && assectoryCategories.map(a => (
                                                <option key={a.id} value={a.id}>{a.name}</option>
                                            ))
                                        }

                                    </Field>
                                </label>
                            }

                            <label>
                                Description
                                <Field as='textarea' name='description' />
                            </label>

                            <label>
                                Picture
                                <input name='photo' type='file' defaultValue='' onChange={e => formik.setFieldValue('photo', e.target.files[0])} />
                            </label>

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            }
            
        </Formik>
    );
}

export default AddPage;

const uploadPhoto = (photo) => {
    const storageRef = firebaseStorage.ref(photo.name)
    storageRef.put(photo)
}