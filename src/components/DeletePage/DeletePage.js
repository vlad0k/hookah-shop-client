
import React from 'react'
import styles from './DeletePage.module.css'

import { useQuery, useMutation } from '@apollo/react-hooks'
import { getHookahBrandsQuery, getAssectoryCategoriesQuery } from '../../queries/queries'
import { removeHookahQuery, removeHookahBrandQuery, removeAssectoryItemQuery, removeAssectoryCategoryQuery } from '../../queries/delete-queries'
import { IoIosClose, IoIosArrowForward } from "react-icons/io"

const DeletePage = () => {

    const { loading: l1 , error: err1, data: hookahBrandsData } = useQuery(getHookahBrandsQuery, {
        pollInterval: 500,
      });
    const {loading: l2 , error: err2, data: assectoryCategoriesData} = useQuery(getAssectoryCategoriesQuery, {
        pollInterval: 500,
      });

    const [deleteHookahBrandMutation] = useMutation(removeHookahBrandQuery)
    const [deleteHookahMutation] = useMutation(removeHookahQuery)
    const [deleteAssectoryCategoryMutation] = useMutation(removeAssectoryCategoryQuery)
    const [deleteAssectoryItemMutation] = useMutation(removeAssectoryItemQuery)

    const deleteBrand = (id, name) => {
        let ask = window.confirm(`Удалить ${name}?`);
        if (!ask) return
        const variables = {id}
        deleteHookahBrandMutation({variables}).then((data,err) => (err && console.log(err)))
    }

    const deleteHookah = (id, name) => {
        let ask = window.confirm(`Удалить ${name}?`);
        if (!ask) return
        const variables = {id}
        deleteHookahMutation({variables}).then((data,err) => (err && console.log(err)))
    }

    const deleteAssectoryCategory = (id, name) => {
        let ask = window.confirm(`Удалить ${name}?`);
        if (!ask) return
        const variables = {id}
        deleteAssectoryCategoryMutation({variables}).then((data,err) => (err && console.log(err)))
    }

    const deleteAssectoryItem = (id, name) => {
        let ask = window.confirm(`Удалить ${name}?`);
        if (!ask) return
        const variables = {id}
        deleteAssectoryItemMutation({variables}).then((data,err) => (err && console.log(err)))
    }

    if (l1 || l2) return <h1>Loading...</h1>
    if (err1 || err2) return <p>{err1 && err1.message} {err2 && err2.message}</p>

    return (
        <>
        <h1>Кальяны</h1>
        <div className={styles.deletePage}>
            <ul>
                { 
                    hookahBrandsData.hookahBrands.map(hb => 
                        (
                            <li key={hb.id}>
                                <div>
                                    <div>{hb.name}</div>
                                    <div onClick={() => (deleteBrand(hb.id, hb.name))}><IoIosClose color='#1565c0' size={30}/></div>
                                    <IoIosArrowForward color='#1565c0' size={30}/>
                                </div>
                                <div>
                                    <ul className={styles.hookahList}>
                                        {
                                            hb.hookahs.map(h => (
                                                <li key={h.id}>
                                                    <div>{h.name}</div>
                                                    <div onClick={() => deleteHookah(h.id, h.name)}><IoIosClose color='#1565c0' size={30}/> </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    
                                </div>
                            </li>
                        )
                    )
                }
            </ul>
        </div>

        <div className={styles.deletePage}>
        <h1>Аксессуары</h1>
        <ul>
            { 
                assectoryCategoriesData.assectoryCategories.map(hb => 
                    (
                        <li key={hb.id}>
                            <div>
                                <div>{hb.name}</div>
                                <div onClick={() => (deleteAssectoryCategory(hb.id, hb.name))}><IoIosClose color='#1565c0' size={30}/></div>
                                <IoIosArrowForward color='#1565c0' size={30}/>
                            </div>
                            <div>
                                <ul className={styles.hookahList}>
                                    {
                                        hb.items.map(h => (
                                            <li key={h.id}>
                                                <div>{h.name}</div>
                                                <div onClick={() => deleteAssectoryItem(h.id, h.name)}><IoIosClose color='#1565c0' size={30}/> </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                                
                            </div>
                        </li>
                    )
                )
            }
        </ul>
    </div>
    </>
    );
}

export default DeletePage
