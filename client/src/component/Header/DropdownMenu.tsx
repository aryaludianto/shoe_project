import React, { FC, useState, ReactNode } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Loader from "react-loader-spinner";

// export interface IMenu {
//   height: string
//   width: string
//   menuType: MenuType
//   isHovered: boolean
// }

// const MenuContainer = styled.div<IMenu>`
//   height: ${(p) => p.height};
//   width: ${(p) => p.height};
//   background-color:white;
//   display: block;
//   flex-direction:column;
//   align-items:center;
// `

export interface IDropDown {
  isActive: boolean
  isActiveOnTop: boolean
}

const NavbarDropdown = styled.div`
position: relative;
display: inline-block;

&:hover {
  display: block;
}
`;


const NavbarDropdownContent = styled.div<IDropDown>`
display: none;
position: absolute;
right:60px;
top:40px;
background-color: #f9f9f9;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
padding: 12px 16px;
z-index: 1;

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


export enum MenuType {
  Small,
  Large
}

export interface Properties {
  title?: string
  content?: React.ReactNode
  height?: string
  width?: string
  menuType?: MenuType
  isActive?: boolean
}

const DropdownHeaderMenu: FC<Properties> = ({
  title,
  content,
  height = '200px',
  width = '150px',
  menuType = MenuType.Small,
  isActive = false }) => {

  const [isActiveOnTop, setIsActiveOnTop] = useState(false);



  // return (<MenuContainer height={height} width={width} menuType={menuType}>
  // </MenuContainer>
  // )
  return (
    <NavbarDropdownContent onMouseEnter={() => setIsActiveOnTop(true)} onMouseLeave={() => setIsActiveOnTop(false)} isActiveOnTop={isActiveOnTop} isActive={isActive}>
      {content}
    </NavbarDropdownContent>
  )
}

export default DropdownHeaderMenu