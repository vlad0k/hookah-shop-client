import React, { createContext, useContext } from 'react';

import { ServerContext } from './ServerContext';

export const LogoContext = createContext();

const LogoContextProvider = (props) => {

  const { server } = useContext(ServerContext);

  const logo = server + '/logo';

  return (
      <LogoContext.Provider value={{ logo }}>
        { props.children }
      </LogoContext.Provider>
  )
}

export default LogoContextProvider;
