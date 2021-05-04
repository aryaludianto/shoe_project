import React, { FC, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Loader from "react-loader-spinner";
import DropdownHeaderMenu from './DropdownMenu'
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.div`
  height: 120px;
  width:100%;
  background-color:red;
  display:flex;
  flex-direction:column;
  align-items:center;
`

interface IHeaderMenu {
  backGroundColor?: string
  justifyContent?: string
}

const BrandHeader = styled.div<IHeaderMenu>`
  height:40px;
  width:100%;
  display:flex;
  flex-direction: row;
  ${(p) => (p.justifyContent && `justify-content: ${p.justifyContent}`)};
  ${(p) => (p.backGroundColor && `background-color: ${p.backGroundColor}`)};
`


const HeaderItems = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  margin-right:40px;
`

const HeaderItem = styled.div`
  margin: auto 10px;
  height:100%;
  font-size:12px;
  cursor: pointer;
  display:flex;
  align-items:center;
`

const MenuItem = styled.p`
  font-size:12px;

  &:hover{
    cursor: pointer;
    opacity:0.5;
  }
`

const Header: FC = () => {

  const [isHelpDrop, setIsHelpDrop] = useState(false);
  const [isNewRelease, setIsNewRelease] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // const handleTest = () => {
  //   setIsLoading(true)
  //   axios
  //     .get('test')
  //     .then((res: any) => {
  //       const result: any = []
  //       for (let i = 0; i < 11; i++) {
  //         result.push(res.data[i]['city'])
  //       }
  //       setTestCall(result);
  //       setIsLoading(false)
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }

  // const testButton = (<TestButton onClick={handleTest}>This is test</TestButton>);

  // const testis = testCall.length !== 0 && testCall.map((test: String, index: Number) => {
  //   return (<TestisContainer key={`testis-${index}`}>
  //     {test}
  //   </TestisContainer>)
  // })


  const helpMenu = (<>
    <h3>Help</h3>
    <NavLink to="/orderstatus" style={{ textDecoration: 'none', color: 'black' }} >
      <MenuItem>Order Status</MenuItem>
    </NavLink>
    <MenuItem>Dispatch and Delivery</MenuItem>
    <MenuItem>Returns</MenuItem>
    <MenuItem>Size Charts</MenuItem>
    <MenuItem>Contact Us</MenuItem>
  </>);

  return (<HeaderContainer>

    <BrandHeader backGroundColor={'white'} justifyContent={'flex-end'}>
      <HeaderItems>
        <HeaderItem onMouseEnter={() => setIsHelpDrop(true)} onMouseLeave={() => setIsHelpDrop(false)}>Help</HeaderItem>
        <h5>|</h5>
        <HeaderItem>Sign In</HeaderItem>
      </HeaderItems>
    </BrandHeader>
    <DropdownHeaderMenu isActive={isHelpDrop} content={helpMenu} />



    <BrandHeader backGroundColor={'gold'} justifyContent={'space-between'}>
      <MenuItem onMouseEnter={() => setIsNewRelease(true)}>New release</MenuItem>
      <MenuItem>Men</MenuItem>
      <MenuItem>Women</MenuItem>
      <MenuItem>Kids</MenuItem>
    </BrandHeader>
    <DropdownHeaderMenu isActive={isNewRelease} content={(<h1>beraaaaakkkkk</h1>)} />


    <BrandHeader backGroundColor={'silver'}>
    </BrandHeader>
  </HeaderContainer>
  )
}

export default Header