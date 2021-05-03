import React, { FC, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';

const TestContainer = styled.div`
  display: flex;
  height:100%;
  width:100%;
  justify-content:center;
  flex-direction:column;
  color:red;
`

const TestisContainer = styled.div`
  margin:10px;

`
const TestButton = styled.button`
width:100px;
height:40px;
display:flex;
justify-content:center;

`

const Test: FC = () => {

  const [testCall, setTestCall] = useState([]);

  const handleTest = () => {
    axios
      .get('test')
      .then(res => {
        const result = res.data.map((data: any, index: number) => {

          if (index < 11)
            return data.city

          return null
        })

        setTestCall(result);
      })
      .catch(err => {
        console.error(err);
      });
  }

  const testButton = (<TestButton onClick={handleTest}>This is test</TestButton>);

  const testis = testCall.length !== 0 && testCall.map((test: String, index: Number) => {
    return (<TestisContainer key={`testis-${index}`}>
      {test}
    </TestisContainer>)
  })


  return (
    <TestContainer>
      <div>Hello World</div>
      {testButton}
      <div>{testis}</div>
    </TestContainer>
  )
}

export default Test