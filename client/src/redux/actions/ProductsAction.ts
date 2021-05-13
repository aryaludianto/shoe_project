import { GET_PRODUCTS, ProductActionTypes } from '../types/GetProduct';
import IProduct from '../interfaces/Product';

export const getProductsAction = (products: IProduct[]): ProductActionTypes => {
  return {
    type: GET_PRODUCTS,
    payload: products,
  };
};
