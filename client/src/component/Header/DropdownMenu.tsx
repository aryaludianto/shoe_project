import React, { FC, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'

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
  position: absolute;
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
  `}

  ${(p) => (p.menuType === 'big') && `
    top:90px;
    min-width: 100%;
    padding: 15px 20px;
    max-height:500px;
  `}

  ${(p) => (p.isActive || p.isActiveOnTop) && css`
  animation:${growDown} 300ms ease-in-out;
  transform-origin: top center;
  display:block;
  `}
`;

export interface Properties {
  content?: React.ReactNode
  menuType?: string
  isActive?: boolean
}

const DropdownHeaderMenu: FC<Properties> = ({
  content,
  menuType = 'small',
  isActive = false }) => {

  const [isActiveOnTop, setIsActiveOnTop] = useState(false);

  return (
    <NavbarDropdownContent onMouseEnter={() => setIsActiveOnTop(true)}
      onMouseLeave={() => setIsActiveOnTop(false)} isActiveOnTop={isActiveOnTop}
      isActive={isActive} menuType={menuType}>
      {content}
    </NavbarDropdownContent>
  )
}

export default DropdownHeaderMenu