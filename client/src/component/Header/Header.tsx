import React, { FC, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Loader from "react-loader-spinner";
import DropdownHeaderMenu from './DropdownMenu'
import { NavLink } from 'react-router-dom';

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
  width:100%;
  display:flex;
  flex-direction:row;
  background-color:blue;
  justify-content:flex-end;
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
  margin-right:15px;
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

  const helpMenu = (<>
    <NavLink to="/second" >
      <h1>bangsat menclok</h1>
    </NavLink>
    <h1>bangsat</h1>
    <h1>bangsat</h1> </>);

  return (<HeaderContainer>

    <BrandHeader >
      <HeaderItems>
        <HeaderItem onMouseEnter={() => setIsHelpDrop(true)} onMouseLeave={() => setIsHelpDrop(false)}>Help</HeaderItem>
        <h5>|</h5>
        <HeaderItem>Sign In</HeaderItem>
      </HeaderItems>
    </BrandHeader>
    <DropdownHeaderMenu isActive={isHelpDrop} content={helpMenu} />



    <BrandMenu>
      Halooooooo
    </BrandMenu>

    <BrandInfo>
    </BrandInfo>
  </HeaderContainer>
  )
}

export default Header