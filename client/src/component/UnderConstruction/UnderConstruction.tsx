/* eslint-disable eqeqeq */
import React, { FC } from 'react'
import styled from 'styled-components'
import Body from '../Body/Body'
import { onDevice } from '../constant/theme'


const NotificationContainer = styled.div`
  height:90vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  ${onDevice.mobileL}{
    h1{
      font-size:30px;
    }
    h3{
      font-size:13px;
    }
  }
`

const UnderConstruction: FC = () => {

  return (
    <Body>
      <NotificationContainer>
        <h1>Under construction</h1>
        <h3>We're Working on our site now --Check back soon!</h3>
      </NotificationContainer>
    </Body>);
}

export default UnderConstruction