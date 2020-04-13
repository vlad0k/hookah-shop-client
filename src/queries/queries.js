import {gql} from 'apollo-boost';

export const getHookahBrandsQuery = gql`
  {
    hookahBrands{
      id
      name
      url_name
      pictures {
        name
      }
    }
  }
`
export const getHookahBrandQuery = gql`
  query ($id: ID){
    hookahBrand (id: $id){
      id
      name
      pictures {
        name
      }
      hookahs {
        id
        name
        price
        url_name
        pictures {
          name
        }
      }
    }
  }
`
