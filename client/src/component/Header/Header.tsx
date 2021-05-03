import React, { FC, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Loader from "react-loader-spinner";
import DropdownHeaderMenu from './DropdownMenu'

const HeaderContainer = styled.div`
  height: 120px;
  width:100%;
  background-color:red;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const BrandHeader = styled.div`
  height:40px;
  width:99.8%;
  display:flex;
  flex-direction:row;
  background-color:blue;
  justify-content:flex-end;
  padding-right:5px;
`

const BrandMenu = styled.div`
  height:40px;
  width:100%;
  display:flex;
  flex-direction:row;
  background-color:yellow;
`
const BrandInfo = styled.div`
  height:40px;
  width:100%;
  display:flex;
  flex-direction:row;
  background-color:black;
`

const HeaderItems = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
`

const HeaderItem = styled.div`
  margin: auto 10px;
  height:100%;
  font-size:12px;
  cursor: pointer;
  display:flex;
  align-items:center;
`

const Header: FC = () => {

  const [isHelpDrop, setIsHelpDrop] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // const handleTest = () => {
  //   setIsLoading(true)
  //   axios
  //     .get('test')
  //     .then((res: any) => {
  //       const result: any = []
  //       for (let i = 0; i < 11; i++) {
  //         result.push(res.data[i]['city'])
  //       }
  //       setTestCall(result);
  //       setIsLoading(false)
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }

  // const testButton = (<TestButton onClick={handleTest}>This is test</TestButton>);

  // const testis = testCall.length !== 0 && testCall.map((test: String, index: Number) => {
  //   return (<TestisContainer key={`testis-${index}`}>
  //     {test}
  //   </TestisContainer>)
  // })

  const helpDropDown = () => {

  }


  return (<HeaderContainer>

    <BrandHeader >
      <HeaderItems>
        <HeaderItem onMouseEnter={() => setIsHelpDrop(true)} onMouseLeave={() => setIsHelpDrop(false)}>Help</HeaderItem>
        <h5>|</h5>
        <HeaderItem>Sign In</HeaderItem>
      </HeaderItems>
    </BrandHeader>
    <DropdownHeaderMenu isActive={isHelpDrop} />


    <BrandMenu>
      Halooooooo
    </BrandMenu>

    <BrandInfo>
    </BrandInfo>
  </HeaderContainer>
  )
}

export default Header