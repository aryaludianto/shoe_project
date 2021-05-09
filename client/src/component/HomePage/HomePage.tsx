import React, { FC, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Loader from "react-loader-spinner";
import ProductCard from '../Card/ProductCard'
import Body from '../Body/Body'
import images from '../../img'

//Example data
import dataExample from '../constant/dataExample'

const BodyContainer = styled.div`
  display: flex;
  flex-direction:column;
  width:100%;
  margin: 0 20px;
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

const HeroContainer = styled.div`
  margin: 0 auto;
`

const HomePage: FC = () => {

  const products = dataExample.map((data, index) => {
    return (<ProductCard key={`product-card:${index}`} product={data} />)
  })

  const { hero1 } = images

  return (
    <Body>

      {/* <BodyContainer> */}
      {/* <SortBar> This is for sorting </SortBar> */}
      <HeroContainer>
        <img src={hero1} alt={'hero1'} />
      </HeroContainer>
      <ProductBlock>
        {products}
      </ProductBlock>
      {/* </BodyContainer> */}
    </Body>
  )
}

export default HomePage