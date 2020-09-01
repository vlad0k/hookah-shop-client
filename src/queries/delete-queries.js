import {gql} from 'apollo-boost';

export const removeHookahQuery = gql`
    mutation($id: ID!) {
        removeHookah(id: $id){
            id
        }
    }
`
export const removeHookahBrandQuery = gql`
    mutation($id: ID!) {
        removeHookahBrand(id: $id){
            id
        }
    }
`