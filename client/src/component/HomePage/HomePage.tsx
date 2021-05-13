import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import ProductCard from '../Card/ProductCard'
import Body from '../Body/Body'
import images from '../../img'
import { screenBreakpoints, onDevice } from '../constant/theme'
import useWindowSize from '../constant/useWindowSize'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/effects/Products';
import { AppState } from '../../redux/store';
import ScreenLoader from '../Loader/Loader'

const { hero1, hero2, hero3, hero_mobile1, hero_mobile2 } = images;
const heroImages = [hero1, hero2, hero3];
const heroImagesMobile = [hero_mobile1, hero_mobile2];

export const ProductBlock = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  margin:50px auto;
  justify-content:center;
`

interface IHeroContainer {
  imageLink: string
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
  const { width } = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const newProducts = useSelector((state: AppState) => state.products);
  const productsData = newProducts.products

  const products = productsData && productsData.map((data, index) => {
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

  const Page = productsData ? (<Body>
    <HeroContainer imageLink={heroImageUrl} />
    <ProductBlock>
      {products}
    </ProductBlock>
  </Body>) : (<ScreenLoader />)

  return Page;
}

export default HomePage
