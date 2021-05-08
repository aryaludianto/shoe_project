import React, { FC, useState, useEffect } from 'react'
// import { useParams } from 'react-roouter-dom'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import Body from '../Body/Body'

//Example data
import dataExample from '../constant/dataExample'

// const BodyContainer = styled.div`
//   display: flex;
//   flex-direction:column;
//   width:100%;
// `
// const SortBar = styled.div`
//   display:flex;
//   height: 50px;
//   width:100%;
//   margin-top:0;
// `

// const ProductBlock = styled.div`
//   display:flex;
//   flex-direction: row;
//   flex-wrap:wrap;
//   margin:50px auto;
//   justify-content:center;
// `

const BodyContainer = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
height:100%;
width:100%;
`

const ImageContainer = styled.div`
display:flex;
flex-direction:row;
background-color:yellow;
width:100%;
/* height:100vh; */
`

const ListImages = styled.div`
display:flex;
flex-direction:column;
`

const ProductDetailsContainer = styled.div`
display:flex;
flex-direction:column;
background-color:yellow;
width:100%;
`

const MainImage = styled.img`
height: 80%;
width: 100%;
margin: 5px;
transition: transform .2s;

&:hover{
  transform: scale(1.5);
}

`


interface Properties {
  test: any
}

interface LocationState {
  product: any
}

const ProductPage: FC<Properties> = ({ }) => {

  const product = useLocation<LocationState>().state.product;

  console.log(product)


  const imageList = product.stock[0].imageUrl.map((productImage: any, index: Number) => {
    return (
      <img src={productImage} style={{ height: '100px', width: '100px', margin: '5px' }} alt={`ProductImage${index}`} />
    )
  })

  // const imageBig = (<img src={product.stock[0].imageUrl[0]} style={{ height: '80%', width: '100%', margin: '5px' }} alt={`ProductImage${product.stock[0].imageUrl[0]}`} />)
  const imageBig = (<MainImage src={product.stock[0].imageUrl[0]} alt={`ProductImage${product.stock[0].imageUrl[0]}`} />)



  return (
    <Body>
      <BodyContainer>
        <ImageContainer>
          <ListImages>
            {imageList}
          </ListImages>
          {imageBig}
        </ImageContainer>

        <ProductDetailsContainer>
          {product.brand}

        </ProductDetailsContainer>


      </BodyContainer>
    </Body>
  )
}

export default ProductPage