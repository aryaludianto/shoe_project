import { combineReducers } from 'redux';
import { getProductsReducer } from './ProductsReducer';

const rootReducer = combineReducers({
  products: getProductsReducer,
});

export default rootReducer;
