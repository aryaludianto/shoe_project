import React, { FC } from 'react'
import styled from 'styled-components'

const TestContainer = styled.div`
  display: flex;
  height:100%;
  width:100%;
  justify-content:center;
  flex-direction:column;
  color:red;
`

const TestSecond: FC = () => {


  return (
    <TestContainer>
      <h1>Helloooooooooooooooooooo</h1>
    </TestContainer>
  )
}

export default TestSecond