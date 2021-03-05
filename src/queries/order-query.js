import {gql} from 'apollo-boost';

export const makeOrderQuery = gql`
  mutation($fio: String!, $email: String!, $country: String!, $city: String!, $postOffice: String!, $cart: String!){
    makeOrder (fio: $fio, email: $email, country: $country, city: $city, postOffice: $postOffice, cart: $cart){
        id
        fio
        email
        country
        city
        postOffice
        cart
    }
  }
`