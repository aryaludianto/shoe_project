import React, { FC, useState } from 'react'
import styled from 'styled-components'

const BodyContainer = styled.div`
  display: flex;
  flex-direction:column;
  width:100%;
`

const Body: FC = ({ children }) => {

  return (
    <BodyContainer>
      {children}
    </BodyContainer>
  )
}

export default Body