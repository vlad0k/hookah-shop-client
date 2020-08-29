import React, { useContext, useState, useEffect } from 'react';
import style from './ItemsList.module.css';

import { ServerContext } from '../../context/ServerContext';
import Picker from '../Picker/Picker';

const ItemsList = ({ items, pick, className }) => {

  // const [pictures, setPictures] = useState([])
  // const { server } = useContext(ServerContext);

  return (
    <ul className={style["items-list"]}>
      {items.map((i, index) => {
        
        return (
          <li key={i.id} onClick={() => pick(i.id, i.name, items)}>
            <div>
              <Picker logo={i.pictures[0].name} name={i.name} id={i.id} price={i.price}/>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ItemsList;
