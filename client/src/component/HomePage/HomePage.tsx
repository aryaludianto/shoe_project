import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Loader from "react-loader-spinner";
import ProductCard from '../Card/ProductCard'
import Body from '../Body/Body'
import images from '../../img'
import { screenBreakpoints, onDevice } from '../constant/theme'
import useWindowSize from '../constant/useWindowSize'

//Example data
import dataExample from '../constant/dataExample'

const { hero1, hero2, hero3, hero_mobile1, hero_mobile2 } = images;
const heroImages = [hero1, hero2, hero3];
const heroImagesMobile = [hero_mobile1, hero_mobile2];

// const BodyContainer = styled.div`
//   display: flex;
//   flex-direction:column;
//   width:100%;
//   margin: 0 20px;
// `
// const SortBar = styled.div`
//   display:flex;
//   height: 50px;
//   width:100%;
//   margin-top:0;
// `

const ProductBlock = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  margin:50px auto;
  justify-content:center;
`

interface IHeroContainer {
  imageLink: any
}

const HeroContainer = styled.div<IHeroContainer>`
  background-image: url(${(p) => p.imageLink});
  width:100vw;
  height: 90vh;
  display:flex;
  background-position:center;
  background-repeat:no-repeat;
  background-size: contain;
  
  ${onDevice.mobileL}{
    height: 40vh;
  }

  ${onDevice.mobileS}{
    height: 100vh;
  }

`

const HomePage: FC = () => {

  const [heroImageIndex, setHeroImageIndex] = useState(Number);
  const { width } = useWindowSize()

  const products = dataExample.map((data, index) => {
    return (<ProductCard key={`product-card:${index}`} product={data} />)
  })

  const limit = width > screenBreakpoints.mobileS ? 2 : 1;

  let counter = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter > limit) {
        counter = 0;
      }
      setHeroImageIndex(counter);
      counter++;
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroImageUrl = width > screenBreakpoints.mobileS ? heroImages[heroImageIndex] : heroImagesMobile[heroImageIndex];

  return (
    <Body>

      {/* <BodyContainer> */}
      {/* <SortBar> This is for sorting </SortBar> */}
      {/* <Slideshow /> */}
      {/* <HeroImage /> */}
      <HeroContainer imageLink={heroImageUrl} />
      <ProductBlock>
        {products}
      </ProductBlock>
      {/* </BodyContainer> */}
    </Body>
  )
}

export default HomePage
