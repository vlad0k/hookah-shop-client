import React, { useContext } from 'react';
import style from './ItemsList.module.css';

import { ServerContext } from '../../context/ServerContext';
import Picker from '../Picker/Picker';

const ItemsList = ({ items, pick, className }) => {

  const { server } = useContext(ServerContext);

  return (
    <ul className={style["items-list"]}>
      {items.map(i => (
        <li key={i.id} onClick={() => pick(i.id, items)}>
          <div>
            <Picker logo={server + '/picture/' + i.pictures[0].name} name={i.name} id={i.id} price={i.price}/>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ItemsList;
