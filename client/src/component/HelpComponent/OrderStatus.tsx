import React, { FC } from 'react'
import styled from 'styled-components'

const TestContainer = styled.div`
  display: flex;
  height:100%;
  width:100%;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  color:red;
`

const OrderStatus: FC = () => {


  return (
    <TestContainer>
      <h1>this is order status page</h1>
    </TestContainer>
  )
}

export default OrderStatus