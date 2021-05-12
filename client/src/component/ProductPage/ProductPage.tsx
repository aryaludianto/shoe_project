import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import Body from '../Body/Body'
import DropDownSize from './DropDownSize';
import { onDevice } from '../constant/theme'
import deliveryImage from '../../img/delivery.png'
import leftCurveArrow from '../../img/left_curve_arrow.png'
import IProduct from '../../redux/interfaces/Product'


const BodyContainer = styled.div`
display:flex;
flex-direction:row;
height:100%;
width:100%;

${onDevice.mobileL}{
  display:flex;
  flex-direction:column;
}
`

interface IListImages {
  direction: string
}

const ListImages = styled.div <IListImages>`
  display:flex;
  flex-direction: ${(p) => p.direction};
`

const ImageContainer = styled.div`
  display:flex;
  flex-direction:row;
  width:50%;
  margin:20px;
  
  ${onDevice.mobileL}{
    margin:0;
  }

  ${onDevice.mobileS}{
    ${ListImages}{
      display:none;
    }
    
    height:600px;
    width:100%;
  }
`

const ProductDetailsContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 400px;
  height:100%;
  margin:20px;
  margin-left:100px;
  
  ${onDevice.mobileL}{
    width:94%;
    margin:10px;
  }

`

const MainImage = styled.img`
height: 80%;
width: 100%;
margin: 5px;
transition: transform .2s;
`

interface IImageSmall {
  isSelected?: boolean
}

const ImageSmall = styled.img<IImageSmall>`
  height: 100px;
  width: 100px;
  margin: 5px;

  ${(p) => p.isSelected && `border: 3px solid gold;`}

  &:hover{
    border: 3px solid yellow;
    cursor: pointer;
  }
`

const BuyButtonContainer = styled.div`
  display:flex;
  flex-direction:column;
  height: 100%;
  margin-top:20px;
  margin-bottom:20px;

`

const DeliveryInfo = styled.div`
  display:flex;
  flex-direction:column;
  height: 230px;
  margin-top:20px;
  margin-bottom:20px;
  border: 1px solid gray;
`

const BuyButton = styled.button`
  display:flex;
  width:100%;
  margin-top:20px;
  background-color: gold;
  border-radius: 0;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  &:hover{
    opacity:0.5;
    cursor: pointer;
  }
`

interface LocationState {
  product: IProduct
  selectedColor: string
}

const ProductPage: FC = () => {

  const product = useLocation<LocationState>().state.product;
  const selectedColor = useLocation<LocationState>().state.selectedColor;
  const [selectedColorProduct, setSelectedColorProduct] = useState(selectedColor);
  const selectedColorImageList = product.stock.filter((stock: any) => stock.color === selectedColorProduct)[0];
  const [selectedImageProduct, setSelectedImageProduct] = useState(selectedColorImageList.imageUrl[0]);
  const [selectedSize, setSelectedSize] = useState(Number);
  const [openSizeDropDown, setOpenSizeDropDown] = useState(false);

  const handleProductColorChange = (productColor: string, productImage: string) => {
    setSelectedColorProduct(productColor);
    setSelectedImageProduct(productImage);
    setSelectedSize(0);
    setOpenSizeDropDown(false)
  }

  const handleBuyButton = () => {
    if (!selectedSize)
      setOpenSizeDropDown(true)
  }

  const imageList = selectedColorImageList.imageUrl.map((productImage: string, index: number) => {
    return (
      <ImageSmall key={`list-image-${index}`} isSelected={productImage === selectedImageProduct} src={productImage} onClick={() => setSelectedImageProduct(productImage)} alt={`ProductImage${index}`} />
    )
  })

  const colorsList = product.stock.map((stock: any, index: number) => {
    return (<ImageSmall key={`ListProductColor-${index}`} isSelected={selectedColorProduct === stock.color} src={stock.imageUrl[0]} onClick={() => handleProductColorChange(stock.color, stock.imageUrl[0])} alt={`ProductImage${index}`} />)
  })

  const imageBig = (<MainImage src={selectedImageProduct} alt={`ProductImage${product.stock[0].imageUrl[0]}`} />)

  const sizeList = product.stock.filter((stock: any) => stock.color === selectedColorProduct)[0].size;


  return (
    <Body>
      <BodyContainer>
        <ImageContainer>
          <ListImages direction={'column'}>
            {imageList}
          </ListImages>
          {imageBig}
        </ImageContainer>
        <ProductDetailsContainer>
          <h1>{product.brand}</h1>
          <h2>{product.name}</h2>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <h3>£ {product.price}</h3>
            <p style={{ marginLeft: '5px ' }}> including VAT</p>
          </div>
          <div>
            <p>Color: {selectedColorProduct}</p>
          </div>
          <ListImages direction={'row'}>
            {colorsList}
          </ListImages>
          <BuyButtonContainer>
            <DropDownSize selectedSize={selectedSize} setSelectedSize={setSelectedSize} stock={sizeList} isOpen={openSizeDropDown} setIsOpen={setOpenSizeDropDown} />
            <BuyButton onClick={() => handleBuyButton()}>
              Buy Now
            </BuyButton>
            <DeliveryInfo>
              <img src={deliveryImage} alt={'delivery'} style={{ height: '30px', width: '30px', backgroundColor: 'white', margin: '20px auto 10px 20px' }} />
              <p style={{ marginLeft: '20px', fontSize: '15px', fontWeight: 600 }}>1-4 Working days</p>
              <p style={{ marginLeft: '20px', fontSize: '15px' }}>Standard Delivery</p>
              <div style={{ margin: '10px auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                <img src={leftCurveArrow} alt={'leftCurveArrow'} style={{ height: '20px', width: '20px' }} />
                <p style={{ marginLeft: '20px', fontSize: '15px', fontWeight: 600 }}>100 days Return rights</p>
              </div>
            </DeliveryInfo>
          </BuyButtonContainer>
        </ProductDetailsContainer>
      </BodyContainer>
    </Body>
  )
}

export default ProductPage