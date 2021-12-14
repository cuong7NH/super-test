import React from 'react'
// @ts-ignore
import { UilArrowUp } from '@iconscout/react-unicons'
import styled from 'styled-components'

const ButtonGoTopWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  display: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
  background: #e1caca
`

const ButtonGoTop = () => {
  return (
    <ButtonGoTopWrapper>
      <UilArrowUp />
    </ButtonGoTopWrapper>
  )
}

export default ButtonGoTop