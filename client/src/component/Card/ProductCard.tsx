import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const Card = styled.div`
  display: flex;
  height: 650px;
  width: 400px;
  margin: 10px;
  flex-direction:column;

  &:hover{
    cursor: pointer;
    background: rgb(245, 245, 245) none repeat scroll 0% 0%;
  }
`

const ImageContainer = styled.img`
  height: 500px;
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

  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    selectedImage === "" && setSelectedImage(product.stock[0].color)
  }, [selectedImage, product])


  const ProductImage = product.stock.map((stock: any, index: number) => {
    if (stock.color === selectedImage)
      return (<ImageContainer key={`product-image-${index}`} src={stock.imageUrl[0]} alt={`image of ${product.name} color ${stock.color}`} />)
    else
      return null
  })

  const StockColours = product.stock.map((stock: any, index: number) => {
    return (<img key={`color product ${index}`} onMouseEnter={() => setSelectedImage(stock.color)} src={stock.imageUrl[0]} alt={`${product.name} ${stock.color}`} style={{ width: '30px', height: '30px', marginRight: '20px' }} />)
  })

  return (
    <Card key={`productCard ${product.brand} ${product.name}`}>
      <NavLink key={`${product.brand}`} to={{
        pathname: "/product",
        state: { product, selectedColor: selectedImage },
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