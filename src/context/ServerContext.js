import React, { createContext } from 'react';

export const ServerContext = createContext();

const ServerContextProvider = (props) => {

  const location = window.location.hostname;
  const server = `http://${location}:4000`;

  return (
    <ServerContext.Provider value={{ server }}>
      { props.children }
    </ServerContext.Provider>
  )
}

export default ServerContextProvider;
