import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
// import MenuItem from './MenuItem';

const FooterContainer = styled.div`
  height: 300px;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color:gold;
`

const Footer: FC = () => {


  return (<FooterContainer>
    <h1>Halooooooo</h1>
  </FooterContainer>
  )
}

export default Footer