import { FETCH_USER_SUCCESS, FETCH_PRODUCTS_SUCCESS } from "../actions/redeemActions"
  
const initialState = {
  user: {},
  products: []
}

export const redeemReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_USER_SUCCESS: {
      return {...state, ...action.payload}
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {...state, ...action.payload}
    }
    default:
      return state
  }
}


