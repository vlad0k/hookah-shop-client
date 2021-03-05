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
import DeletePage from './components/DeletePage/DeletePage';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';

const App = () => {

  // const location = window.location.hostname;
  // const myGraphQLClient = new ApolloClient({
  //   uri: `http://${location}:4000/graphql`
  // });

  // const myGraphQLClient = new ApolloClient({
  //   uri: `https://${location}/graphql`
  // });

  const myGraphQLClient = new ApolloClient({
    uri: `https://hookah-shop-server.herokuapp.com/graphql`
  });


  return (
    <div className={style.App}>
      <Router>
        <ServerContextProvider>
            <ApolloProvider client={myGraphQLClient} >
              <CartContextProvider>
                <Provider store={store}>
                  <Switch>

                    <Route path='/' exact>
                      <Header />
                      <Content />
                      
                    </Route>
                    <Route path='/add' exact>
                      <AddPage />
                    </Route>
                    <Route path='/delete' exact>
                      <DeletePage />
                    </Route>
                    <Route path='/cart' exact>
                        <Cart />
                    </Route>
                    
                  </Switch>      
                </Provider>
              </CartContextProvider>
            </ApolloProvider>
        </ServerContextProvider>
      </Router>
    </div>
  );
}

export default App;