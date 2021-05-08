import React, { FC, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Loader from "react-loader-spinner";
import ProductCard from '../Card/ProductCard'

//Example data
import dataExample from '../constant/dataExample'

const BodyContainer = styled.div`
  display: flex;
  flex-direction:column;
  width:100%;
`
const SortBar = styled.div`
  display:flex;
  height: 50px;
  width:100%;
  margin-top:0;
`

const ProductBlock = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  margin:50px auto;
  justify-content:center;
`

const HomePage: FC = () => {

  const products = dataExample.map((data, index) => {
    return (<ProductCard key={`product-key:${index}`} product={data} />)
  })

  return (
    <BodyContainer>
      <SortBar> This is for sorting </SortBar>
      <ProductBlock>
        {products}
      </ProductBlock>
    </BodyContainer>
  )
}

export default HomePage