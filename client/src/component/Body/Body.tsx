import React, { FC } from 'react'
import styled from 'styled-components'
import { onDevice } from '../constant/theme'

const BodyContainer = styled.div`
  display: flex;
  flex-direction:column;
  width:100%;
  margin: 0 20px;
  
  ${onDevice.mobileL}{
    margin: 0;
  }
`

const Body: FC = ({ children }) => {

  return (
    <BodyContainer>
      {children}
    </BodyContainer>
  )
}

export default Body