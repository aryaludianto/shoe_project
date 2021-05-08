import React, { FC } from 'react'
import styled from 'styled-components'

interface IMenuItem {
  height?: String
  margin?: String
}

const Item = styled.p<IMenuItem>`
  font-size:15px;
  height: 50px;
  margin-right:20px;
  margin-left:20px;
  

  ${(p) => (p.margin && `margin: ${p.margin}`)};
  ${(p) => (p.height && `height: ${p.height}`)};

  &:hover{
    cursor: pointer;
    opacity:0.5;
  }
`

interface Properties {
  height?: String
  margin?: String
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const MenuItem: FC<Properties> = ({ height = '50px', margin, children, onMouseEnter, onMouseLeave }) => {

  return (<Item height={height} margin={margin} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
    {children}
  </Item>)
}

export default MenuItem
