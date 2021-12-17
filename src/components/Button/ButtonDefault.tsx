import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  LoadingOutlined,
} from '@ant-design/icons'
type PropsStyled = {
  iconPosition: any,
  color: string,
  loading?: any
}

const ButtonDefaultWrapper = styled.div<PropsStyled>`
  display: inline-block;
  opacity: ${props => props.loading ? 0.7 : 1};
  height: 52px;
  .button-default {
    align-items: center;
    background-clip: padding-box;
    background-color: ${props => props.color};
    border: 1px solid transparent;
    border-radius: 0.8rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-size: 16px;
    flex-direction: ${props => props.iconPosition === 'end' ? 'row-reverse' : 'row'};
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    gap: 8px;
    min-height: 3rem;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
  }

  .button-default:hover,
  .button-default:focus {
    opacity: 0.8;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  .button-default:hover {
    transform: translateY(-1px);
  }

  .button-default:active {
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }
  
  .loading {
    background-color: red;
  }


`


type Props = {
  text: string,
  icon: any,
  iconPosition: string,
  themeProvider: {
    color: string,
  }
  loading?: boolean,
};

const ButtonDefault = ({ text, icon, iconPosition, themeProvider, loading }: Props) => {

  return (
    <ButtonDefaultWrapper iconPosition={iconPosition} color={themeProvider.color} loading={loading}>
      <button className='button-default'>
        {loading &&  <LoadingOutlined />}
        {icon}
        {text}
      </button>
    </ButtonDefaultWrapper>

  )
}

ButtonDefault.propTypes = {
  text: PropTypes.string,
}
export default ButtonDefault

