import React, { FC, useState } from 'react'
import styled from 'styled-components'
import DropdownHeaderMenu from './DropdownMenu'
import { NavLink } from 'react-router-dom';
import MenuItem from './MenuItem';
import useWindowSize from '../constant/useWindowSize'
import { screenBreakpoints, onDevice } from '../constant/theme'
import images from '../../img'

const HeaderContainer = styled.div`
  height: 120px;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  
  ${onDevice.mobileL}{
    height: 60px;
    flex-direction:row;
    background-color:#7F7F7F;
  }
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

  ${onDevice.mobileL}{
    margin-left:10px;
  }
`

const MobileButton = styled.div`
  height:30px;
  width:30px;
  margin-right: 20px;
  margin-left:10px;

  img{
    width:100%;
    height:100%;
  }

  &:hover{
    opacity:0.5;
  }
`

const DesktopMenuList = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  height:100%;
  width:100%;
`

const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState("");
  const { width } = useWindowSize()

  const helpMenu = (<>
    <h3>Help</h3>
    <NavLink to="/orderstatus" style={{ textDecoration: 'none', color: 'black' }} >
      <MenuItem height={'15px'} margin={'10px 0'}>Order Status</MenuItem>
    </NavLink>
    <MenuItem height={'15px'} margin={'10px 0'}>Dispatch and Delivery</MenuItem>
    <MenuItem height={'15px'} margin={'10px 0'}>Returns</MenuItem>
    <MenuItem height={'15px'} margin={'10px 0'}>Contact Us</MenuItem>
  </>);

  const categoryMenu = (category: string) => {
    return (
      <DesktopMenuList>
        <div style={{ margin: 'auto' }}>
          <h3>{category} Categories</h3>
          <NavLink key={`${category}-business`} to={{
            pathname: "/sorted",
            state: { category, type: 'business' },
          }} style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem height={'15px'} margin={'10px 0'}>{category} Business collection</MenuItem>
          </NavLink>
          <NavLink key={`${category}-casual`} to={{
            pathname: "/sorted",
            state: { category, type: 'casual' },
          }} style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem height={'15px'} margin={'10px 0'}>{category} Casual collection</MenuItem>
          </NavLink>
        </div>
      </DesktopMenuList>)
  }
  const DesktopHeader = (
    <>
      <BrandHeader height={'40px'} backGroundColor={'white'} justifyContent={'flex-end'}>
        <HeaderLogo>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }} >
            Golden Shoe
          </NavLink>
        </HeaderLogo>
        <HeaderItems>
          <HeaderItem>
            <img style={{ height: '20px', width: '30px' }} src={images.profileIcon} alt="profile" onClick={() => console.log('profile')} />
          </HeaderItem>
          <h5>|</h5>
          <HeaderItem>
            <img style={{ height: '20px', width: '30px' }} src={images.shoppingCart} alt="shopping-cart" />
          </HeaderItem>
          <h5>|</h5>
          <HeaderItem onMouseEnter={() => setOpenMenu('help')} onMouseLeave={() => setOpenMenu('')}>Help</HeaderItem>
          <h5>|</h5>
          <HeaderItem>Sign In</HeaderItem>
        </HeaderItems>
      </BrandHeader>
      <DropdownHeaderMenu setOpenMenu={() => console.log('press menu')} isActive={openMenu === 'help'} content={helpMenu} />
      <BrandHeader backGroundColor={'#DBDBDB'} height={'50px'} justifyContent={'center'}>
        <MenuItem onMouseEnter={() => setOpenMenu('menCategories')} onMouseLeave={() => setOpenMenu('')}>Men</MenuItem>
        <MenuItem onMouseEnter={() => setOpenMenu('womenCategories')} onMouseLeave={() => setOpenMenu('')}>Women</MenuItem>
        <MenuItem onMouseEnter={() => setOpenMenu('kidsCategories')} onMouseLeave={() => setOpenMenu('')}>Kids</MenuItem>
      </BrandHeader>
      <DropdownHeaderMenu setOpenMenu={() => console.log('press menu')} isActive={openMenu === 'menCategories'} menuType={'big'} content={categoryMenu('Men')} />
      <DropdownHeaderMenu setOpenMenu={() => console.log('press menu')} isActive={openMenu === 'womenCategories'} menuType={'big'} content={categoryMenu('Women')} />
      <DropdownHeaderMenu setOpenMenu={() => console.log('press menu')} isActive={openMenu === 'kidsCategories'} menuType={'big'} content={categoryMenu('Kids')} />
      <BrandHeader backGroundColor={'silver'}>
      </BrandHeader>
    </>)

  const MobileHeader = (
    <>
      <HeaderLogo>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }} >
          Golden Shoe
        </NavLink>
      </HeaderLogo>
      <MobileButton>
        <img src={images.profileIcon} alt="profile" onClick={() => setOpenMenu('profileMenu')} />
      </MobileButton>
      <MobileButton>
        <img src={images.shoppingCart} alt="shopping-cart" />
      </MobileButton>
      <MobileButton onClick={() => setOpenMenu('mobileMenu')}>
        <img src={images.burgerMenu} alt="burger-menu" />
      </MobileButton>
      <DropdownHeaderMenu isActive={openMenu === 'mobileMenu'} menuType={'mobile'} content={(<h1>Mobile Menu categories</h1>)}
        setOpenMenu={setOpenMenu} />
      <DropdownHeaderMenu isActive={openMenu === 'profileMenu'} menuType={'mobile'} content={(<h1>Profile Menu</h1>)}
        setOpenMenu={setOpenMenu} />
    </>
  )

  return (
    <HeaderContainer>
      {width > screenBreakpoints.mobileL ? DesktopHeader : MobileHeader}
    </HeaderContainer>
  )
}

export default Header