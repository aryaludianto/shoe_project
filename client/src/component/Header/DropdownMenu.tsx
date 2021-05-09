import React, { FC, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import useWindowSize from '../constant/useWindowSize'
import { screenBreakpoints, onDevice } from '../constant/theme'

export interface IDropDown {
  isActive: Boolean
  isActiveOnTop: Boolean
  menuType?: String
}

const growDown = keyframes`
 0% {  transform: scaleY(0); }
 80% { transform: scaleY(1.1); }
 100% {  transform: scaleY(1); }
`

const NavbarDropdownContent = styled.div<IDropDown>`
  display: none;
  border-radius:10px;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  z-index: 1;
  
  ${(p) => (p.menuType === 'small') && `
    right:60px;
    top:40px;
    min-width: 160px;
    padding: 10px 20px;
    max-height:400px;
    position: absolute;

  `}

  ${(p) => (p.menuType === 'big') && `
    top:90px;
    min-width: 100%;
    padding: 15px 20px;
    max-height:500px;
    position: absolute;
  `}

  ${(p) => (p.menuType === 'mobile') && `
    position: fixed;
    border-radius:0;
    top:0;
    left:0;
    min-height:100vh;
    min-width: 100%;
  `}

  ${(p) => (p.isActive || p.isActiveOnTop) && css`
    animation:${growDown} 300ms ease-in-out;
    transform-origin: top center;
    display: block;
  `}
`;

export interface Properties {
  content?: React.ReactNode
  menuType?: string
  isActive?: boolean
  setOpenMenu: Function
}

const DropdownHeaderMenu: FC<Properties> = ({
  content,
  menuType = 'small',
  isActive = false,
  setOpenMenu }) => {
  const { width } = useWindowSize()

  const [isActiveOnTop, setIsActiveOnTop] = useState(false);

  const handleCloseMobileMenu = () => {
    setIsActiveOnTop(false)
    setOpenMenu('')
  }

  const MobileButton = (<div style={{ height: '10px', width: '10px', cursor: 'pointer', margin: '10px 10px' }}
    onClick={() => handleCloseMobileMenu()}>close menu</div >)

  return (
    <NavbarDropdownContent onMouseEnter={() => setIsActiveOnTop(true)}
      onMouseLeave={() => setIsActiveOnTop(false)} isActiveOnTop={isActiveOnTop}
      isActive={isActive} menuType={menuType}>
      {width <= screenBreakpoints.mobileL && MobileButton}

      {content}
    </NavbarDropdownContent>
  )
}

export default DropdownHeaderMenu