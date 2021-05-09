import React, { FC } from 'react'
import styled from 'styled-components'

const BodyContainer = styled.div`
  display: flex;
  flex-direction:column;
  width:100%;
  margin: 0 40px;
`

const Body: FC = ({ children }) => {

  return (
    <BodyContainer>
      {children}
    </BodyContainer>
  )
}

export default Body