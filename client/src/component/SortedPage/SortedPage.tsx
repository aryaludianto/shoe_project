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
  category: String
  type: string
}

const SortedPage: FC = () => {
  const dispatch = useDispatch();
  const category = useLocation<LocationState>().state.category.toLowerCase();
  const type: string = useLocation<LocationState>().state.type;
  const products = useSelector((state: AppState) => state.products).products;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  //TODO: why filter is not working
  // const sortedProducts = products && products.map(product =>{ 
  //   if(product.gender == category){

  //   return (<ProductCard key={`product-card:${index}`} product={data} />)

  //   }
  // });

  console.log({ category, type, products })

  const sortedProducts = products
    .map((data, index) => {
      return (<ProductCard key={`product-card:${index}`} product={data} />)
    })



  return (
    <ProductBlock>
      {sortedProducts}
    </ProductBlock>);
}

export default SortedPage