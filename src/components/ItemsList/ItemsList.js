import React, { useContext } from 'react';
import style from './ItemsList.module.css';

import { NavLink, useRouteMatch } from 'react-router-dom';
import { ServerContext } from '../../context/ServerContext';
import Picker from '../Picker/Picker';

const ItemsList = ({ items }) => {

  const { url } = useRouteMatch();
  const { server } = useContext(ServerContext);

  return (
    <ul className={style["items-list"]}>
      {items.map(i => (
        <li key={i.id}>
          <NavLink to={`${url}/${i.url_name}`}>
            <Picker logo={server + '/picture/' + i.pictures[0].name} name={i.name} />
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default ItemsList;
