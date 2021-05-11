import React, { FC } from 'react'
import styled from 'styled-components'
import Loader from "react-loader-spinner";

const LoaderContainer = styled.div`
  width:100vw;
  height: 99vh;
  display:flex;
  position: absolute;
  align-items:center;
  justify-content:center;
  background-color:#7F7F7F;
`

const ScreenLoader: FC = () => {

  return (
    <LoaderContainer >
      <h3>One Moment Please</h3>
      <Loader
        type="MutatingDots"
        color="#00BFFF"
        height={100}
        width={100}
        visible={true}
      />
    </LoaderContainer>
  )
}

export default ScreenLoader