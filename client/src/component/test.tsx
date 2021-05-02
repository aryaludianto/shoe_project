import React, { FC, useState, useEffect } from 'react'
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

const Test: FC = () => {

  const [testCall, setTestCall] = useState([]);

  useEffect(() => {
    axios
      .get('/test')
      .then(res => {
        const result = res.data.map((data: any) => data.city)
        setTestCall(result);
      })
      .catch(err => {
        console.error(err);
      });
  });

  const testis = testCall.length !== 0 && testCall.map(test => {
    return (<TestisContainer>
      {test}
    </TestisContainer>)
  })


  return (
    <TestContainer>
      <div>Hello World</div>
      <div>{testis}</div>
    </TestContainer>
  )
}

export default Test