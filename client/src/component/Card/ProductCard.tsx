import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
// import axios from 'axios';
// import Loader from "react-loader-spinner";
import { NavLink } from 'react-router-dom';

const Card = styled.div`
  display: flex;
  height: 600px;
  width: 400px;
  margin: 10px;
  /* justify-content:center; */
  flex-direction:column;

  &:hover{
    cursor: pointer;
    background: rgb(245, 245, 245) none repeat scroll 0% 0%;
  }
`

const ImageContainer = styled.img`
  height: 450px;
  width: 100%;
  margin-top:0;
`

const StockColorsContainer = styled.div`
  height:30px;
  width:100%;
  display:flex;
  flex-direction:row;
  margin: 5px 0;
`

interface Properties {
  brand?: String
  product: { name: String, brand: String, type: String, gender: String, stock: any, category: String }
}

const ProductCard: FC<Properties> = ({
  product
}) => {

  const [imageColor, setImageColor] = useState("");

  useEffect(() => {
    imageColor === "" && setImageColor(product.stock[0].color)
  })


  const ProductImage = product.stock.map((stock: any) => {
    if (stock.color === imageColor)
      return (<ImageContainer src={stock.imageUrl[0]} alt={`image of ${product.name} color ${stock.color}`} />)
  })

  const StockColours = product.stock.map((stock: any) => {
    return (<img onMouseEnter={() => setImageColor(stock.color)} src={stock.imageUrl[0]} alt={`${product.name} ${stock.color}`} style={{ width: '30px', height: '30px', marginRight: '20px' }} />)
  })

  return (
    <Card>
      <NavLink key={`${product.brand}`} to={{
        pathname: "/product",
        state: { product },
      }} style={{ textDecoration: 'none', color: 'black' }}>
        {ProductImage}
        <StockColorsContainer>
          {StockColours}
        </StockColorsContainer>
        <h5 style={{ margin: '5px 0' }}>{product.brand}</h5>
        <h5 style={{ margin: '5px 0' }}>{product.name}</h5>
        <h5 style={{ margin: '5px 0', opacity: '0.5' }}>{product.category} / {product.gender}</h5>
        <h5 style={{ margin: '5px 0', opacity: '0.5' }}>{product.type}</h5>
      </NavLink>
    </Card>
  )
}

export default ProductCard