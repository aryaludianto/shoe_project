import React, { FC } from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  height: 300px;
  width:100%;
  display:flex;
  flex-direction:column;
  padding-top:20px;
  background-color:#DBDBDB;
`

const Footer: FC = () => {
  return (<FooterContainer>
  </FooterContainer>
  )
}

export default Footer