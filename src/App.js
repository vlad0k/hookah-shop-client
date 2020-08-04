import './App.css';

import { ApolloProvider } from 'react-apollo';
import {BrowserRouter, Route} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import React from 'react';

import AddPage from './pages/AddPage/AddPage';
import ContentPage from './pages/ContentPage/ContentPage';
import Header from './components/Header/Header';
import ServerContextProvider from './context/ServerContext';
import BreadCrumbsProvider from './context/BreadCrumbsContext';

const App = () => {

  const location = window.location.hostname;
  const myGraphQLClient = new ApolloClient({
    uri: `http://${location}:4000/graphql`
  });

  return (
    <ServerContextProvider>
      <BreadCrumbsProvider>
        <BrowserRouter>
          <ApolloProvider client={myGraphQLClient}>

            <Header />

            <Route path='/' component={ContentPage} />

            <Route path='/add' exact component={AddPage} />

          </ApolloProvider>
        </BrowserRouter>
      </BreadCrumbsProvider>
    </ServerContextProvider>
  );
}

export default App;
