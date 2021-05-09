import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'


interface IBodyContainer {
  isOpen: boolean
}

const BodyContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 100%;
  height: 50px;
  border:1px solid black;
  cursor: pointer;
  background-color:white;
  position: relative;
  display: inline-block;

  justify-content: center;

  h5{
    margin:0;
    height:50px;
    display:flex;
    justify-content:center;
    align-items: center;
  }

`

const DropDownList = styled.div<IBodyContainer>`
  display:none;
  flex-direction:column;
  overflow:auto; 
  position: absolute;
  width:100%;
  background-color:white;

  height:100px;
  border-top: none;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  ${(p) => p.isOpen && `display: flex; `}
`

interface IList {
  isActive: boolean
}

const ListSize = styled.div<IList>`
  display: flex;
  flex-direction:row;
  height:50px;
  margin:5px;

  &:hover{
    opacity:0.5;
  }

  ${(p) => !p.isActive && `
    cursor: not-allowed;
    opacity: 0.5;
    background-color: light gray;
  `}
`


interface Properties {
  stock: any
  setSelectedSize: Function
  setIsOpen: Function
  selectedSize: number;
  isOpen: boolean
}

const DropDownSize: FC<Properties> = ({ stock, setSelectedSize, selectedSize, isOpen, setIsOpen }) => {
  const [chosenSize, setChosenSize] = useState(selectedSize);

  useEffect(() => {
    setChosenSize(selectedSize)
  }, [selectedSize]);

  const handleSelection = (num: number) => {
    setChosenSize(num);
    setSelectedSize(num);
  }

  const sizeLists = stock.map((size: any, index: number) => {
    return (<ListSize key={`list-size-${index}`} onClick={() => (size.amount !== 0 && handleSelection(size.number))} isActive={size.amount !== 0} > Size: {size.number} | {size.amount === 0 ? 'Not available' : size.amount === 1 ? 'Last Product' : ' Product Available'}</ListSize>)
  })

  return (
    <BodyContainer onClick={() => setIsOpen(!isOpen)}>
      <h5>{chosenSize === 0 ? 'Choose your size' : `Size : ${chosenSize}`}</h5>
      <DropDownList isOpen={isOpen}>
        {sizeLists}
      </DropDownList>
    </BodyContainer>
  )
}

export default DropDownSize