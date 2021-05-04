import React, { FC, useState, ReactNode } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Loader from "react-loader-spinner";

export interface IDropDown {
  isActive: Boolean
  isActiveOnTop: Boolean
  menuType?: String
}

const NavbarDropdownContent = styled.div<IDropDown>`
  display: none;
  position: absolute;
  border-radius:10px;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;

  ${(p) => (p.menuType === 'small') && `
    right:60px;
    top:40px;
    min-width: 160px;
  `}

  ${(p) => (p.menuType === 'big') && `
    right:60px;
    top:80px;
    min-width: 100%;
    height:80px;
  `}

  ${(p) => (p.isActive || p.isActiveOnTop) && `
   display: block;
   >h1 {
        display: block;
    }
  `}

  &::hover{
    display: block;
   >h1 {
        display: block;
    }
  }
`;

export interface Properties {
  title?: string
  content?: React.ReactNode
  height?: string
  width?: string
  menuType?: string
  isActive?: boolean
}

const DropdownHeaderMenu: FC<Properties> = ({
  title,
  content,
  height = '200px',
  width = '150px',
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