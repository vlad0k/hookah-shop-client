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
      hookahs {
        id
        name
        pictures {
          id 
          name
        }
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
        description
        pictures {
          name
        }
      }
    }
  }
`
export const getAssectoryCategoriesQuery = gql`
  {
    assectoryCategories{
      id
      name
      url_name
      pictures {
        name
      }
    }
  }
`

export const getAssectoryCategoryQuery = gql`
  query ($id: ID!){
    assectoryCategory (id: $id){
      id
      name
      pictures {
        name
      }
      items {
        id
        name
        price
        url_name
        description
        pictures {
          name
        }
      }
    }
  }
`
