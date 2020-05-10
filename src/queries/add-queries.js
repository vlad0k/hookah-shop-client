import {gql} from 'apollo-boost';

export const addHookahMutation = gql`
  mutation($name: String!, $brandId: ID!, $price: String!, $url_name: String!, $description: String!){
    addHookah(name: $name, brandId: $brandId, price: $price, url_name: $url_name, description: $description){
      id
    }
  }
`

export const addPictureMutation = gql`
  mutation($name: String!, $type: String!, $relationId: ID!){
    addPicture(name: $name, type: $type, relationId: $relationId){
      id
    }
  }
`

export const addBrandMutation = gql`
  mutation($name: String!, $url_name: String!){
    addBrand(name: $name, url_name: $url_name){
      id
    }
  }
`

export const addAssectoryCategoryMutation = gql`
  mutation($name: String!, $url_name: String!){
    addAssectoryCategory(name: $name, url_name: $url_name){
      id
    }
  }
`

export const addAssectoryItemMutation = gql`
  mutation($name: String!, $categoryId: ID!, $price: String!, $url_name: String!, $description: String!){
    addAssectoryItem(name: $name, categoryId: $categoryId, price: $price, url_name: $url_name, description: $description){
      id
    }
  }
`

// export const getHookahBrandQuery = gql`
//   query ($id: ID){
//     hookahBrand (id: $id){
//       id
//       name
//       pictures {
//         name
//       }
//       hookahs {
//         id
//         name
//         price
//         url_name
//         pictures {
//           name
//         }
//       }
//     }
//   }
// `
