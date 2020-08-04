import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import Header from './components/Header/Header';
import HookahPage from './components/HookahPage/HookahPage';
import ProductPage from './components/ProductPage/ProductPage';
import AddPage from './components/AddPage/AddPage';
import AssectoriesPage from './components/AssectoriesPage/AssectoriesPage.js'

const location = window.location.hostname;
const client = new ApolloClient({
  uri: `http://${location}:4000/graphql`
});


function App() {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <div className="App">
        <Header />

        <Route  path={'/hookah'} render={() => <HookahPage />}/>

        <Route path={'/add'} render={() => <AddPage />} />
        <Route path={'/assectories'} render={() => <AssectoriesPage />} />
      </div>
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
