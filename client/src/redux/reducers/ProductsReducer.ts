import {
  GET_PRODUCTS,
  GetProductsStateType,
  ProductActionTypes,
} from '../types/GetProduct';

const initialStateGetPosts: GetProductsStateType = {
  products: [],
};

export const getProductsReducer = (
  state = initialStateGetPosts,
  action: ProductActionTypes
): GetProductsStateType => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
