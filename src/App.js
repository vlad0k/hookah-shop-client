import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import Header from './components/Header/Header';
import HookahPage from './components/HookahPage/HookahPage';
import ProductPage from './components/ProductPage/ProductPage';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


function App() {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <div className="App">
        <Header />

        <Route  path={'/hookah'} render={() => <HookahPage />}/>
        <Route
          path={`/hookah/alpha-hookah/x`}
          exact
          render={() => <ProductPage logo='https://lh3.googleusercontent.com/proxy/CELOdjYYi9SMJhnC1EfeSYnNHbKgkvT6fWFAIIUyAhqKqRn8a9W3j93O7H1pzK5-e-zQp9M4CwAryr5q4ULKVrOVsILdXzdRqpPUDm6hWgUoXtOdVCITV8z7UPY'/>}
        />
      </div>
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
