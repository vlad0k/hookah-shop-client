import { ApolloProvider } from '@apollo/client'
import ApolloClient from 'apollo-boost';
import React from 'react';
import style from './App.module.css'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import store from './redux/store'

import Header from './components/Header/HeaderContainer'
import Content from './components/Content/ContentContainer'
import AddPage from './components/AddPage/AddPage'

import ServerContextProvider from './context/ServerContext';

const App = () => {

  const location = window.location.hostname;
  const myGraphQLClient = new ApolloClient({
    uri: `http://${location}:4000/graphql`
  });

  // const myGraphQLClient = new ApolloClient({
  //   uri: `https://${location}/graphql`
  // });

  return (
    <div className={style.App}>
      <Router>
        <ServerContextProvider>
            <ApolloProvider client={myGraphQLClient} >
              <Provider store={store}>
                <Switch>
                  <Route path='/' exact>
                    <Header />
                    <Content />
                  </Route>
                  <Route path='/add' exact>
                     <AddPage />
                  </Route>
                </Switch>
              </Provider>
            </ApolloProvider>
        </ServerContextProvider>
      </Router>
    </div>
  );
}

export default App;