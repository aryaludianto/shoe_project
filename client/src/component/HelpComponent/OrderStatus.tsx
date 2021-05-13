import React, { FC, useState } from 'react'
import styled from 'styled-components'
import Body from '../Body/Body'
import { Button } from '../ProductPage/ProductPage'
import { NavLink } from 'react-router-dom';
import { onDevice } from '../constant/theme'

const FormContainer = styled.div`
  display: flex;
  height:calc(100vh - 400px);
  width:100%;
  align-items:center;
  justify-content:center;
  flex-direction:column;

  ${onDevice.mobileL}{
   margin-top: 40px;
  }
`

const FormOrderStatus = styled.div`
  width:400px;
  height:100%;
  background-color:#DBDBDB;
  margin-bottom:40px;
  display:flex;
  flex-direction:column;
  justify-content:center;

  h2, h6{
    text-align:center;
    margin: 10px auto;
    font-weight:500;
  }

  ${onDevice.mobileS}{
   width:100%;
  }
`

const TextInput = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: black;
    text-align: center;
  }
`


const OrderStatus: FC = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const submitValue = () => {
    //TODO: Add validations and submit values
    if (!orderNumber || !emailAddress) {
      alert('You have to fill correct Order Number or Email address');
      return
    }
    alert('Submit Order status ' + orderNumber + ' ' + 'For ' + emailAddress)
  }

  return (
    <Body>
      <FormContainer>
        <FormOrderStatus>
          <h2>View or Manage Your Order</h2>
          <h6>To check the status of your order, or to start a return, please enter your order number and email address.</h6>
          <TextInput type='text' placeholder='Order Number' onChange={e => setOrderNumber(e.target.value)} />
          <TextInput type='text' placeholder='Email address' onChange={e => setEmailAddress(e.target.value)} />
          <Button onClick={() => submitValue()} >
            Submit
          </Button>
          <h6 style={{ marginTop: '20px' }}> Already a member?
            <NavLink to="/underconstruction" style={{ textDecoration: 'underline', color: 'black', marginLeft: '5px' }} >
              Sign in
            </NavLink>
          </h6>
        </FormOrderStatus>
      </FormContainer>
    </Body >
  )
}

export default OrderStatus