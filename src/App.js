import { ApolloProvider } from '@apollo/client'
import ApolloClient from 'apollo-boost';
import React from 'react';
import { Provider } from 'react-redux'

import store from './redux/store'

import Header from './components/Header/HeaderContainer'
import Content from './components/Content/ContentContainer'

import ServerContextProvider from './context/ServerContext';

const App = () => {

  const location = window.location.hostname;
  const myGraphQLClient = new ApolloClient({
    uri: `http://${location}:4000/graphql`
  });

  return (
    <ServerContextProvider>
        <ApolloProvider client={myGraphQLClient} >
          <Provider store={store}>
            <Header />
            <Content />
          </Provider>
        </ApolloProvider>
    </ServerContextProvider>
  );
}

export default App;
