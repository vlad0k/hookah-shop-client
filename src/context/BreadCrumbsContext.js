import React, { createContext, useState } from 'react';

export const BreadCrumbsContext = createContext();

const BreadCrumbsProvider = (props) => {

  const [crumbs, setCrumbs] = useState([
    {
      name:'кальяны',
      to: '/hookah'
    },
    {
      name:'alpha-hookah',
      to: '/hookah/alpha-hookah'
    },
    {
      name:'model x',
      to: '/hookah/model-x'
    }
  ]);

  const addCrumb = (name, to) => {
    setCrumbs([...crumbs, { name, to }]);
  }

  return (
      <BreadCrumbsContext.Provider value={{ crumbs, addCrumb }}>
        { props.children }
      </BreadCrumbsContext.Provider>
  )
}

export default BreadCrumbsProvider;
