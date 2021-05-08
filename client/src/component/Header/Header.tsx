import React, { FC, useState } from 'react'
import styled from 'styled-components'
// import axios from 'axios';
// import Loader from "react-loader-spinner";
import DropdownHeaderMenu from './DropdownMenu'
import { NavLink } from 'react-router-dom';
import MenuItem from './MenuItem';

const HeaderContainer = styled.div`
  height: 120px;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`

interface IHeaderMenu {
  backGroundColor?: string
  justifyContent?: string
  height?: String
}

const BrandHeader = styled.div<IHeaderMenu>`
  width:100%;
  display:flex;
  flex-direction: row;
  ${(p) => (p.justifyContent && `justify-content: ${p.justifyContent}`)};
  ${(p) => (p.backGroundColor && `background-color: ${p.backGroundColor}`)};
  ${(p) => (p.height && `height: ${p.height}`)};
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


const HeaderLogo = styled.h2`
  margin: auto auto auto 50px;
  font-family: cursive;

  &:hover{
    cursor: pointer;
  }  

`

const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState("");


  const helpMenu = (<>
    <h3>Help</h3>
    <NavLink to="/orderstatus" style={{ textDecoration: 'none', color: 'black' }} >
      <MenuItem height={'15px'} margin={'10px 0'}>Order Status</MenuItem>
    </NavLink>
    <MenuItem height={'15px'} margin={'10px 0'}>Dispatch and Delivery</MenuItem>
    <MenuItem height={'15px'} margin={'10px 0'}>Returns</MenuItem>
    <MenuItem height={'15px'} margin={'10px 0'}>Contact Us</MenuItem>
  </>);

  const newReleaseMenu = (<>
    <div>
      <h3>New for Men</h3>
      <NavLink to="/newReleaseMen" style={{ textDecoration: 'none', color: 'black' }} >
        <MenuItem height={'15px'} margin={'10px 0'}>New Office collection</MenuItem>
      </NavLink>
      <MenuItem height={'15px'} margin={'10px 0'}>New Dance collection</MenuItem>
      <MenuItem height={'15px'} margin={'10px 0'}>New Sport Collection</MenuItem>
    </div>
    <div>
      <h3>New for Women</h3>
      <NavLink to="/newReleaseMen" style={{ textDecoration: 'none', color: 'black' }} >
        <MenuItem height={'15px'} margin={'10px 0'}>New Office collection</MenuItem>
      </NavLink>
      <MenuItem height={'15px'} margin={'10px 0'}>New Dance collection</MenuItem>
      <MenuItem height={'15px'} margin={'10px 0'}>New Sport Collection</MenuItem>
    </div>
  </>)

  return (<HeaderContainer>
    <BrandHeader height={'40px'} backGroundColor={'white'} justifyContent={'flex-end'}>
      <HeaderLogo>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }} >
          Golden Shoe
        </NavLink>
      </HeaderLogo>

      <HeaderItems>
        <HeaderItem onMouseEnter={() => setOpenMenu('help')} onMouseLeave={() => setOpenMenu('')}>Help</HeaderItem>
        <h5>|</h5>
        <HeaderItem>Sign In</HeaderItem>
      </HeaderItems>
    </BrandHeader>
    <DropdownHeaderMenu isActive={openMenu === 'help'} content={helpMenu} />

    <BrandHeader backGroundColor={'gold'} height={'50px'} justifyContent={'center'}>
      <MenuItem onMouseEnter={() => setOpenMenu('newRelease')} onMouseLeave={() => setOpenMenu('')}>New release</MenuItem>
      <MenuItem onMouseEnter={() => setOpenMenu('menCategories')} onMouseLeave={() => setOpenMenu('')}>Men</MenuItem>
      <MenuItem onMouseEnter={() => setOpenMenu('womenCategories')} onMouseLeave={() => setOpenMenu('')}>Women</MenuItem>
      <MenuItem onMouseEnter={() => setOpenMenu('kidsCategories')} onMouseLeave={() => setOpenMenu('')}>Kids</MenuItem>
    </BrandHeader>
    <DropdownHeaderMenu isActive={openMenu === 'newRelease'} menuType={'big'} content={newReleaseMenu} />
    <DropdownHeaderMenu isActive={openMenu === 'menCategories'} menuType={'big'} content={(<h1>Men Categories</h1>)} />
    <DropdownHeaderMenu isActive={openMenu === 'womenCategories'} menuType={'big'} content={(<h1>Women Categories</h1>)} />
    <DropdownHeaderMenu isActive={openMenu === 'kidsCategories'} menuType={'big'} content={(<h1>Kids Categories</h1>)} />


    <BrandHeader backGroundColor={'silver'}>
    </BrandHeader>
  </HeaderContainer>
  )
}

export default Header