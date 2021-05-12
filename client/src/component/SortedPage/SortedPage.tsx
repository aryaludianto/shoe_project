/* eslint-disable eqeqeq */
import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import Body from '../Body/Body'
import { screenBreakpoints, onDevice } from '../constant/theme'
import { AppState } from '../../redux/store';
import { ProductBlock } from '../HomePage/HomePage'
import ProductCard from '../Card/ProductCard'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/effects/Products';


interface LocationState {
  category: { type: string, toLowerCase: () => string }
  type: { type: string, toLowerCase: () => string }

}

const SortedPage: FC = () => {
  const dispatch = useDispatch();
  const category = useLocation<LocationState>().state.category;
  const type = useLocation<LocationState>().state.type;
  const products = useSelector((state: AppState) => state.products).products;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const sortedProducts = products && products.filter(product => ((product.gender.toLowerCase() === category.toLowerCase()) && (product.type.toLowerCase() === type.toLowerCase()))).map((data, index) => {
    return (<ProductCard key={`product-card:${index}`} product={data} />)
  });

  return (
    <ProductBlock>
      {sortedProducts}
    </ProductBlock>);
}

export default SortedPage