import IProduct from '../interfaces/Product';

export const GET_PRODUCTS = 'GET_PRODUCTS';

export interface GetProductsStateType {
  products: IProduct[];
}

interface GetProductsActionType {
  type: typeof GET_PRODUCTS;
  payload: IProduct[];
}

export type ProductActionTypes = GetProductsActionType;
