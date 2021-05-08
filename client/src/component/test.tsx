import React, { FC, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Loader from "react-loader-spinner";
import dataExample from './constant/dataExample'

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
  const [isLoading, setIsLoading] = useState(false);

  const handleTest = () => {
    setIsLoading(true)
    axios
      .get('test')
      .then((res: any) => {
        const result: any = []
        for (let i = 0; i < 11; i++) {
          result.push(res.data[i]['city'])
        }
        setTestCall(result);
        setIsLoading(false)
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

  console.log(dataExample)

  return (
    <TestContainer>
      <div>Hello World</div>
      {testCall.length === 0 && !isLoading && testButton}
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        visible={isLoading}
      // timeout={3000} //3 secs
      />
      <div>{testis}</div>
    </TestContainer>
  )
}

export default Test