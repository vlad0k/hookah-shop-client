import React, { useContext } from 'react';
import style from './BreadCrumbs.module.css';

import { Link } from 'react-router-dom';

import { BreadCrumbsContext } from '../../context/BreadCrumbsContext';

const BreadCrumbs = () => {

  const { crumbs } = useContext(BreadCrumbsContext)

  return (
    <div className={style['bread-crumbs']}>
      <ul>
        {
          crumbs.map(c => (
            <li><Link>{c}</Link></li>
          ))
        }
      </ul>
    </div>
  )

}

export default BreadCrumbs;
