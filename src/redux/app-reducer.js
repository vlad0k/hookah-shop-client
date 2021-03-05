const SET_CATEGORY = 'SET-CATEGORY'
const SET_BRAND = 'SET-BRAND'
const SET_PPRODUCT = 'SET-PRODUCT'
const SET_CART_DISPLAY = 'SET-CART-DISPLAY'

const initialState = {
  category: null,
  brand: null,
  product: null,
  displayCart: false
}

const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_CATEGORY: {
      return {
        ...state,
        category: action.category,
        brand: null,
        product: null
      }
    }

    case SET_BRAND: {
      return {
        ...state,
        brand: action.brand,
        brandName: action.brandName
      }
    }

    case SET_PPRODUCT: {
      return {
        ...state,
        product: action.product
      }
    }

    case SET_CART_DISPLAY: {
      return {
        ...state,
        displayCart: action.displayCart
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}

export const setCategory = (category) => ({type: SET_CATEGORY, category})
export const setBrand = (brand, brandName) => ({type: SET_BRAND, brand, brandName})
export const setProduct = (product) => ({type: SET_PPRODUCT, product})
export const setCartDisplay = (displayCart) => ({type: SET_CART_DISPLAY, displayCart})

export default appReducer;
