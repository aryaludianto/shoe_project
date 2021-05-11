import { getProductsAction } from '../actions/ProductsAction';
import { Dispatch } from 'redux';
import { ProductActionTypes } from '../types/GetProduct';
import axios from 'axios';

export const getProducts = () => {
  return function (dispatch: Dispatch<ProductActionTypes>) {
    // const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

    axios
      .get('product')
      .then((res) => {
        // setProductData(res.data);
        // setIsLoading(false);
        dispatch(getProductsAction(res.data));
      })
      .catch((err) => {
        console.error(err);
      });

    // fetch(POST_URL, {
    //   method: 'GET',
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatch(getProductsAction(data));
    //     return data;
    //   });
  };
};
